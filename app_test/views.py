from django.conf import settings
from django.shortcuts import render
from django.utils.translation import get_language
from django.utils.translation import gettext_lazy as _ 
from .models import TestModel

def get_app_version():
    return '1.0.1'

def get_languages():
    return list(settings.MODELTRANSLATION_LANGUAGES)

def get_translated_fields():
    # List of fields to translate
    translation_fields = ['name', 'address', 'description']

    # Retrieve all field names from the model
    all_fields = [field.name for field in TestModel._meta.fields]

    # Get all language suffixes
    language_suffixes = get_languages()

    # Filter out fields that end with any language suffix
    non_translated_fields = [
        field for field in all_fields if not any(field.endswith(f"_{suffix}") for suffix in language_suffixes)
    ]

    # Translate the non-translated fields
    translated_fields = [_(field) for field in non_translated_fields]

    return {
        'translation_fields': translation_fields,
        'fields': translated_fields
    }

# Create your views here.
def index(request):
    test_data = TestModel.objects.all()

    # Create a list of fields to display based on the current language
    fields = get_translated_fields()['fields']

    greeting = _("Welcome to our website! from view.py")
    instructions = _("Please enjoy browsing our products. from view.py")

    # Pass translated text to the template
    context = {
        'greeting': greeting,
        'instructions': instructions,
        'app_version': get_app_version(),
        'test_data': {
            'headers': fields,
            'data': test_data
        }
    }

    return render(request, 'index.html', context)