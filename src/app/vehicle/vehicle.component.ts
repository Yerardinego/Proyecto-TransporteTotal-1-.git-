import { Component, OnInit } from '@angular/core';
import {VehicleService} from "../vehicle.service";
import {Vehicle, VehicleExpenseCost} from "../../model/Vehicle";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {



  constructor(
    private service: VehicleService,
  ) { }

  ngOnInit(): void {
    this.service.getVehicleExpenses()
      .subscribe(data => console.log(data))
    this.service.getVehicleTrips()
      .subscribe(data => console.log(data))

  }

}
