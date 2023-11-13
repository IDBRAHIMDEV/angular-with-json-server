import { BlogService } from 'src/app/services/blog.service';
import { Component, OnInit, inject } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  price = 2.7856434
  date = new Date()

  blogService = inject(BlogService)

  articles: Article[] = []

  ngOnInit(): void {
      this.retreiveArticle()
  }

  retreiveArticle() {
    this.blogService.getArticles().subscribe({
      next: (res) => {
        this.articles = res
      },
      error: (err) => {}
    })
  }

  togglePublished(article: Article) {
    
    if(article.id) {
      this.blogService.patchArticle(article.id, {published: !article.published}).subscribe({
        next: (res) => {
          article.published = !article.published
        },
        error: (err) => {

        }
      })
    }
  }

}
