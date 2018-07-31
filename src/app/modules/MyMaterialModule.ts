import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';

import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCheckboxModule,
  MatButtonModule
} from '@angular/material';


@NgModule({
  imports: [MatGridListModule, MatCardModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatListModule, MatButtonModule, MatCheckboxModule, MatIconModule],
  exports: [MatGridListModule, MatCardModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatListModule, MatButtonModule, MatCheckboxModule, MatIconModule],
})
export class MyOwnCustomMaterialModule { }
