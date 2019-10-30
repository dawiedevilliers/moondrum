import { SwiperImage } from './../../classes/swiper-image';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit, AfterViewInit, OnChanges {

 

  @Input() SwiperImages: SwiperImage[] = new Array();

  @ViewChild('testSlider') testSlider: ElementRef;
  @ViewChild('pagination') pagination: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.setupSwiper();
  }

  ngOnChanges(changes: SimpleChanges): void {
   console.log('onChanges fired');

   if(changes.SwiperImages.currentValue.length > 0 ) {
     this.setupSwiper();
   }
   
  }

   // Initialize Swiper 
   setupSwiper() {
    var swiper = new Swiper(this.testSlider.nativeElement, {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: this.pagination.nativeElement,
      },
    });
  }

}
