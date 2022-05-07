
export class Vehicle {

  constructor(
    public type: String,
    public model: String,
    public plate: String,
    public id: number
    ) {
  }
}

export class VehicleExpenseCost {
  constructor(
    public vehicle: Vehicle,
    public expenses: ExpenseCost[]
  ) {
  }
}

export class ExpenseCost {
  constructor(
    public expenseCode: String,
    public cost: number
  ) {
  }
}



export class Expense {
  constructor(
    public id: number,
    public name: String,
    public cost: number
  ) {
  }
}

export class VehicleExpense{
  constructor(
    public vehicle: Vehicle,
    public expense: Expense,
  ) {
  }
}

export class VehicleTrip{
  constructor(
    public vehiclePlate: String,
    public tripOrigin: String,
    public tripDestination: String,
    public profit: number
  ) {
  }
}
