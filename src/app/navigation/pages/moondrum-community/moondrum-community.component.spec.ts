import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoondrumCommunityComponent } from './moondrum-community.component';

describe('MoondrumCommunityComponent', () => {
  let component: MoondrumCommunityComponent;
  let fixture: ComponentFixture<MoondrumCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoondrumCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoondrumCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
