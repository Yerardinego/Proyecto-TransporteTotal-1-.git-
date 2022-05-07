import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {VehicleExpense, VehicleExpenseCost, VehicleTrip} from "../model/Vehicle";




const vehicleExpensesUrl = `${environment.host}/vehicle-expenses`;
const vehicleTripsUrl = `${environment.host}/vehicle-trips`;
@Injectable({
  providedIn: 'root'
})
export class VehicleService {



  constructor(
    private http: HttpClient
  ) { }

  getVehicleExpenses() {
    return this.http.get<VehicleExpense[]>(vehicleExpensesUrl);
  }

  getVehicleTrips() {
    return this.http.get<VehicleTrip[]>(vehicleTripsUrl);
  }

  add(vehicle: VehicleExpenseCost) {
    return this.http.post<String>(vehicleExpensesUrl, vehicle);
  }

  getById(id: String) {
    return this.http.get<VehicleExpenseCost>(`${vehicleExpensesUrl}/${id}`);
  }

  update(vehicle: VehicleExpenseCost) {
    const id = vehicle.vehicle.id;
    return this.http.put<String>(`${vehicleExpensesUrl}/${id}`, vehicle);
  }

  deleteVehicle(id: String) {
    return this.http.delete<String>(`${vehicleExpensesUrl}/${id}`);
  }

  delete(vehicleId: number, expenseId: number) {
    return this.http.delete<String>(`${vehicleExpensesUrl}/${vehicleId}/${expenseId}`)
  }
}
