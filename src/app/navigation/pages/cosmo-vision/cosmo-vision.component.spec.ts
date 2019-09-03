import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmoVisionComponent } from './cosmo-vision.component';

describe('CosmoVisionComponent', () => {
  let component: CosmoVisionComponent;
  let fixture: ComponentFixture<CosmoVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmoVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmoVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
