import {Component, OnInit} from '@angular/core';
import {ExpenseCost, Vehicle, VehicleExpenseCost} from "../../model/Vehicle";
import {VehicleService} from "../vehicle.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {
  response: String = '';

  vehicleExpense: VehicleExpenseCost = new VehicleExpenseCost(
    new Vehicle(
      '',
      '',
      '',
      0
    ),
    []
  );

  constructor(
    private service: VehicleService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.getVehicleExpense(id? id : "0");
  }



  getVehicleExpense(id: string) {
    this.service.getById(id)
      .subscribe(
        value => this.vehicleExpense = value
      )
  }

  update() {
    this.vehicleExpense.expenses.push(new ExpenseCost("C", 150000))
    this.service.update(this.vehicleExpense)
      .subscribe(value => {
          this.response = value;
          console.log(value)
      });
  }
}
