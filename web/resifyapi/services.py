import requests
from django.conf import settings


def get_userdetails(pk=None):
	if pk:
		r = requests.get("{}/profile/{}/".format(settings.API_ROOT, pk))
	else:
		r = requests.get("{}/profile/".format(settings.API_ROOT))
	return r
