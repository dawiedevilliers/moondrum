import { MoonDrumEvent } from './../../../../classes/MoonDrumEvent';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GalleryImage } from '../../../../classes/gallery-image';

@Component({
  selector: 'app-events-selection',
  templateUrl: './events-selection.component.html',
  styleUrls: ['./events-selection.component.scss']
})
export class EventsSelectionComponent implements OnInit, AfterViewInit {



  events: MoonDrumEvent[] = new Array();

  constructor() { }

  ngOnInit() {
    this.setupEvents();
  }

  ngAfterViewInit(): void {
   
  }

  setupEvents() {

    this.setupDayOutOfTime();
    this.setupDreamCode();
    this.setupEarthDance();

  }

  setupDayOutOfTime() {
    let eventImages = this.retrieveImages('/assets/Images/Events/DayOutofTime/', 42);
    this.events.push(new MoonDrumEvent('Day Out Of Time', '/assets/Images/Events/DayOutofTime/11.JPG', eventImages));
  }

  setupDreamCode() {
    let eventImages = this.retrieveImages('/assets/Images/Events/Dreamcode/', 2);
    this.events.push(new MoonDrumEvent('Dream Code', '/assets/Images/Events/Dreamcode/1.JPG', eventImages));
  }

  setupEarthDance() {
    let eventImages = this.retrieveImages('/assets/Images/Events/Earthdance2017/', 26, '.jpg');
    this.events.push(new MoonDrumEvent('Earth dance 2017', '/assets/Images/Events/Earthdance2017/1.jpg', eventImages));
  }

  retrieveImages(baseUrl: string, count: number, extension: string = '.JPG'): GalleryImage[] {

    var returnImage: GalleryImage[] = new Array();

    let i = 1;

    for (0; i < count; i++) {
      returnImage.push(new GalleryImage('test', baseUrl + i + extension));
    }

    return returnImage;

  }

}
