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
}
