from django.contrib.auth.models import User
from userdetails.models import Resume, UserDetails
from rest_framework import viewsets
from .serializers import UserSerializer, ResumeSerializer, UserDetailsSerializer, ProfileSerializer
from .permissions import IsCreatedByOrReadOnly, IsYouOrReadOnly


# Create your views here.
# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsYouOrReadOnly, ]
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ResumeViewSet(viewsets.ModelViewSet):
    permission_classes = [IsCreatedByOrReadOnly,]

    queryset = Resume.objects\
        .all()\
        .filter(deleted_date=None)\
        .filter(userdetails__is_public=True)
    serializer_class = ResumeSerializer



class UserDetailsViewSet(viewsets.ModelViewSet):
    permission_classes = []
    queryset = UserDetails.objects\
        .all()\
        .filter(user__is_active=True)
    serializer_class = UserDetailsSerializer



# ViewSets define the view behavior.
class ProfileViewSet(viewsets.ModelViewSet):
    permission_classes = [IsYouOrReadOnly, ]
    queryset = UserDetails.objects \
        .all() \
        .filter(user__is_active=True)
    serializer_class = ProfileSerializer