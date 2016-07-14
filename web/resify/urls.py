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
from django.conf.urls import url, include
from django.contrib import admin
from resify.views import Dashboard
from django.views.i18n import javascript_catalog

DASHBOARD_LANG = {
    'packages': ('resify.dashboard.language.package',),
}

urlpatterns = [
    url(r'^xyz/jsi18n/dashboard/$', javascript_catalog, DASHBOARD_LANG, name='dashboard-catalog'),
    url(r'^admin/', admin.site.urls),
    url(r'^convert/', include('lazysignup.urls')),
    url(r'^$', Dashboard.as_view(), name="dashboard"),
]
