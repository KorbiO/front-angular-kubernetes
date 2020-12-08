import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingSummeryComponent } from './shopping-summery.component';

describe('ShoppingSummeryComponent', () => {
  let component: ShoppingSummeryComponent;
  let fixture: ComponentFixture<ShoppingSummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingSummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
