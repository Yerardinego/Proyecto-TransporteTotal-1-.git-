import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleExpensesListComponent } from './vehicle-expenses-list.component';

describe('VehicleExpensesListComponent', () => {
  let component: VehicleExpensesListComponent;
  let fixture: ComponentFixture<VehicleExpensesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleExpensesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleExpensesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
