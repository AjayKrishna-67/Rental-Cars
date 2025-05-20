from django.db import models

class Booking(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    number = models.CharField(max_length=15)
    rental_days = models.PositiveIntegerField()
    address = models.TextField()

    

    def __str__(self):
        return f"{self.name} - {self.email}"
