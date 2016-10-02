from django.db import models
from django.conf import settings
from django.contrib.postgres.fields import JSONField
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _

from .model_options import PAGE_CHOICES


class UserDetailsManager(models.Manager):
    def get_queryset(self, user):
        return super(UserDetailsManager(), self).get_query_set().filter(user=user)[0]


class UserDetails(models.Model):
    class Meta:
        app_label = 'userdetails'
        verbose_name = _('user detail')
        verbose_name_plural = _('user details')

    def __str__(self):
        return '{} ({})'.format(
            self.user.get_full_name(),
            self.user.get_username()
        )

    user = models.OneToOneField(settings.AUTH_USER_MODEL)
    label = models.CharField(max_length=255, null=True, blank=True)  # Profession
    summary = models.TextField(default="", null=True, blank=True)
    website = models.URLField(max_length=255, null=True, blank=True)
    active_resume = models.ForeignKey('resume.Resume', on_delete=models.SET_NULL, null=True, blank=True)
    start_page = models.SmallIntegerField(choices=PAGE_CHOICES, default=1)
    availability = JSONField(null=True, blank=True)
    social_profiles = JSONField(null=True, blank=True)
    location = JSONField(null=True, blank=True)

    is_public = models.BooleanField(default=False)
    is_locked = models.BooleanField(default=False)

    objects = models.Manager()
    for_user = UserDetailsManager()


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserDetails.objects.create(user=instance)

models.signals.post_save.connect(create_user_profile, sender=User)