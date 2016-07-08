#!/bin/sh
python /app/manage.py collectstatic --noinput
/usr/local/bin/gunicorn resify.wsgi:application -w 2 -b :8000
