import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWidgetRecentPostComponent } from './single-widget-recent-post.component';

describe('SingleWidgetRecentPostComponent', () => {
  let component: SingleWidgetRecentPostComponent;
  let fixture: ComponentFixture<SingleWidgetRecentPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleWidgetRecentPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleWidgetRecentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
