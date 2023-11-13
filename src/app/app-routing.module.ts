import { AuthModule } from './auth/auth.module';
import { BlogComponent } from './components/blog/blog.component';
import { GithubService } from './services/github.service';
import { ShowArticleComponent } from './components/show-article/show-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListArticlesComponent } from './components/list-articles/list-articles.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'users', component: ListUsersComponent},
  {path: 'blog', component: BlogComponent, children: [
    {path: '', component: ListArticlesComponent},
    {path: 'add', component: AddArticleComponent},
    {path: 'edit/:id', component: EditArticleComponent},
    {path: ':id', component: ShowArticleComponent},
  ]},
  {path: 'dashboard', loadChildren:() => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
