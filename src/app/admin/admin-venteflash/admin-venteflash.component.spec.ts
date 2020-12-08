import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVenteflashComponent } from './admin-venteflash.component';

describe('AdminVenteflashComponent', () => {
  let component: AdminVenteflashComponent;
  let fixture: ComponentFixture<AdminVenteflashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVenteflashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVenteflashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
