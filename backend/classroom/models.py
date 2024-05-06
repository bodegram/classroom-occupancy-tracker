from django.db import models

# Create your models here.
class Classroom(models.Model):
    name = models.CharField(max_length=1000, null=True, blank=True)
    location = models.CharField(max_length=1000, null=True, blank=True)
    capacity = models.IntegerField(blank=True, null=True)
    isOccupied = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name


