from django.shortcuts import render
from django.views.generic import View

class Main(View):
    """
    Main view test for React and Webpack
    """
    def get(self, request, *args, **kwargs):
        return render(request, 'resify/main.html')