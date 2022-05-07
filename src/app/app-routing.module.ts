import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {VehicleExpensesListComponent} from "./vehicle-expenses-list/vehicle-expenses-list.component";
import {VehicleTripsListComponent} from "./vehicle-trips-list/vehicle-trips-list.component";
import {AddVehicleComponent} from "./add-vehicle/add-vehicle.component";
import {EditVehicleComponent} from "./edit-vehicle/edit-vehicle.component";

const routes: Routes = [
  { path: '', redirectTo: 'vehicle-expenses', pathMatch: 'full' },
  { path: 'vehicle-expenses', component: VehicleExpensesListComponent },
  { path: 'vehicle-trips', component: VehicleTripsListComponent },
  { path: 'add-vehicle', component: AddVehicleComponent },
  { path: 'vehicle-expenses/:id', component: EditVehicleComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
