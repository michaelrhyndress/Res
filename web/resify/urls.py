"""resify URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from datetime import datetime
from django.conf.urls import url, include
from django.contrib import admin
from django.utils import timezone
from django.views.decorators.cache import cache_page
from django.views.i18n import JavaScriptCatalog
from .views import Dashboard, RefreshToken


def get_version():
    return datetime.today().isoformat()

last_modified_date = timezone.now()
key_prefix = 'js18n-%s' % get_version()

urlpatterns = [
    url(r'^xyz/jsi18n/dashboard/$',
        # last_modified(lambda req, **kw: last_modified_date)(JavaScriptCatalog.as_view()),
        cache_page(86400, key_prefix=key_prefix)(JavaScriptCatalog.as_view(
            packages=['resify', 'lazysignup'])
        ),
        name='dashboard-catalog'
    ),
    url(r'^@api/', include('resifyapi.urls')),
    url(r'^@services/refresh_token/', RefreshToken.as_view()),
    url(r'^admin/', admin.site.urls),
    url(r'^convert/', include('lazysignup.urls')),
    url(r'^$', Dashboard.as_view(), name="dashboard"),
]
