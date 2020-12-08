import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMarqueComponent } from './table-marque.component';

describe('TableMarqueComponent', () => {
  let component: TableMarqueComponent;
  let fixture: ComponentFixture<TableMarqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMarqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
