import { Component } from '@angular/core';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {

  article: any = {
    title: '',
    description: '',
    image: '',
    price: 0
  }

}
