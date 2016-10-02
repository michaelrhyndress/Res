from django.contrib.auth.models import User
from userdetails.models import Resume, UserDetails
from .serializers import UserSerializer, ResumeSerializer, UserDetailsSerializer, ProfileSerializer
from .permissions import IsCreatedByOrReadOnly, IsYouOrReadOnly
from rest_framework import viewsets, filters


class UserFilter(filters.FilterSet):
    class Meta:
        model = User
        fields = ['username', 'email']


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsYouOrReadOnly, ]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_class = UserFilter


class ResumeViewSet(viewsets.ModelViewSet):
    permission_classes = [IsCreatedByOrReadOnly,]

    queryset = Resume.objects\
        .all()
    serializer_class = ResumeSerializer


class UserDetailsViewSet(viewsets.ModelViewSet):
    permission_classes = []
    queryset = UserDetails.objects\
        .all()\
        .filter(user__is_active=True)
    serializer_class = UserDetailsSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    permission_classes = [IsYouOrReadOnly, ]
    queryset = UserDetails.objects \
        .all() \
        .filter(user__is_active=True)
    serializer_class = ProfileSerializer
