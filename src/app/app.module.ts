import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CardComponent } from './components/card/card.component';
import { ListArticlesComponent } from './components/list-articles/list-articles.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { ShowArticleComponent } from './components/show-article/show-article.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogComponent } from './components/blog/blog.component'

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    CardComponent,
    ListArticlesComponent,
    AddArticleComponent,
    EditArticleComponent,
    ShowArticleComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
