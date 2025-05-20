from django.urls import path
from .views import BookingView

urlpatterns = [
    path('api/booking/', BookingView.as_view(), name='booking'),
]
