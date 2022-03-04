import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ThemeModule } from '../theme/theme.module';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../utils/modules/shared/shared.module';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
