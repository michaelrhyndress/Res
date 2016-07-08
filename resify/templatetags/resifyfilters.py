@register.filter
def toJSON(value):
    return mark_safe(json.dumps(value))