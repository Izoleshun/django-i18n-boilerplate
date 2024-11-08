from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
class TestModel(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=15)
    address = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.name