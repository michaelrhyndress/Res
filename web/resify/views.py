from django.shortcuts import render
from django.views.generic import View

# Decorators
from django.utils.decorators import method_decorator
from lazysignup.decorators import allow_lazy_user


# TEST
from django.http import HttpResponse
class Main(View):
    """
    Main view test for React and Webpack
    """
    @method_decorator(allow_lazy_user)
    def get(self, request, *args, **kwargs):
        return HttpResponse(request.user.username)

# class Main(View):
#     """
#     Main view test for React and Webpack
#     """
#     @method_decorator(allow_lazy_user)
#     def get(self, request, *args, **kwargs):
#         return render(request, 'resify/main.html')