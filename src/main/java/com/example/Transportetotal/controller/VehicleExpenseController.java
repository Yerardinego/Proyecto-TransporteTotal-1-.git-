package com.example.Transportetotal.controller;

import com.example.Transportetotal.services.reports.vehicleexpenses.VehicleExpensesView;
import com.example.Transportetotal.services.reports.vehicleexpenses.VehicleExpensesViewer;
import com.example.Transportetotal.services.vehicleexpenses.VehicleExpenseCreator;
import com.example.Transportetotal.services.vehicleexpenses.VehicleExpenseRequest;
import com.example.Transportetotal.services.vehicleexpenses.VehicleExpensesHandler;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/vehicle-expenses")
@RequiredArgsConstructor
@Slf4j
public class VehicleExpenseController {
    private final VehicleExpenseCreator creator;
    private final VehicleExpensesViewer viewer;
    private final VehicleExpensesHandler handler;

    @PostMapping
    public ResponseEntity<String> saveVehicleExpense(@RequestBody VehicleExpenseRequest request) {
        return ResponseEntity.ok(creator.create(request));
    }

    @DeleteMapping("/{vehicleId}")
    public ResponseEntity<String> delete(@PathVariable Long vehicleId) {
        return ResponseEntity.ok(handler.delete(vehicleId));
    }

    @DeleteMapping("/{vehicleId}/{expenseId}")
    public ResponseEntity<String> delete(
            @PathVariable Long vehicleId,
            @PathVariable Long expenseId) {
        return ResponseEntity.ok(handler.delete(vehicleId, expenseId));
    }

    @GetMapping
    public List<VehicleExpensesView> findAll(@RequestParam(required = false) String plate) {
        return Optional
                .ofNullable(plate)
                .map(viewer::display)
                .orElseGet(viewer::display);
    }

    @GetMapping("/{id}")
    public ResponseEntity<VehicleExpenseRequest> findById(@PathVariable Long id) {
        return ResponseEntity.of(viewer.findById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateVehicleExpense(
            @RequestBody VehicleExpenseRequest request,
            @PathVariable Long id) {
        return ResponseEntity.ok(creator.update(request, id));
    }


}
