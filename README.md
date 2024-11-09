# django-i18n-boilerplate
A Django starter template for quick multilingual app setup, featuring built-in translation, language switching.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configuration](#configuration)
   - [Part 0: Folder Structure](#part-0-folder-structure)
   - [Part 1: `settings.py`](#part-1-settingspy)
   - [Part 2: `urls.py`](#part-2-urlspy)
   - [Part 3: HTML Template Setup](#part-3-html-template-setup)
    - [Part 4: How to Send Data for Redirecting to a New Path (Change Language)](#part-4-how-to-send-data-for-redirecting-to-a-new-path-change-language)
    - [Part 5: Translating Text in Your Django Project](#part-5-translating-text-in-your-django-project)
    - [Part 6: Handling Translation Files](#part-6-handling-translation-files)

## Prerequisites

- **python 3.8x**: Core language for the project.
- **pipenv 2023.12.1**: Python dependency management tool.
- **django 4.2.16**: Web framework for building the application.
- **django-statici18n 2.5.0**: Manages JavaScript translations.
- **django-rosetta 0.10.1**: Web interface for translation files.
- **gettext 0.22.5a & iconv 1.17**: Required for handling translations.

## Installation

Assuming you have already built your Django application, follow these steps to set up your environment:

1. **Install Pipenv**: Ensure you have `pipenv` installed for managing dependencies.
   ```bash
   pip install pipenv
   ```

2. **Set Up the Virtual Environment**: Navigate to your project directory and create a virtual environment with `pipenv`, installing all dependencies from `requirements.txt`.
   ```bash
   pipenv install -r requirements.txt
   ```

3. **Activate the Virtual Environment**: Enter the virtual environment to start working on your project.
   ```bash
   pipenv shell
   ```

4. **Install gettext**: For Windows users, download and install `gettext` from [here](https://mlocati.github.io/articles/gettext-iconv-windows.html).

## Configuration

### Part 0: Folder Structure

```
root/
│
├─ main_app/
|   |── ...
│   ├── static/
│   │   └── js/
│   │       └── i18n/
│   │           └── en/
│   │               └── django.js
│   │           └── th/
│   │               └── django.js
│   │           └── ...
│   │── setting.py
│   │── urls.py
│   └── ...
|
|─ app_name/
|   |── ...
|   |── migrations/
|   |── templates/
|   └── ...
|   |── urls.py
|   |── views.py
|   └── ...
|
│─ locale/
│   └── en/
│     └── LC_MESSAGES/
│          └── django.po
│          └── django.mo
│          └── djangojs.mo
│          └── djangojs.po
│   └── th/
│     └── LC_MESSAGES/
│          └── django.po
│          └── django.mo
│          └── djangojs.mo
│          └── djangojs.po
│   └──...
└── ...
```

---

### Part 1: `settings.py`

```python
import os
from pathlib import Path
from django.utils.translation import gettext_lazy as _
```

**Explanation**:
- `os` and `Path`: Used for handling file paths.
- `gettext_lazy`: Used for lazy translation of text, allowing strings to be translated when they are accessed.

Follow these steps to configure your `settings.py` for multilingual support:

#### Step 1: Install Your App and Additional Apps

Ensure your app and additional apps are installed in `INSTALLED_APPS`:

```python
INSTALLED_APPS = [
    # Your other apps
    'app_name',  # Make sure your app is listed here
    'rosetta',  # Provides a web interface for editing translation files
    'django_statici18n',  # Manages JavaScript translations
    # Other installed apps
]
```

**Explanation**: Adding your app and additional apps like `rosetta` and `django_statici18n` to `INSTALLED_APPS` ensures Django loads them, enabling their functionalities such as translation management and web interfaces for editing translations.

#### Step 2: Update Middleware

Add `LocaleMiddleware` between `SessionMiddleware` and `CommonMiddleware`:

```python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',  # Place between SessionMiddleware and CommonMiddleware
    'django.middleware.common.CommonMiddleware',
    # Other middleware
]
```

**Explanation**: `LocaleMiddleware` is crucial for determining the user's language preference based on the request. Placing it between `SessionMiddleware` and `CommonMiddleware` allows it to access session data and apply language settings before other common processing.

#### Step 3: Add i18n Context Processor

Include the i18n context processor in your templates:

```python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.i18n',  # Add this line
            ],
        },
    },
]
```

**Explanation**: The `i18n` context processor makes translation functions available in your templates, allowing you to use `{% trans %}` and `{% blocktrans %}` tags for translating dynamic content.

#### Step 4: Set Language Code and Timezone

Configure language code, timezone, and enable i18n settings:

```python
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True
```

**Explanation**:
- `LANGUAGE_CODE`: Sets the default language for your application.
- `TIME_ZONE`: Sets the default timezone.
- `USE_I18N`: Enables Django's internationalization system, allowing the app to support multiple languages.
- `USE_L10N`: Enables localization, formatting dates, numbers, and calendars according to the current locale.
- `USE_TZ`: Enables timezone-aware datetimes, ensuring your app handles timezones correctly.

#### Step 5: Update Static URL

Ensure static URL and directories are set:

```python
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "main_app/static"),
]
```

**Explanation**:
- `STATIC_URL`: The URL prefix for static files.
- `STATIC_ROOT`: The directory where static files are collected for deployment.
- `STATICFILES_DIRS`: Additional directories to include when collecting static files, useful for organizing your static assets.

#### Step 6: Define Languages and Statici18n Settings

Specify supported languages and statici18n settings:

```python
LANGUAGES = (
    ('en', _('English')),
    ('th', _('Thai')),
    ('km', _('Khmer')),
    ('de', _('German')),
    ('ru', _('Russian')),
)

STATICI18N_ROOT = os.path.join(BASE_DIR, 'main_app/static/js')
STATICI18N_OUTPUT_DIR = 'jsi18n'
```

**Explanation**:
- `LANGUAGES`: Defines the languages your application supports, allowing users to switch between them.
- `STATICI18N_ROOT`: The root directory for static i18n files.
- `STATICI18N_OUTPUT_DIR`: The directory where JavaScript translation files are output, enabling client-side translations.

---

### Part 2: `urls.py`

Configure your `urls.py` to support internationalization and translation management:

```python
from django.contrib import admin
from django.conf import settings
from django.urls import path, include, re_path
from django.views.i18n import JavaScriptCatalog
from django.conf.urls.i18n import i18n_patterns

urlpatterns = [
    path('admin/', admin.site.urls),
    # Route for the Django admin interface.

    path('i18n/', include('django.conf.urls.i18n')),
    # Includes URL patterns for language switching.
]

urlpatterns += i18n_patterns(
    path('jsi18n/', JavaScriptCatalog.as_view(), name='javascript-catalog'),
    # Serves JavaScript translation catalogs for client-side translations.

    path('rosetta/', include('rosetta.urls')),
    # Includes Rosetta URLs for translation management if Rosetta is installed.

    path('', include('app_name.urls')),
    # Includes the main application URLs. Replace 'app_name' with your app's name.

    prefix_default_language=True
    # Ensures the default language is prefixed in URLs.
)

if 'rosetta' in settings.INSTALLED_APPS:
    urlpatterns += [
        re_path(r'^rosetta/', include('rosetta.urls')),
    ]
    # Conditionally includes Rosetta URLs if 'rosetta' is in INSTALLED_APPS.
```

#### Explanation

- **Admin URL**: Access Django's admin for management.
- **i18n URL**: Enable language switching for users.
- **JavaScript Catalog**: Provide JS translations for client-side.
- **Rosetta URLs**: Manage translations with Rosetta if installed.
- **Main App URLs**: Include main app routes for functionality.
- **Prefix Default Language**: Add default language to URLs for consistency.
- **Conditional Rosetta URLs**: Dynamically include Rosetta if in `INSTALLED_APPS`.

---

### Part 3: HTML Template Setup

In your HTML templates, ensure you load the necessary tags and set the language attribute dynamically:

```html
{% load static %}
{% load i18n %}
{% get_current_language as CURRENT_LANGUAGE %}
<html lang="{{ CURRENT_LANGUAGE }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- jQuery -->
    <script src="{% static 'js/jquery-3.6.0.min.js' %}?version={{ app_version }}"></script>

    <!-- for JavaScript i18n -->
    <script src="{% static 'js/i18n/'|add:CURRENT_LANGUAGE|add:'/djangojs.js' %}?version={{ app_version }}"></script>

    <!-- create select option for language switcher -->
    <script src="{% static 'js/script.js' %}?version={{ app_version }}"></script>

    <title>Django i18n | Language switcher</title>
</head>
```

#### Explanation

- **Load Tags**: `{% load static %}` and `{% load i18n %}` are used to enable static file handling and internationalization.
- **Language Attribute**: `lang="{{ CURRENT_LANGUAGE }}"` sets the HTML language attribute dynamically.
- **Static Files**: Use `{% static 'path' %}` to include static files with versioning for cache busting.
- **JavaScript i18n**: Loads language-specific JavaScript translations.

---

### Part 4: How to Send Data for Redirecting to a New Path (Change Language)

To change the language and redirect users to the appropriate path, use the following JavaScript module:

```javascript
// Module for handling language changes
var LanguageSwitcher = (function($) {
    function switchLanguage(languageCode, csrfToken) {
        const requestData = new FormData();
        requestData.append('csrfmiddlewaretoken', csrfToken);
        requestData.append('language', languageCode);

        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(/^[a-z]{2}(-[A-Z]{2})?/, `/${languageCode}`);

        $.ajax({
            type: 'POST',
            url: "/i18n/setlang/",
            data: requestData,
            processData: false,
            contentType: false,
            success: () => window.location.href = newPath,
            error: (xhr, status, error) => console.error('Error changing language:', error)
        });
    }

    return {
        switchLanguage: switchLanguage
    };
})(jQuery);
```

#### How It Works

1. **Send Language Code**: 
   - The `languageCode` parameter (e.g., `'en'`, `'es'`) is sent to the server to update the user's language preference.

2. **Modify URL Path**:
   - The current URL path is updated to include the new language code, ensuring the URL reflects the language change (e.g., `/en/about`).

3. **AJAX Request**:
   - A POST request is sent to `/i18n/setlang/` with the CSRF token and language code.
   - On success, the page redirects to the updated path with the new language.

This setup allows users to switch languages seamlessly, updating both the server-side language setting and the URL path.

### Part 5: Translating Text in Your Django Project

#### 1. Django Templates

To translate text in Django templates, use the `{% trans %}` template tag:

```html
<h1>{% trans "Welcome to our website!" %}</h1>
<p>{% trans "Please enjoy browsing our products." %}</p>
```

#### 2. JavaScript Files

For translations in JavaScript, use the `gettext` function:

```javascript
const textContent = {
    test_1: gettext("This is text1 from script.js"),
    test_2: gettext("This is text2 from script.js"),
    test_3: gettext("This is text3 from script.js"),
    test_4: gettext("This is text4 from script.js"),
    test_5: gettext("This is text5 from script.js"),
    test_6: gettext("This is text6 from script.js"),
};
```

#### 3. Python Views

In your Django views, use the `_` alias for `gettext_lazy` to translate text:

```python
from django.utils.translation import gettext_lazy as _

def index(request):
    greeting = _("Welcome to our website! from view.py")
    instructions = _("Please enjoy browsing our products. from view.py")
```

#### Summary

- **Django Templates**: Use `{% trans "text" %}` for translating static text.
- **JavaScript**: Use `gettext("text")` for translating text in scripts.
- **Python Views**: Use `_('text')` for translating text in views.

This setup ensures that your application can handle translations across different parts of your project, providing a consistent multilingual experience.

---

### Part 6: Handling Translation Files

To manage translations in your Django project, follow these steps:

#### 1. Generate `.po` Files

Create translation files for all languages or a specific language:

- For all languages:
  ```bash
  python manage.py makemessages --all
  ```

- For a specific language:
  ```bash
  python manage.py makemessages -l <language_code>
  ```

#### 2. Edit `.po` Files

You can edit translation files using two methods:

- **Via Django Rosetta**:
  - Access Rosetta through your browser at `/rosetta/`.
  - Use the web interface to edit translations easily.

- **Directly in a Text Editor**:
  - Open `.po` files in your preferred text editor.
  - Edit the translations directly in the file.

#### 3. Compile `.mo` Files

Compile the `.po` files into `.mo` files for use by Django:

- **For Non-JS Translations**:
  - Use the command:
    ```bash
    python manage.py compilemessages
    ```
  - Alternatively, use Django Rosetta, which automatically converts `.po` to `.mo` after editing.

- **For JS Translations**:
  - Generate JS translation files:
    ```bash
    python manage.py makemessages -a -d djangojs -i main_app/static/js/i18n/*
    ```
  - Compile the JS translations:
    ```bash
    python manage.py compilejsi18n
    ```
  - This will automatically create a folder `static/js/i18n` based on `STATICI18N_OUTPUT_DIR` in `settings.py`.

This process ensures your application is equipped with up-to-date translations for both server-side and client-side text.
