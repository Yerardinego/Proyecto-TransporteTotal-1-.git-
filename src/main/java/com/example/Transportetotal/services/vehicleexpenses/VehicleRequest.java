package com.example.Transportetotal.services.vehicleexpenses;

import com.example.Transportetotal.model.Vehicle;
import lombok.Value;

@Value
public class VehicleRequest {
    Long id;
    String plate;
    String model;
    String type;


    public VehicleRequest(Long id, String plate, String model, String type) {
        this.id = id;
        this.plate = plate;
        this.model = model;
        this.type = type;
    }

    public VehicleRequest(Vehicle vehicle) {
        this.id = vehicle.getId();
        this.plate = vehicle.getPlate();
        this.model = vehicle.getModel();
        this.type = vehicle.getType();
    }
}
