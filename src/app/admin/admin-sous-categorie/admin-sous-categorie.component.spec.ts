import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSousCategorieComponent } from './admin-sous-categorie.component';

describe('AdminSousCategorieComponent', () => {
  let component: AdminSousCategorieComponent;
  let fixture: ComponentFixture<AdminSousCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSousCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSousCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
