from django.shortcuts import render
from .models import Reviews


# Create your views here.
def index(request):
    if request.method == 'POST':
        name = request.POST.get(str('name'))
        class_and_section = request.POST.get(str('class_and_section'))
        recommendations = request.POST.get(str('recommendations'))

        reviews = Reviews(name=name, class_and_section=class_and_section, recommendations=recommendations)
        reviews.save()

    return render(request, 'index.html')