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


  constructor() { }



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

}
