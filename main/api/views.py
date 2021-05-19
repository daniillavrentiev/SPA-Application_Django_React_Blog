from rest_framework import viewsets

from .serializers import (
    BlogCategorySerializer,
    BlogPostSerializer,
    BlogPostListRetrieveSerializer,
    BlogCategoryDetailSerializers,
    PostsImagesForBlogSerializers,
)

from ..models import BlogCategory,\
                    BlogPost,\
                    ImageForPosts


class BlogCategoryViewSet(viewsets.ModelViewSet):

    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer

    action_to_serializer = {
        "retrieve": BlogCategoryDetailSerializers
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class BlogPostViewSet(viewsets.ModelViewSet):

    queryset = BlogPost.objects.all()
    serializer_class = PostsImagesForBlogSerializers


    # https://www.youtube.com/watch?v=sHSVlAWCYm8&list=PLodoqt_ESP4ubldFsx_1kBrFr3RLNN7I7&index=4
    # 16:15
    action_to_serializer = {
        "retrieve": PostsImagesForBlogSerializers
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class PostsForIndexPageViewSet(viewsets.ModelViewSet):

    queryset = BlogPost.objects.filter(in_archive=True)
    serializer_class = BlogPostSerializer


class RelatedPostsViewSet(viewsets.ModelViewSet):

    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

    action_to_serializer = {
        "retrieve": BlogPostSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )