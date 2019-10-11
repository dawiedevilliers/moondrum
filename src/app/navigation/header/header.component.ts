import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'MoonDrum';

  @Input() url = '';

  constructor() { }

  ngOnInit() {
  }

  openLink(url: string) {
    window.open(url, "_blank");
  }

}
