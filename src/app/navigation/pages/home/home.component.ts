import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('mainscene') parallaxScene: ElementRef;
  spin = false;
  timer = '';

  constructor() {
    this.setupTimer();
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.setupParallax();
   
  }

  setupParallax() {
    const scene = this.parallaxScene.nativeElement;

    if (scene !== null) {
      const parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        hoverOnly: true
      });
    }

  }

  goToTickets() {

    const url = 'http://eventbytz.com/event/detail/5d710e7362e0c00619f3b38c/lunar-utopia/?fbclid=IwAR1QXVkRpIAnk_rRt0Gw9CX5UCjY6Ptxd0-u-srOS_vc6lAxiCnZmVCp6cc';

    window.open(url, "_blank");

  }

  setupTimer() {
    // Set the date we're counting down to
    var countDownDate = new Date("Nov 8, 2019 16:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(() => {

      console.log('interval hit');

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      //   + minutes + "m " + seconds + "s ";

      this.timer = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        this.timer = "EXPIRED";
      }
    }, 1000);


  }

}
