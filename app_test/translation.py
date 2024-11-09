from modeltranslation.translator import (
    translator,
    register,
    TranslationOptions,
)
from .views import get_translated_fields
from .models import TestModel

class TestModelTranslationOptions(TranslationOptions):
    translation_fields = get_translated_fields()['translation_fields']
    fields = tuple(translation_fields)

translator.register(TestModel, TestModelTranslationOptions)