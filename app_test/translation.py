from modeltranslation.translator import (
    translator,
    register,
    TranslationOptions,
)
from .models import TestModel

class TestModelTranslationOptions(TranslationOptions):
    fields = ('name', 'address', 'description')

translator.register(TestModel, TestModelTranslationOptions)