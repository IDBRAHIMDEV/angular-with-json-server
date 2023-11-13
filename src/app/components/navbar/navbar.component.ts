import { ShareAuthService } from './../../auth/services/share-auth.service';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  router = inject(Router)
  shareAuth = inject(ShareAuthService)

  userAuth: string | null = null
    
  ngOnInit(): void {
      this.shareAuth.getAuthenticated().subscribe(res => {
        this.userAuth = res
      })
  }
 
  signOut() {
    localStorage.removeItem('token')
    this.shareAuth.setAuthenticated(null)
    this.router.navigate(['/auth','login'])
  }

}
