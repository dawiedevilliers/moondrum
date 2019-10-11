import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [

    trigger('left',[
      transition(':enter', [
        style({
          opacity: '0',
          transform: 'translateX(-100%)'
        }),
        animate(2000, style({
          opacity: '1',
          transform: 'translateX(0%)'
        }))
      ]),
      transition(':leave', [
        style({
          opacity: '1',
          transform: 'translateX(0%)'
        }),
        animate(2000, style({
          opacity: '0',
          transform: 'translateX(-1000%)'
        }))
      ])
    ]),
    trigger('right',[
      transition(':enter', [
        style({
          opacity: '0',
          transform: 'translateX(100%)'
        }),
        animate(2000, style({
          opacity: '1',
          transform: 'translateX(0%)'
        }))
      ]),
      transition(':leave', [
        style({
          opacity: '1',
          transform: 'translateX(0%)'
        }),
        animate(2000, style({
          opacity: '0',
          transform: 'translateX(100%)'
        }))
      ])
    ]),
    trigger('bottom',[
      transition(':enter', [
        style({
          opacity: '0',
          transform: 'translateY(100%)'
        }),
        animate(2000, style({
          opacity: '1',
          transform: 'translateY(0%)'
        }))
      ]),
      transition(':leave', [
        style({
          opacity: '1',
          transform: 'translateY(0%)'
        }),
        animate(2000, style({
          opacity: '0',
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'app';
  url = '';

  constructor(
    private router: Router,
    private matIconRegistry: MatIconRegistry){

    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((event: NavigationStart) => {
      if(event !== null && event !== undefined) {
        this.generateRouteData(event);
      }
    });

  }

  generateRouteData(route: NavigationStart) {
    

    let url = route['url'];
    let urlAfterRedirects = route['urlAfterRedirects'];
    this.url = url;

    console.log(route);
    console.log(url);

    // if (~url.indexOf('/track-selection')) {
    //   this.changeRoute('track-selection');
    //   this.wizardService.changeSelectedIndex(0);
    // }

    // if (~url.indexOf('/track-selection/main')) {
    //   this.wizardService.changeWizardMobileTextHeadings(['PPS Horizon']);
    // } else if (~url.indexOf('/track-selection/retire')) {
    //   this.wizardService.changeWizardMobileTextHeadings(['Invest and Retire']);
    // } else if (~url.indexOf('/track-selection/save')) {
    //   this.wizardService.changeWizardMobileTextHeadings(['Money Management']);
    // } else if (~url.indexOf('/track-selection/protect')) {
    //   this.wizardService.changeWizardMobileTextHeadings(['Protect my Family']);
    // } else if (~url.indexOf('/fna')) {
    //   this.changeRoute('fna');
    // } else if (~url.indexOf('/tax')) {
    //   this.changeRoute('tax');
    // } else if (~url.indexOf('/saving-for-retirement')) {
    //   this.changeRoute('saving-for-retirement');
    // } else if (~url.indexOf('/investing-at-retirement')) {
    //   this.changeRoute('investing-at-retirement');
    // } else if (~url.indexOf('/building-wealth')) {
    //   this.changeRoute('building-wealth');
    // } else if (~url.indexOf('/saving-towards-a-goal')) {
    //   this.changeRoute('saving-towards-a-goal');
    // } else if (~url.indexOf('/proposal') || ~url.indexOf('/investment-proposal')) {
    //   this.changeRoute('proposal');
    // } else if (~url.indexOf('/loginbyurl')) {
    //   this.changeRoute('loginbyurl');
    // } else if (~url.indexOf('/financial-plans')) {
    //   this.changeRoute('financial-plans');
    //   this.wizardService.changeSelectedIndex(0);
    //   this.wizardService.changeWizardMobileTextHeadings(['Financial Plans']);
    // } else if (~url.indexOf('/impersonation')) {
    //   this.changeRoute('home');
    //   this.wizardService.changeSelectedIndex(0);
    //   this.wizardService.changeWizardMobileTextHeadings(['PPS Horizon']);
    // } else if (
    //     ~url.indexOf('/home') 
    // ||  (urlAfterRedirects !== null 
    //   && urlAfterRedirects !== undefined 
    //   && ~urlAfterRedirects.indexOf('/home'))) {
    //   this.changeRoute('home');
    // } else {
    //   this.changeRoute('pageNotFound');
    // }

    // this.changeRoute(url);

  }
}
