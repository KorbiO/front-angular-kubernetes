import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWidgetManufacturersComponent } from './single-widget-manufacturers.component';

describe('SingleWidgetManufacturersComponent', () => {
  let component: SingleWidgetManufacturersComponent;
  let fixture: ComponentFixture<SingleWidgetManufacturersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleWidgetManufacturersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleWidgetManufacturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
