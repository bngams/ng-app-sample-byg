import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthModule } from '../auth.module';

// Three shakeable
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  random!: number;

  // Subject, ReplaySubject, AsyncSubject
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.random = Math.random() * 100;
    console.log('init AuthService random ', this.random);
  }

  login(): void {
    // do http
    setTimeout(() => {
      const tokenFromBack = 'ertyui55e';
      this.isLoggedIn$.next(true);
      this.storeToken(tokenFromBack);
    }, 2000);
  }

  storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  loadToken(): string {
    return localStorage.getItem('token') || "";
  }
}
