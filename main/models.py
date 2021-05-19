from django.db import models
import datetime
from django.utils import timezone


class BlogCategory(models.Model):

    name = models.CharField(max_length=255, verbose_name='Имя Категрии')
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name


class BlogPostQuerySet(models.QuerySet):

    def find_by_title_in_qs(self, post_title):
        return self.filter(title__icontains=post_title)


class BlogPostManager(models.Manager):

    def get_queryset(self):
        return BlogPostQuerySet(self.model, using=self._db)

    def find_by_title_in_qs(self, post_title):
        return self.get_queryset().find_by_title_in_qs(post_title)


class BlogPost(models.Model):

    blog_category = models.ForeignKey(BlogCategory, verbose_name='Категория', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, verbose_name='Название поста')
    slug = models.SlugField(unique=True)
    content = models.TextField()
    description = models.CharField(max_length=50, verbose_name='Описание Поста')
    image = models.ImageField()
    in_archive = models.BooleanField(default=False)
    related_posts = models.ManyToManyField('BlogPost', null=True, blank=True)
    objects = BlogPostManager()
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'{self.title} из категории {self.blog_category.name}, {self.id}'


class ImageForPosts(models.Model):

    blog_post = models.ForeignKey(BlogPost, on_delete=models.CASCADE, verbose_name='Пост для которого будут бодалены фото')
    image = models.ImageField()

    def __str__(self):
        return self.blog_post.title

