import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'moon-nav',
  templateUrl: './moon-nav.component.html',
  styleUrls: ['./moon-nav.component.scss']
})
export class MoonNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  title = 'Moondrum';

  constructor(private breakpointObserver: BreakpointObserver) { }

}
