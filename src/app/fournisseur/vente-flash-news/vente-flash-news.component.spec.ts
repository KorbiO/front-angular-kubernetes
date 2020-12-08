import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteFlashNewsComponent } from './vente-flash-news.component';

describe('VenteFlashNewsComponent', () => {
  let component: VenteFlashNewsComponent;
  let fixture: ComponentFixture<VenteFlashNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteFlashNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteFlashNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
