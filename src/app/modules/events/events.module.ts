import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './components/events/events.component';
import { EventsGalleryComponent } from './components/events-gallery/events-gallery.component';
import { EventsSelectionComponent } from './components/events-selection/events-selection.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  imports: [
    CommonModule,
    // EventsRoutingModule
  ],
  declarations: [EventsComponent, EventsGalleryComponent, EventsSelectionComponent],
  exports: [EventsComponent, EventsGalleryComponent, EventsSelectionComponent]
})
export class EventsModule { }
