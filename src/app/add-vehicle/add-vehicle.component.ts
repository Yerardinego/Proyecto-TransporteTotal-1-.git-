import {Component, OnInit} from '@angular/core';
import {VehicleService} from "../vehicle.service";
import {ExpenseCost, Vehicle, VehicleExpense, VehicleExpenseCost} from "../../model/Vehicle";

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  public response: String = '';
  public vehicleExpense: VehicleExpenseCost | undefined;
  public expenses: ExpenseCost[] = [];
  public vehicle = new Vehicle(
    '',
    '',
    '',
    0
  );

  constructor(private service: VehicleService) {
  }

  ngOnInit(): void {
  }

  addVehicle() {
    const expenseCost = new ExpenseCost("C", 150000)
    this.vehicleExpense = new VehicleExpenseCost(this.vehicle, this.expenses);
    this.vehicleExpense.expenses.push(expenseCost);
    this.service.add(this.vehicleExpense)
      .subscribe(response => {
        console.log(response);
        this.response = response;
      })

  }

}
