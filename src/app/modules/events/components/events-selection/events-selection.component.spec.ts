import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSelectionComponent } from './events-selection.component';

describe('EventsSelectionComponent', () => {
  let component: EventsSelectionComponent;
  let fixture: ComponentFixture<EventsSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
