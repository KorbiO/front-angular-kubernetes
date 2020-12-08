import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilFournisseurComponent } from './edit-profil-fournisseur.component';

describe('EditProfilFournisseurComponent', () => {
  let component: EditProfilFournisseurComponent;
  let fixture: ComponentFixture<EditProfilFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfilFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
