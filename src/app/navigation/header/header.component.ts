import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'MoonDrum';

  constructor() { }

  ngOnInit() {
  }

  openLink(url: string) {
    window.open(url, "_blank");
  }

}
