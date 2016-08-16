from django.contrib.auth.models import User
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import serializers, viewsets


# Serializers define the API representation.
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('pk', 'username', 'email', 'first_name', 'last_name')


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication, BasicAuthentication,)
    permission_classes = (IsAuthenticated,)

    queryset = User.objects.all()
    serializer_class = UserSerializer
