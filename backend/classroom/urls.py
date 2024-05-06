from django.urls import path
from classroom import views

urlpatterns = [
    path("classrooms", views.classrooms),
    path("classrooms/<int:id>", views.classroom),
    path("booking/<int:id>", views.bookRoom),
    path("unbooking/<int:id>", views.unBookRoom),
]
