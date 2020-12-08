import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteFlashClientComponent } from './vente-flash-client.component';

describe('VenteFlashClientComponent', () => {
  let component: VenteFlashClientComponent;
  let fixture: ComponentFixture<VenteFlashClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteFlashClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteFlashClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
