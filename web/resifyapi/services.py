import requests
from django.conf import settings
from rest_framework_jwt.settings import api_settings
from datetime import datetime
from calendar import timegm

from django.contrib.auth.models import User

def get_userdetails(pk=None):
	if pk:
		headers = {'Authorization': "{} {}".format(api_settings.JWT_AUTH_HEADER_PREFIX, getToken(User.objects.get(pk=pk)))}
		r = requests.get("{}/profile/{}/".format(settings.API_ROOT, pk), headers=headers)
	else:
		r = requests.get("{}/profile/".format(settings.API_ROOT))
	return r


def getToken(user, toString=False):
	jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
	jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
	payload = jwt_payload_handler(user)
	# Include original issued at time for a brand new token,
	# to allow token refresh
	if api_settings.JWT_ALLOW_REFRESH:
		payload['orig_iat'] = timegm(
			datetime.utcnow().utctimetuple()
		)
	token = jwt_encode_handler(payload)
	return str(token) if toString else token