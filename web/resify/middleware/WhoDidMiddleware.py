# from django.db.models import signals
# from django.utils.functional import curry
#
#
# class WhoDidMiddleware(object):
#     def __init__(self, get_response):
#         self.get_response = get_response
#
#     def __call__(self, request):
#         def process_request(self, request):
#             if not request.method in ('GET', 'HEAD', 'OPTIONS', 'TRACE'):
#                 if hasattr(request, 'user') and request.user.is_authenticated():
#                     user = request.user
#                 else:
#                     user = None
#
#                 mark_whodid = curry(self.mark_whodid, user)
#                 signals.pre_save.connect(mark_whodid,  dispatch_uid = (self.__class__, request,), weak = False)
#
#         def process_response(self, request, response):
#             signals.pre_save.disconnect(dispatch_uid =  (self.__class__, request,))
#             return response
#
#         def mark_whodid(self, user, sender, instance, **kwargs):
#             if not getattr(instance, 'created_by', None):
#                 instance.created_by = user
#             if hasattr(instance,'modified_by'):
#                 instance.modified_by = user
#
#
#
# # class WhoDidMiddleware(object):
# #     def process_request(self, request):
# #         if not request.method in ('GET', 'HEAD', 'OPTIONS', 'TRACE'):
# #             if hasattr(request, 'user') and request.user.is_authenticated():
# #                 user = request.user
# #             else:
# #                 user = None
# #
# #             mark_whodid = curry(self.mark_whodid, user)
# #             signals.pre_save.connect(mark_whodid,  dispatch_uid = (self.__class__, request,), weak = False)
# #
# #     def process_response(self, request, response):
# #         signals.pre_save.disconnect(dispatch_uid =  (self.__class__, request,))
# #         return response
# #
# #     def mark_whodid(self, user, sender, instance, **kwargs):
# #         if not getattr(instance, 'created_by', None):
# #             instance.created_by = user
# #         if hasattr(instance,'modified_by'):
# #             instance.modified_by = user