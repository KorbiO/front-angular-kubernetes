import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsCheckoutComponent } from './breadcrumbs-checkout.component';

describe('BreadcrumbsCheckoutComponent', () => {
  let component: BreadcrumbsCheckoutComponent;
  let fixture: ComponentFixture<BreadcrumbsCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbsCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
