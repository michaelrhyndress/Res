from django.contrib.auth.models import User
from userdetails.models import Resume, UserDetails
from rest_framework import serializers


# Serializers define the API representation.
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('pk', 'username', 'email', 'first_name', 'last_name')
        

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



