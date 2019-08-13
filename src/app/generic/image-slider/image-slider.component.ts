import { Component, OnInit, Input } from '@angular/core';
import { GalleryImage } from '../../classes/gallery-image';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  @Input() images: GalleryImage[] = new Array()
  selectedImage: GalleryImage;
  counter: number = 0;

  constructor() { }

  ngOnInit() {

    debugger;

    let i = 1;

    for (0; i < 42; i++) {
      this.images.push(new GalleryImage('test', '/assets/Images/Events/DayOutofTime/' + i + '.JPG'));
    }

    // this.images.push(new GalleryImage('test', '/assets/Images/Events/DayOutofTime/1.JPG'));
    // this.images.push(new GalleryImage('test', '/assets/Images/Events/DayOutofTime/2.JPG'));
    // this.images.push(new GalleryImage('test', '/assets/Images/Events/DayOutofTime/3.JPG'));
    // this.images.push(new GalleryImage('test', '/assets/Images/Events/DayOutofTime/4.JPG'));
    // this.images.push(new GalleryImage('test', '/assets/Images/Events/DayOutofTime/5.JPG'));
    // this.images.push(new GalleryImage('test', '/assets/Images/Events/DayOutofTime/1.jpg'));
    // this.images.push(new GalleryImage('test', '/assets/Images/Events/DayOutofTime/1.jpg'));
    // this.images.push(new GalleryImage('test', '/assets/Images/Events/DayOutofTime/1.jpg'));

    this.selectedImage = this.images[this.counter];


  }

  prev() {
    this.counter--;
    // this.selectedImage = this.images[this.counter];
  }

  next() {
    debugger;
    this.counter++;
    // this.selectedImage = this.images[this.counter];
  }

}
