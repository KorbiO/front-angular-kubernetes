import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsContactComponent } from './breadcrumbs-contact.component';

describe('BreadcrumbsContactComponent', () => {
  let component: BreadcrumbsContactComponent;
  let fixture: ComponentFixture<BreadcrumbsContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbsContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
