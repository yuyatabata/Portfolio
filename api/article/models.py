from django.db import models
from django.utils import timezone

class Category(models.Model):
    name = models.CharField('category_name', max_length=100)
    color = models.CharField('color',max_length=7, default='#000000')

    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField('title', max_length=40)
    thumbnail = models.ImageField('thumbnail', blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, verbose_name='Category') #Categoryが親
    lead_text = models.TextField('lead_text')
    main_text = models.TextField('main_text')
    is_public = models.BooleanField('公開/非公開', default=True)
    created_at = models.DateTimeField('create date', default=timezone.now)

    class Meta:
        ordering = ('-created_at',) #オブジェクトのリストを取得するオプション、created_atで昇順

    def __str__(self):
        return self.title #adminでの表示名