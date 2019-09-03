import { Component, OnInit, Input } from '@angular/core';
import { MoonDrumEvent } from '../../../../classes/MoonDrumEvent';

@Component({
  selector: 'app-events-item',
  templateUrl: './events-item.component.html',
  styleUrls: ['./events-item.component.scss']
})
export class EventsItemComponent implements OnInit {


  @Input() event: MoonDrumEvent = null;

  constructor() { }

  ngOnInit() {
  }

}
