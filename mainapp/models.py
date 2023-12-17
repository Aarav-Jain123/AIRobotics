from django.db import models

# Create your models here.
class Reviews(models.Model):
    name = models.TextField()
    class_and_section = models.TextField()
    recommendations = models.TextField()


    def __str__(self):
        return self.name