// ▪ Define the Car class:
// ▪ Create a class namedCar.
// ▪ Adda constructor that accepts make, model, and year as parameters and initializes these properties.
// ▪ AddMethods: ▪ getCarInfo method:This methodshould return a string containing the car's make, model, and year.
// ▪ start method:This method should set a property called isRunning to trueand return a string indicating the car has started.
// ▪ stopmethod:This methodshould set the isRunning propertyto false and return a string indicating the car has stopped.
// ▪ Create Instances and Test Methods:
// ▪ Create twoinstances of the Car class with different make, model, and year values.
// ▪ Call the getCarInfo, start, and stop methods on these instances and print the results to verify that everything works as
// expected.

export default class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }

  getCarInfo() {
    let status = this.isRunning ? "Moving" : "Stopped";
    return `${this.year} ${this.make} ${this.model} - ${status}`;
  }

  startCar() {
    this.isRunning = true;
  }

  stopCar() {
    this.isRunning = false;
  }
}
