import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTripsListComponent } from './vehicle-trips-list.component';

describe('VehicleTripsListComponent', () => {
  let component: VehicleTripsListComponent;
  let fixture: ComponentFixture<VehicleTripsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleTripsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTripsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
