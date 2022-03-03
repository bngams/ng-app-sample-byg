import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './utils/pipes/exponential-strength.pipe';

@NgModule({
  // html syntax (components <custom-markup>; pipe | ...; directives)
  declarations: [
    AppComponent,
    ExponentialStrengthPipe
  ],
  // import features from other modules
  imports: [
    BrowserModule, // => CommonModule => declares and exports UppercasePipe
    AppRoutingModule
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
