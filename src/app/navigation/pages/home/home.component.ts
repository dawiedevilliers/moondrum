import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('mainscene') parallaxScene: ElementRef;

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

}
