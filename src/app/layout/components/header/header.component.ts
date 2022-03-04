import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <mat-toolbar color="primary">
        <span>My Application</span>
        <ul class="menu">
          <li class="menu-item" routerLink="/home" routerLinkActive="active">Home</li>
          <li class="menu-item" routerLink="/get-started" routerLinkActive="active">Get Started</li>
          <li class="menu-item" routerLink="/blog" routerLinkActive="active">Blog</li>
          <li class="menu-item" routerLink="/product" routerLinkActive="active">Product</li>
          <li class="menu-item" routerLink="/cart" routerLinkActive="active">Cart</li>
          <li *ngIf="!hideLogin" class="menu-item" routerLink="/login" routerLinkActive="active">Login</li>
        </ul>
      </mat-toolbar>
    </header>
  `,
  styles: [`
    mat-toolbar {
      display: flex;
      justify-content: space-between;
    }

    .menu {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;

      .menu-item {
        margin: 10px;
        &:hover {
          text-decoration: underline;
        }
        &.active {
          font-weight: bolder;
        }
      }

    }


  `]
})
export class HeaderComponent implements OnInit {
  hideLogin = false;

  constructor(private authService: AuthService) {
    console.log('Header - random from AuthService', authService.random)
  }

  ngOnInit(): void {
    // subscribe to observable
    this.authService.isLoggedIn$.subscribe( value => {
      this.hideLogin = value;
    });
  }

}
