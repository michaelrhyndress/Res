from django.conf.urls import patterns, url

from django.views.generic import TemplateView
from lazysignup import views as lazysignup
# URL patterns for lazysignup


urlpatterns = [
    url(r'^$', lazysignup.convert, name='lazysignup_convert'),
    url(r'^done/$',
        TemplateView.as_view(template_name='lazysignup/done.html'),
        name='lazysignup_convert_done'),
]