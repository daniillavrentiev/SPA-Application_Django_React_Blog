from django.contrib import admin
from .models import *


class InlineImagesInBlogPost(admin.TabularInline):

    model = ImageForPosts
    extra = 5


class AdminPageInlinesImages(admin.ModelAdmin):

    inlines = [InlineImagesInBlogPost]


admin.site.register(BlogPost, AdminPageInlinesImages)
admin.site.register(BlogCategory)

# Register your models here.
