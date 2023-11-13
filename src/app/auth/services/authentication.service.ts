import { UserAuthenticated } from './../models/user-authenticated';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  http = inject(HttpClient)

  signIn(username: string, password: string): Observable<UserAuthenticated> {
    return this.http.post<UserAuthenticated>('https://dummyjson.com/auth/login', {username, password})
  }
  
}
