import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiffreAffChartsComponent } from './chiffre-aff-charts.component';

describe('ChiffreAffChartsComponent', () => {
  let component: ChiffreAffChartsComponent;
  let fixture: ComponentFixture<ChiffreAffChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiffreAffChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiffreAffChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
