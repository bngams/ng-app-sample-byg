import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeGlobalComponent } from './components/some-global/some-global.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule
]

@NgModule({
  declarations: [
    SomeGlobalComponent
  ],
  exports: [
    ...MATERIAL_MODULES,
    SomeGlobalComponent
  ]
})
export class ThemeModule { }
