from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import TestModel

# Create a custom admin class using TranslationAdmin
class TestModelAdmin(TranslationAdmin):
    pass

# Register the model with the custom admin class
admin.site.register(TestModel, TestModelAdmin)