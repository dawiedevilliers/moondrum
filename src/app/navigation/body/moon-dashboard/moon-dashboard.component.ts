import { Component } from '@angular/core';

@Component({
  selector: 'moon-dashboard',
  templateUrl: './moon-dashboard.component.html',
  styleUrls: ['./moon-dashboard.component.css']
})
export class MoonDashboardComponent {
  cards = [
    { title: 'Events', cols: 2, rows: 1 },
    { title: 'About', cols: 1, rows: 1 },
    { title: 'Contact', cols: 1, rows: 2 },
    { title: 'Blog', cols: 1, rows: 1 }
  ];
}
