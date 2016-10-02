from django.db import models
from uuid import uuid4
from django.utils.translation import ugettext_lazy as _


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
    created_by = models.ForeignKey('user_details.UserDetails', on_delete=models.DO_NOTHING)
    created_date = models.DateTimeField(_('date created'), auto_now_add=True)
    updated_date = models.DateTimeField(_('last updated'), auto_now=True)
    is_active = models.BooleanField(default=False)