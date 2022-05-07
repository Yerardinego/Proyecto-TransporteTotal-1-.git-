package com.example.Transportetotal.services.vehicleexpenses;

import com.example.Transportetotal.model.ExpensesByVehicleId;
import com.example.Transportetotal.repository.ExpensesByVehicleRepository;
import com.example.Transportetotal.repository.VehicleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class HandleVehicleExpenses implements VehicleExpensesHandler {

    private final ExpensesByVehicleRepository repository;
    private final VehicleRepository vehicleRepository;
    @Override
    public String delete(Long vehicleId) {
        try {
            var vehicleExpenses = repository.findAllByVehicleId(vehicleId);
            var vehicle = vehicleExpenses.get(0).getVehicle();
            repository.deleteAll(vehicleExpenses);
            vehicleRepository.delete(vehicle);
            return "Successfully deleted the registry";
        } catch (Exception e) {
            return "Could not delete the registry";
        }
    }

    @Override
    public String delete(Long vehicleId, Long expenseId) {
        try {
            repository
                    .deleteById(ExpensesByVehicleId
                            .builder()
                            .expenseId(expenseId)
                            .vehicleId(vehicleId)
                            .build()
                    );
            return "Successfully deleted registry";
        }
        catch (Exception e) {
            e.printStackTrace();
            return "Could not process operation";
        }
    }
}
