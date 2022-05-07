package com.example.Transportetotal.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
@Builder
public class ExpensesByVehicleId implements Serializable {

    private Long expenseId;
    private Long vehicleId;
}
