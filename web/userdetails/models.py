from django.db import models
from uuid import uuid4
from django.conf import settings
from django.contrib.postgres.fields import JSONField
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _
from userdetails.model_options import PAGE_CHOICES

class UserDetailsManager(models.Manager):
    def get_queryset(self, user):
        return super(UserDetailsManager(), self).get_query_set().filter(user=user)[0]


class ResumeManager(models.Manager):
    def get_queryset(self, user):
        return super(ResumeManager(), self).get_query_set().filter(created_by=user)

    def current(self, user):
        return super(ResumeManager(), self).get_query_set().filter(pk=user__active_resume__pk)


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
    active_resume = models.ForeignKey('Resume', on_delete=models.SET_NULL, null=True, blank=True)
    start_page = models.SmallIntegerField(choices=PAGE_CHOICES, default=1)
    availability = JSONField(null=True, blank=True)
    social_profiles = JSONField(null=True, blank=True)
    location = JSONField(null=True, blank=True)

    is_public = models.BooleanField(default=False)
    is_locked = models.BooleanField(default=False)

    objects = models.Manager()
    for_user = UserDetailsManager()


class Resume(models.Model):
    class Meta:
        app_label = 'userdetails'
        verbose_name = _('resume')
        verbose_name_plural = _('resumes')

    def __str__(self):
        return '{} ({})'.format(
            self.name,
            self.id
        )

    # General info
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(_("Resume name"), max_length=128, default="{}".format(_("New Resume")), blank=True)
    summary = models.CharField(_("Resume summary"), max_length=255, blank=True)
    theme = models.ForeignKey('ResumeTheme', on_delete=models.SET_NULL, null=True, blank=True)
    # Data Fields
    work = JSONField(null=True, blank=True)
    education = JSONField(null=True, blank=True)
    awards = JSONField(null=True, blank=True)
    skills = JSONField(null=True, blank=True)
    references = JSONField(null=True, blank=True)

    # Created By
    created_by = models.ForeignKey('UserDetails', on_delete=models.DO_NOTHING, related_name='resumes')

    # Date info
    created_date = models.DateTimeField(_('date created'), auto_now_add=True)
    updated_date = models.DateTimeField(_('last updated'), auto_now=True)
    deleted_date = models.DateTimeField(_('date deleted'), null=True, blank=True)

    objects = models.Manager()
    for_user = ResumeManager()


class ResumeTheme(models.Model):
    class Meta:
        app_label = 'userdetails'
        verbose_name = _('theme')
        verbose_name_plural = _('themes')

    def __str__(self):
        return '{} ({})'.format(
            self.name,
            self.id
        )

    # General info
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=128)
    summary = models.TextField()

    # Meta info
    created_by = models.ForeignKey('UserDetails', on_delete=models.DO_NOTHING)
    created_date = models.DateTimeField(_('date created'), auto_now_add=True)
    updated_date = models.DateTimeField(_('last updated'), auto_now=True)
    is_active = models.BooleanField(default=False)


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserDetails.objects.create(user=instance)

models.signals.post_save.connect(create_user_profile, sender=User)
