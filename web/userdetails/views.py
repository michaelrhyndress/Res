from django.shortcuts import render
from rest_framework import generics, permissions

from .models import UserDetails
from .serializers import ProfileSerializer
from .permissions import IsOwnerOrReadOnly
