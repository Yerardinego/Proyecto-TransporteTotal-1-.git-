package com.example.Transportetotal.services.vehicleexpenses;

import com.example.Transportetotal.model.Expense;
import lombok.Value;

@Value
public class ExpenseRequest {
    String expenseCode;
    Double cost;

}
