import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMarkComponent } from './admin-mark.component';

describe('AdminMarkComponent', () => {
  let component: AdminMarkComponent;
  let fixture: ComponentFixture<AdminMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
