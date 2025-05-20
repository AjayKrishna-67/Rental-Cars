from django import forms
from .models import *

class UserdetailsForm(forms.ModelForm):
    class Meta:
        model = Booking
        fields = '__all__'