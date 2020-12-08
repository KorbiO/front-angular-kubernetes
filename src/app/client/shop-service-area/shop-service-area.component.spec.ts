import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopServiceAreaComponent } from './shop-service-area.component';

describe('ShopServiceAreaComponent', () => {
  let component: ShopServiceAreaComponent;
  let fixture: ComponentFixture<ShopServiceAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopServiceAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopServiceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
