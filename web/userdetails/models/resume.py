from django.db import models
from uuid import uuid4
from django.contrib.postgres.fields import JSONField
from django.utils.translation import ugettext_lazy as _

from userdetails.models.resume_theme import ResumeTheme
from userdetails.models.user_details import UserDetails


class ResumeManager(models.Manager):
    def get_queryset(self, user):
        return super(ResumeManager(), self).get_query_set().filter(created_by=user)

    def current(self, user):
        return super(ResumeManager(), self).get_query_set().filter(pk=user__active_resume__pk)


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
    theme = models.ForeignKey(ResumeTheme, on_delete=models.SET_NULL, null=True, blank=True)
    # Data Fields
    work = JSONField(null=True, blank=True)
    education = JSONField(null=True, blank=True)
    awards = JSONField(null=True, blank=True)
    skills = JSONField(null=True, blank=True)
    references = JSONField(null=True, blank=True)

    # Created By
    created_by = models.ForeignKey(UserDetails, on_delete=models.DO_NOTHING, related_name='resumes')

    # Date info
    created_date = models.DateTimeField(_('date created'), auto_now_add=True)
    updated_date = models.DateTimeField(_('last updated'), auto_now=True)
    deleted_date = models.DateTimeField(_('date deleted'), null=True, blank=True)

    objects = models.Manager()
    for_user = ResumeManager()
