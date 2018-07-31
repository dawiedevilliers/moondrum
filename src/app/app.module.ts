import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { MyOwnCustomMaterialModule } from './modules/MyMaterialModule';
import { HeaderComponent } from './navigation/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { BodyComponent } from './navigation/body/body.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HomeComponent } from './navigation/body/home/home.component';
import { AboutComponent } from './navigation/body/about/about.component';
import { ContactComponent } from './navigation/body/contact/contact.component';
import { BlogComponent } from './navigation/body/blog/blog.component';
import { GalacticCommunityComponent } from './navigation/body/galactic-community/galactic-community.component';
import { MoonDashboardComponent } from './navigation/body/moon-dashboard/moon-dashboard.component';
import { MoonNavComponent } from './navigation/moon-nav/moon-nav.component';

import {
  MatIconModule, MatGridListModule, MatCardModule, MatMenuModule, MatButtonModule,
} from '@angular/material';
import { PhotoGalleryComponent } from './generic/photo-gallery/photo-gallery.component';
import { TestComponent } from './schematic/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    GalacticCommunityComponent,
    MoonDashboardComponent,
    MoonNavComponent,
    PhotoGalleryComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MyOwnCustomMaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
