import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Article } from '../models/article';
import { Observable } from 'rxjs';
import { PatchArticle } from '../models/patch-article';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // constructor(private http: HttpClient) { }
  http = inject(HttpClient)

  apiUrl = "http://localhost:3000/articles"

  //for retreive all article from the backend
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl)
  }

  //Persist one article into the database
  postArticle(data: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, data)
  }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`)
  }

  putArticle(id: number, data: Article): Observable<Article> {
    return this.http.put<Article>(`${this.apiUrl}/${id}`, data)
  }

  patchArticle(id: number, data: PatchArticle): Observable<PatchArticle> {
    return this.http.patch<PatchArticle>(`${this.apiUrl}/${id}`, data)
  }

  deleteArticle(id: number): Observable<null> {
    return this.http.delete<null>(`${this.apiUrl}/${id}`)
  }

}
