import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './components/events/events.component';
import { EventsGalleryComponent } from './components/events-gallery/events-gallery.component';
import { EventsSelectionComponent } from './components/events-selection/events-selection.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventsItemComponent } from './components/events-item/events-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    EventsComponent, 
    EventsGalleryComponent, 
    EventsSelectionComponent, EventsItemComponent],
  exports: [
    EventsComponent, 
    EventsGalleryComponent, 
    EventsSelectionComponent]
})
export class EventsModule { }
