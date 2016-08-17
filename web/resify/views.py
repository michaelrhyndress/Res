from os import path
import json
from django.shortcuts import render
from django.views.generic import View

# Decorators
from django.utils.decorators import method_decorator
from lazysignup.decorators import allow_lazy_user

from resifyapi import services as api_services

app_name = "resify"

class Dashboard(View):
    """
    Main view test for React and Webpack
    """

    @method_decorator(allow_lazy_user)
    def get(self, request, *args, **kwargs):
        user_pk = request.user.userdetails.pk
        template = path.join(app_name, 'dashboard.html')
        data = api_services.get_userdetails(user_pk).json()
        c = {
            "data": json.dumps(data),
            "token": api_services.getToken(request.user, True),
        }
        return render(request, template, c)