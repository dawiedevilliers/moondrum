import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

export class Image {

  constructor(public name: string, public url: string) {

  }

}


@Component({
  selector: 'photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit, AfterViewInit {

  a: any;
  cfImg: any;
  scaleI: number;
  // coverflow: any;

  images: Image[] = new Array();

  @ViewChild('coverflow') coverflow: ElementRef;

  coverflowPos = 3;

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.


    this.images.push(new Image('name1', 'http://placehold.it/400x400.jpg'));
    this.images.push(new Image('name1', 'http://placehold.it/400x400.jpg'));
    this.images.push(new Image('name1', 'http://placehold.it/400x400.jpg'));
    this.images.push(new Image('name1', 'http://placehold.it/400x400.jpg'));
    this.images.push(new Image('name1', 'http://placehold.it/400x400.jpg'));
    

    this.start();
  }

  start() {
    debugger;
    this.a = document.getElementsByTagName('a');
    this.cfImg = document.getElementsByClassName('coverflow__image');
    this.scaleI = 0;
    let scaleI = this.scaleI;


    const a = this.a;

    for (scaleI; scaleI < a.length; scaleI++) {
      if (scaleI === 3) {
        continue;
      } else {
        a[scaleI].style.cursor = 'default';
        a[scaleI].addEventListener('click', this.prevDef);
      }
    }
     this.setupCoverflow();

  }

  /*------------------------------
        Album Cover Slider
--------------------------------*/
  // start added by Chase
  prevDef(e) {
    e.preventDefault();
  }

  forScale(coverflowPos) {

    const a = this.a;
    let scaleI = this.scaleI;
    const cfImg = this.cfImg;

    for (scaleI = 0; scaleI < a.length; scaleI++) {
      a[scaleI].style.cursor = 'default';
      a[scaleI].addEventListener('click', this.prevDef);
    }
    for (scaleI = 0; scaleI < cfImg.length; scaleI++) {
      if (cfImg[scaleI].getAttribute('data-coverflow-index') === coverflowPos) {
        cfImg[scaleI].parentElement.style.cursor = 'pointer';
        cfImg[scaleI].parentElement.removeEventListener('click', this.prevDef);
      }
    }
  }
  // end added by Chase

  setupCoverflow(coverflowContainer: any = 'undefined') {
    let coverflowContainers;

    if (typeof this.coverflow.nativeElement !== 'undefined') {
      if (Array.isArray(this.coverflow.nativeElement)) {
        coverflowContainers = coverflowContainer;
      } else {
        coverflowContainers = [coverflowContainer];
      }
    } else {
      coverflowContainers = Array.prototype.slice.apply(document.getElementsByClassName('coverflow'));
    }

    coverflowContainers.forEach(function (containerElement) {
      // const coverflow: any = {};
      this.coverflow = {};
      let prevArrows, nextArrows;

      // capture coverflow elements
      this.coverflow.container = containerElement;
      this.coverflow.images = Array.prototype.slice.apply(containerElement.getElementsByClassName('coverflow__image'));
      this.coverflow.position = Math.floor(this.coverflow.images.length / 2) + 1;

      // set indicies on images
      this.coverflow.images.forEach(function (coverflowImage, i) {
        coverflowImage.dataset.coverflowIndex = i + 1;
      });

      // set initial position
      this.coverflow.container.dataset.coverflowPosition = this.coverflow.position;

      // get prev/next arrows
      prevArrows = Array.prototype.slice.apply(this.coverflow.container.getElementsByClassName('prev-arrow'));
      nextArrows = Array.prototype.slice.apply(this.coverflow.container.getElementsByClassName('next-arrow'));


      prevArrows.forEach(function (prevArrow) {
        prevArrow.addEventListener('click', this.setPrevImage);
      });
      nextArrows.forEach(function (nextArrow) {
        nextArrow.addEventListener('click', this.setNextImage);
      });
      this.coverflow.images.forEach(function (image) {
        image.addEventListener('click', this.jumpToImage);
      });
      window.addEventListener('keyup', this.onKeyPress);
    });
  }

  setNextImage() {
    this.coverflow.nativeElement.position = Math.min(this.coverflow.nativeElement.images.length, this.coverflow.nativeElement.position + 1);
    this.coverflow.nativeElement.container.dataset.coverflowPosition = this.coverflow.nativeElement.position;
    // call the function Chase added
    this.forScale(this.coverflow.nativeElement.position);
  }

  jumpToImage(evt) {
    this.coverflow.nativeElement.position
      = Math.min(this.coverflow.nativeElement.images.length, Math.max(1, evt.target.dataset.coverflowIndex));
    this.coverflow.nativeElement.container.dataset.coverflowPosition = this.coverflow.nativeElement.position;
    // start added by Chase
    setTimeout(function () {
      this.forScale(this.coverflow.position);
    }, 1);
    // end added by Chase
  }

  // add event handlers
  setPrevImage() {
    this.coverflow.nativeElement.position = Math.max(1, this.coverflow.nativeElement.position - 1);
    this.coverflow.nativeElement.container.dataset.coverflowPosition = this.coverflow.nativeElement.position;
    // call the functin forScale added
    this.forScale(this.coverflow.nativeElement.position);
  }


  calculateClass(i: number){
      return  '.coverflow[data-coverflow-position="' + i  + '"] .coverflow__image[data-coverflow-index="3"]';
  }

  onKeyPress(evt) {
    switch (evt.which) {
      case 37: // left arrow
        this.setPrevImage();
        break;
      case 39: // right arrow
        this.setNextImage();
        break;
    }
  }



}
