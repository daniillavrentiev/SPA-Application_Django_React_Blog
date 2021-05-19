from rest_framework import serializers

from ..models import BlogPost, BlogCategory, ImageForPosts


class BlogCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogCategory
        fields = '__all__'


# Используеться для отрисоки постов в категориях в API
class BlogCategoryDetailSerializers(serializers.ModelSerializer):

    posts = serializers.SerializerMethodField()

    class Meta:
        model = BlogCategory
        fields = '__all__'

    # https://www.youtube.com/watch?v=i2SzLtHwWGY&list=PLodoqt_ESP4ubldFsx_1kBrFr3RLNN7I7&index=6
    # 2:30
    @staticmethod
    def get_posts(obj):
        return BlogPostSerializer(BlogPost.objects.filter(blog_category=obj), many=True).data


class BlogPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogPost
        fields = '__all__'


class BlogPostListRetrieveSerializer(serializers.ModelSerializer):

    blog_category = BlogCategorySerializer()

    class Meta:
        model = BlogPost
        fields = '__all__'


class ImagesForBlogSerializers(serializers.ModelSerializer):

    class Meta:
        model = ImageForPosts
        fields = '__all__'


class PostsImagesForBlogSerializers(serializers.ModelSerializer):

    images = serializers.SerializerMethodField()
    related_posts = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = "__all__"

    @staticmethod
    def get_images(obj):
        return ImagesForBlogSerializers(ImageForPosts.objects.filter(blog_post=obj), many=True).data

    @staticmethod
    def get_related_posts(obj):
        return BlogPostSerializer(BlogPost.objects.filter(blogpost=obj), many=True).data
