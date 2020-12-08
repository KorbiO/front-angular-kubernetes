import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWidgetCategoryComponent } from './single-widget-category.component';

describe('SingleWidgetCategoryComponent', () => {
  let component: SingleWidgetCategoryComponent;
  let fixture: ComponentFixture<SingleWidgetCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleWidgetCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleWidgetCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
