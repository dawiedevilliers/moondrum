import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, group, query, animateChild } from '@angular/animations';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
  animations: [
    trigger('content', [
      transition(':enter', [
        style({
          transform: 'translateX(-30%)',
          opacity: '0',
        }),

        group([
          query('@*', animateChild(), { optional: true }),
          animate('500ms 100ms ease-out', style({
            transform: 'translateX(0)',
            opacity: '1',
          }))
        ]),
      ])
    ]),
    // trigger('heading',[
    //   transition(':enter', [
    //     style({
    //       // opacity: 0,
    //       color: 'red'
    //     }),
    //     animate('300ms', style({
    //       // opacity: 1,
    //       color: 'blue'
    //     }))
    //   ])
    // ]),
    // trigger('description',[
    //   transition(':enter', [
    //     style({
    //       opacity: 0
    //     }),
    //     animate('300ms 100ms', style({
    //       opacity: 1
    //     }))
    //   ])
    // ])
  ]
})
export class ImageCarouselComponent implements OnInit, AfterViewInit {

  @Input() shouldStep = true;
  @Input() stepperInterval = 9000;

  carouselItems: CarouselItem[] = new Array();
  selectedItem: CarouselItem;

  selectedIndex = 0;

  interval: Subscription = Subscription.EMPTY;



  constructor() {
    this.createItems();
    this.selectedItem = this.carouselItems[0];
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.shouldStep) {
      this.setInterval();
    }
  }

  createItems() {
    this.carouselItems.push(new CarouselItem(0, 'TAKE CONTROL', 'This easy-to-use platform uses your information to create a personal investment plan.', 'assets/pps/images/landing/take_control.png'));
    this.carouselItems.push(new CarouselItem(1, 'MAKE BETTER DECISIONS', 'Intelligent systems empower you to make informed choices and set clear goals.', 'assets/pps/images/landing/better_dec.png'));
    this.carouselItems.push(new CarouselItem(2, 'SAVE TIME', 'Instant online access means you can take action anywhere, which saves you time.', 'assets/pps/images/landing/save_time.png'));
  }

  changeIndex() {
    this.selectedIndex++;
    if (this.selectedIndex + 1 > this.carouselItems.length) {
      this.selectedIndex = 0;
    }
    this.setInterval();
  }



  setInterval() {

    this.interval.unsubscribe();

    this.interval = interval(this.stepperInterval).subscribe(x => {
      this.changeIndex();
    });
  }

}


export class CarouselItem {
  constructor(public index, public heading, public description, public image) { }
}
