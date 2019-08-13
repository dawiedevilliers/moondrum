import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { MyOwnCustomMaterialModule } from './modules/MyMaterialModule';
import { HeaderComponent } from './navigation/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { MoonNavComponent } from './navigation/moon-nav/moon-nav.component';

import {
  MatIconModule, MatGridListModule, MatCardModule, MatMenuModule, MatButtonModule,
} from '@angular/material';
import { PhotoGalleryComponent } from './generic/photo-gallery/photo-gallery.component';
import { TestComponent } from './schematic/test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { BodyComponent } from './navigation/pages/body.component';
import { HomeComponent } from './navigation/pages/home/home.component';
import { AboutComponent } from './navigation/pages/about/about.component';
import { ContactComponent } from './navigation/pages/contact/contact.component';
import { BlogComponent } from './navigation/pages/blog/blog.component';
import { GalacticCommunityComponent } from './navigation/pages/galactic-community/galactic-community.component';
import { MoonDashboardComponent } from './navigation/pages/moon-dashboard/moon-dashboard.component';
import { CosmoVisionComponent } from './navigation/pages/cosmo-vision/cosmo-vision.component';
import { EventsComponent } from './navigation/pages/events/events.component';
import { MoondrumCommunityComponent } from './navigation/pages/moondrum-community/moondrum-community.component';
import { ImageSliderComponent } from './generic/image-slider/image-slider.component';


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
    CosmoVisionComponent,
    EventsComponent,
    MoondrumCommunityComponent,
    ImageSliderComponent,
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
    MatButtonModule, 
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
