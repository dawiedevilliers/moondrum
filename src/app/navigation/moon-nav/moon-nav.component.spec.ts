
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonNavComponent } from './moon-nav.component';

describe('MoonNavComponent', () => {
  let component: MoonNavComponent;
  let fixture: ComponentFixture<MoonNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoonNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoonNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
