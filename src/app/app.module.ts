import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { VehicleComponent } from './vehicle/vehicle.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VehicleExpensesListComponent } from './vehicle-expenses-list/vehicle-expenses-list.component';
import { VehicleTripsListComponent } from './vehicle-trips-list/vehicle-trips-list.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    AddVehicleComponent,
    VehicleExpensesListComponent,
    VehicleTripsListComponent,
    EditVehicleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
