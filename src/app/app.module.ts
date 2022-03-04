import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './utils/pipes/exponential-strength.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from './theme/theme.module';
import { HeaderComponent } from './layout/components/header/header.component';
import { HomePageComponent } from './global/home-page/home-page.component';
import { GetStartedPageComponent } from './global/get-started-page/get-started-page.component';
import { NotFoundPageComponent } from './global/not-found-page/not-found-page.component';
import { SharedModule } from './utils/modules/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './utils/interceptors/http-error.interceptor';

@NgModule({
  // html syntax (components <custom-markup>; pipe | ...; directives)
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    HeaderComponent,
    HomePageComponent,
    GetStartedPageComponent,
    NotFoundPageComponent
  ],
  // import features from other modules
  imports: [
    BrowserModule, // => CommonModule => declares and exports UppercasePipe
    BrowserAnimationsModule,
    AppRoutingModule, // => imports RouterModule
    HttpClientModule,
    SharedModule
  ],
  // export features for other modules
  exports: [

  ],
  // DI
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  // Load with app launch ()
  bootstrap: [AppComponent]
})
export class AppModule { }
