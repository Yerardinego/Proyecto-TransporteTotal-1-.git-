package com.example.Transportetotal.services.reports.vehicleexpenses;

import com.example.Transportetotal.model.Expense;
import com.example.Transportetotal.model.ExpensesByVehicle;
import com.example.Transportetotal.model.Vehicle;
import com.example.Transportetotal.repository.ExpensesByVehicleRepository;
import com.example.Transportetotal.repository.VehicleRepository;
import com.example.Transportetotal.services.vehicleexpenses.ExpenseRequest;
import com.example.Transportetotal.services.vehicleexpenses.VehicleExpenseRequest;
import com.example.Transportetotal.services.vehicleexpenses.VehicleRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ViewVehicleExpenses implements VehicleExpensesViewer {

    private final ExpensesByVehicleRepository expensesByVehicleRepository;
    private final VehicleRepository vehicleRepository;

    @Override
    public List<VehicleExpensesView> display(String plate) {
        return vehicleRepository.findByPlate(plate)
                .map(Vehicle::getId)
                .map(expensesByVehicleRepository::findAllByVehicleId)
                .map(expensesByVehicles -> expensesByVehicles
                        .stream()
                        .map(this::toView)
                        .collect(Collectors.toList())
                )
                .orElseGet(Collections::emptyList);

    }

    @Override
    public List<VehicleExpensesView> display() {
        return expensesByVehicleRepository
                .findAll()
                .stream()
                .map(this::toView)
                .collect(Collectors.toList());
    }

    @Override
    public List<VehicleExpensesView> display(Long id) {
        return expensesByVehicleRepository
                .findAllByVehicleId(id)
                .stream()
                .map(this::toView)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<VehicleExpenseRequest> findById(Long id) {
        var expensesByVehicle = expensesByVehicleRepository
                .findAllByVehicleId(id);
        if (expensesByVehicle.isEmpty())
                return Optional.empty();
        return Optional.of(toRequestModel(expensesByVehicle));
    }

    private VehicleExpenseRequest toRequestModel(List<ExpensesByVehicle> expenses) {
        var vehicle = expenses.get(0).getVehicle();
        return new VehicleExpenseRequest(
                new VehicleRequest(vehicle),
                expenses
                        .stream()
                        .map(expensesByVehicle -> new ExpenseRequest(expensesByVehicle
                                .getExpense()
                                .getExpenseCode(),
                                expensesByVehicle.getCost()
                                ))
                        .collect(Collectors.toList())
        );
    }

    public VehicleExpensesView toView(ExpensesByVehicle expensesByVehicle) {
        var vehicle = expensesByVehicle.getVehicle();
        var expense = expensesByVehicle.getExpense();
        var cost = expensesByVehicle.getCost();

        return new VehicleExpensesView(
                new VehicleExpensesView.VehicleView(vehicle),
                new VehicleExpensesView.ExpenseView(expense, cost)
        );
    }
}
