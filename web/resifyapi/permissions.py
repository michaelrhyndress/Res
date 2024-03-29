from rest_framework import permissions


class IsCreatedByOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of a resume to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the resume.

        return (not request.user.is_anonymous()) and obj.created_by == request.user.userdetails


class IsYouOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of a resume to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the resume.

        return (not request.user.is_anonymous()) and obj == request.user
