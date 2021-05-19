from django.urls import path

from rest_framework import routers
from .views import BlogCategoryViewSet, BlogPostViewSet, PostsForIndexPageViewSet, RelatedPostsViewSet


router = routers.SimpleRouter()
router.register('category', BlogCategoryViewSet, basename='category')
router.register('blogpost', BlogPostViewSet, basename='blogpost')
router.register('posts-index', PostsForIndexPageViewSet, basename='posts_index')
router.register('related_posts', RelatedPostsViewSet, basename='related_posts')


urlpatterns = []
urlpatterns += router.urls