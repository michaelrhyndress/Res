from django.conf.urls import url, include
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token

from .views import UserViewSet, ProfileViewSet, ResumeViewSet, UserDetailsViewSet


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'userdetails', UserDetailsViewSet)
router.register(r'profile', ProfileViewSet)
router.register(r'resumes', ResumeViewSet)

urlpatterns = [
    # url(r'^v1/auth/', include('rest_framework.urls', namespace='rest_framework'), name="resifyapi_auth"),
    url(r'^v1/auth', obtain_jwt_token),
	url(r'^v1/', include(router.urls)),
]