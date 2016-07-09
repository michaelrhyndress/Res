from django.shortcuts import render
from django.views.generic import View
from os import path
# Decorators
from django.utils.decorators import method_decorator
from lazysignup.decorators import allow_lazy_user

app_name = "resify";

class Dashboard(View):
    """
    Main view test for React and Webpack
    """
    @method_decorator(allow_lazy_user)
    def get(self, request, *args, **kwargs):
        template = "dashboard.html"
        return render(request, path.join(app_name, template))