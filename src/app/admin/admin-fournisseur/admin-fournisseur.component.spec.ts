import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFournisseurComponent } from './admin-fournisseur.component';

describe('AdminFournisseurComponent', () => {
  let component: AdminFournisseurComponent;
  let fixture: ComponentFixture<AdminFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
