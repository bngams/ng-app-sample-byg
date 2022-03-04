import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeGlobalComponent } from './components/some-global/some-global.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatBadgeModule
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
