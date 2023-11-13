import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareAuthService {

  constructor() { }

  authenticated = new BehaviorSubject<string | null>(localStorage.getItem('token'))

  getAuthenticated() {
    return this.authenticated;
  }

  setAuthenticated(token: string | null) {
    this.authenticated.next(token)
  }

}
