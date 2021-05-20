import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTbaleComponent } from './smart-tbale.component';

describe('SmartTbaleComponent', () => {
  let component: SmartTbaleComponent;
  let fixture: ComponentFixture<SmartTbaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartTbaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTbaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
