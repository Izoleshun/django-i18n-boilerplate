from django.shortcuts import render
from django.utils.translation import gettext_lazy as _ 
from django.http import HttpResponse
from django_i18n import settings

def get_app_version():
    return '1.0.1'

# Create your views here.
def index(request):
    greeting = _("Welcome to our website! from view.py")
    instructions = _("Please enjoy browsing our products. from view.py")

    # Pass translated text to the template
    context = {
        'greeting': greeting,
        'instructions': instructions,
        'app_version': get_app_version()
    }

    return render(request, 'index.html', context)
