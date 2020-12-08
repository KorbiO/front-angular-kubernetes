import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHomeListComponent } from './shop-home-list.component';

describe('ShopHomeListComponent', () => {
  let component: ShopHomeListComponent;
  let fixture: ComponentFixture<ShopHomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopHomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
