from rest_framework import viewsets
from django.shortcuts import render


def index(request):
    return render(request, 'index.html', {})


def category_detail(request, id):
    return render(request, 'index.html')


def post_detail(request, id):
    return render(request, 'index.html')


def posts_index(request):
    return render(request, 'index.html')