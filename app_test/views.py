from django.shortcuts import render
from django.utils.translation import gettext_lazy as _ 
from .models import TestModel

def get_app_version():
    return '1.0.1'

def get_languages():
    return ['en', 'th', 'km', 'de', 'ru']

# Create your views here.
def index(request):
    test_data = TestModel.objects.all()

    # Create a list of fields to display based on the current language
    headers = [_('id'), _('name'), _('age'), _('email'), _('phone'), _('address'), _('description')]

    greeting = _("Welcome to our website! from view.py")
    instructions = _("Please enjoy browsing our products. from view.py")

    # Pass translated text to the template
    context = {
        'greeting': greeting,
        'instructions': instructions,
        'app_version': get_app_version(),
        'test_data': {
            'headers': headers,
            'data': test_data
        }
    }

    return render(request, 'index.html', context)