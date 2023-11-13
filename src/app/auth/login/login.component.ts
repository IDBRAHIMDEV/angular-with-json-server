import { ShareAuthService } from './../services/share-auth.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authenticationService = inject(AuthenticationService)
  shareAuth = inject(ShareAuthService)

  router = inject(Router)

  errorMessage = ""

  loginForm = new FormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl(null, [Validators.required, Validators.minLength(3)])
  })

  login() {

    const username: string = this.loginForm.controls.email.value
    const password: string = this.loginForm.controls.password.value

    this.authenticationService.signIn(username, password).subscribe({
      next: (res) => { 
        
        localStorage.setItem('token', res.token)
        this.shareAuth.setAuthenticated(res.token)


        this.router.navigateByUrl('/dashboard/statistique')
      },
      error: (err) => { 
        this.errorMessage = err.error.message
      },
      complete: () => { console.log('finally')}
    })
  }

}
