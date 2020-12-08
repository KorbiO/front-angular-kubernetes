import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWidgetPriceComponent } from './single-widget-price.component';

describe('SingleWidgetPriceComponent', () => {
  let component: SingleWidgetPriceComponent;
  let fixture: ComponentFixture<SingleWidgetPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleWidgetPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleWidgetPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
