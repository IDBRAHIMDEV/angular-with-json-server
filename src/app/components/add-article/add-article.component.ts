import { BlogService } from 'src/app/services/blog.service';
import { Article } from './../../models/article';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {

  constructor(private blogService: BlogService, private router: Router) {}

  // blogService = inject(BlogService)
  // router = inject(Router)

  status: string = 'normal'

  message = ""

  article: Article = {
    title: '',
    description: '',
    image: '',
    published: false
  }

  persistArticle(form: any) {

    console.log(form)

    if(form.invalid) {
      alert('rah hna 3ay9in bik')
      return 
    }

    this.blogService.postArticle(this.article).subscribe({
      next: (response) => {
        this.status = 'success'
        this.message = "Article is added Successfully !"
        this.initArticle()
        this.router.navigate(['/blog'])
      },
      error: (err) => {
        this.status = 'error'
        this.message = 'Error 500 server is Down!'
      }
    })
  }

  initArticle() {
    this.article = {
        title: '',
        description: '',
        image: '',
        published: false
      }
    
  }

  info(data: any) {
    console.log(data)
  }

}
