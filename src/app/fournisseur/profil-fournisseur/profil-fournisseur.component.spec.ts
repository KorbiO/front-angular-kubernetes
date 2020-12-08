import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilFournisseurComponent } from './profil-fournisseur.component';

describe('ProfilFournisseurComponent', () => {
  let component: ProfilFournisseurComponent;
  let fixture: ComponentFixture<ProfilFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
