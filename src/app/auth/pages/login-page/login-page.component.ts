import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../models/credentials';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  credentials = {} as Credentials;

  constructor(private authService: AuthService) {
    console.log('LoginPage - random from AuthService', authService.random)
  }

  ngOnInit(): void {
  }

  submit(): void {
    if(this.credentials.email) {
      //
    }
    console.log(this.credentials);
    // send value to observable (behaviorSubject)
    this.authService.isLoggedIn$.next(true);
  }
}
