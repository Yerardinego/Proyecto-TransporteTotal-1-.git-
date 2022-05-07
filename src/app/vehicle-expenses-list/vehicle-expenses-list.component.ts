import {Component, OnInit} from '@angular/core';
import {VehicleExpense} from "../../model/Vehicle";
import {VehicleService} from "../vehicle.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-vehicle-expenses-list',
  templateUrl: './vehicle-expenses-list.component.html',
  styleUrls: ['./vehicle-expenses-list.component.css']
})
export class VehicleExpensesListComponent implements OnInit {

  vehicleExpenses: VehicleExpense[] = [];
  header = ["plate", "model", "type", "expense", "cost", "options"];

  datasource = new MatTableDataSource<VehicleExpense>();
  message: String = 'vehicle-expenses-list works!';

  constructor(private service: VehicleService) {
  }

  ngOnInit(): void {
    this.getExpenses();
  }

  getExpenses() {
    this.service.getVehicleExpenses()
      .subscribe(value => {
        this.vehicleExpenses = value;
        this.datasource.data = value;
      });
  }

  delete(id: number) {
    this.service.deleteVehicle(id.toString())
      .subscribe(value => console.log(value));
  }

  deleteRegistry(vehicleId: number, expenseId: number) {
    this.service.delete(vehicleId, expenseId)
      .subscribe(value => this.message = value);
  }
}
