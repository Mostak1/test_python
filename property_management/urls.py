from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('properties.urls')),  # Include the properties app's URL configuration
]
