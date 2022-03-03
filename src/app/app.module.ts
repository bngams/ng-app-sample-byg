import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './utils/pipes/exponential-strength.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from './theme/theme.module';
import { HeaderComponent } from './layout/components/header/header.component';

@NgModule({
  // html syntax (components <custom-markup>; pipe | ...; directives)
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    HeaderComponent
  ],
  // import features from other modules
  imports: [
    BrowserModule, // => CommonModule => declares and exports UppercasePipe
    BrowserAnimationsModule,
    AppRoutingModule,
    ThemeModule
  ],
  // export features for other modules
  exports: [

  ],
  // DI
  providers: [],
  // Load with app launch ()
  bootstrap: [AppComponent]
})
export class AppModule { }
