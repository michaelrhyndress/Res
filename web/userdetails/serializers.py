from .models import Resume, UserDetails
from rest_framework import serializers, viewsets
from resify.serializers import UserSerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from .permissions import IsOwnerOrReadOnly


# Serializers define the API representation.
class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = (
            'url',
            "id",
            "created_by",
            'name',
            'summary',
            'work',
            'education',
            'skills',
            'references',
            'theme',
            'updated_date',
            'created_date'
        )


class ResumeViewSet(viewsets.ModelViewSet):
    permission_classes = [IsOwnerOrReadOnly]

    queryset = Resume.objects\
        .all()\
        .filter(deleted_date=None)\
        .filter(userdetails__is_public=True)
    serializer_class = ResumeSerializer


class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = (
            'pk',
            'user',
            "label",
            "summary",
            'website',
            'active_resume',
            'start_page',
            'availability',
            'social_profiles',
            'location',
            'is_public',
            'resumes',
        )


class UserDetailsViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    queryset = UserDetails.objects\
        .all()\
        .filter(user__is_active=True)
    serializer_class = UserDetailsSerializer




class ProfileSerializer(serializers.ModelSerializer):
    # resumes = serializers.PrimaryKeyRelatedField(many=True, queryset=Resume.objects.all())
    resumes = ResumeSerializer(many=True)
    user = UserSerializer(many=False)

    class Meta:
        model = UserDetails
        fields = (
            'pk',
            'user',
            "label",

            'website',
            'active_resume',
            'start_page',
            'availability',
            'social_profiles',
            'location',
            'is_public',
            'resumes',
        )


# ViewSets define the view behavior.
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = UserDetails.objects \
        .all() \
        .filter(user__is_active=True)
    serializer_class = ProfileSerializer


