import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalacticCommunityComponent } from './galactic-community.component';

describe('GalacticCommunityComponent', () => {
  let component: GalacticCommunityComponent;
  let fixture: ComponentFixture<GalacticCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalacticCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalacticCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
