from django.urls import path
from app import views

urlpatterns = [
    path('auth', views.login),
    path('register', views.register),
    path('profile', views.profile),
    path('edit-profile', views.editProfile)
]