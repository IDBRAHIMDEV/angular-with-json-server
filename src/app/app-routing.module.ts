import { ShowArticleComponent } from './components/show-article/show-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListArticlesComponent } from './components/list-articles/list-articles.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: ListArticlesComponent},
  {path: 'blog/add', component: AddArticleComponent},
  {path: 'blog/edit/:id', component: EditArticleComponent},
  {path: 'blog/:id', component: ShowArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
