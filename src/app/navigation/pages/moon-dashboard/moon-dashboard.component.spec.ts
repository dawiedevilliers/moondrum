
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonDashboardComponent } from './moon-dashboard.component';

describe('MoonDashboardComponent', () => {
  let component: MoonDashboardComponent;
  let fixture: ComponentFixture<MoonDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoonDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoonDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
