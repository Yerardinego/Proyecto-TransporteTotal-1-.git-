import { Component, OnInit } from '@angular/core';
import {VehicleTrip} from "../../model/Vehicle";
import {VehicleService} from "../vehicle.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-vehicle-trips-list',
  templateUrl: './vehicle-trips-list.component.html',
  styleUrls: ['./vehicle-trips-list.component.css']
})
export class VehicleTripsListComponent implements OnInit {

  header = ["vehiclePlate", "tripOrigin", "tripDestination", "profit"]
  vehicleTrips: VehicleTrip[] = [];
  datasource = new MatTableDataSource<VehicleTrip>();
  constructor(private service: VehicleService) { }

  ngOnInit(): void {
    this.getVehicleTrips()
  }

  getVehicleTrips() {
    this.service.getVehicleTrips()
      .subscribe(data => {
        this.vehicleTrips = data;
        this.datasource.data = data;
      });
  }

}
