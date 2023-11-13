import { BlogService } from './../../services/blog.service';
import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';

import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  route = inject(ActivatedRoute)
  blogArticle = inject(BlogService)

  ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
        this.retreiveOneArticle(params['id'])
      })

  }

  articleForm = new FormGroup({
    title: new UntypedFormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    description: new UntypedFormControl('', Validators.required),
    image: new UntypedFormControl('', Validators.required),
    published: new UntypedFormControl(true)
  })

  retreiveOneArticle(id: number) {
    this.blogArticle.getArticle(id).subscribe({
      next: (res) => this.articleForm.patchValue(res),
      error: (err) => console.error(err)
    })
  }

}
