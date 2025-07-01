"use strict";
class Car2 {
    constructor(model, producer, yearOfRelease, maximumSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.yearOfRelease = yearOfRelease;
        this.maximumSpeed = maximumSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive() {
        return `їдемо зі швидкістю ${this.maximumSpeed} на годину`;
    }
    ;
    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
    ;
    increaseMaxSpeed(newSpeed) {
        if (newSpeed > 0) {
            this.maximumSpeed += newSpeed;
            return this.maximumSpeed;
        }
    }
    ;
    changeYear(newValue) {
        if (newValue > 1815) {
            return this.yearOfRelease = newValue;
        }
    }
    ;
    addDriver(driver) {
        this.driver = driver;
    }
    ;
}
let car2 = new Car('Model S', 'Tesla', 2022, 250, 2.0);
console.log(car2.drive());
console.log(car2.info());
console.log(car2.increaseMaxSpeed(20));
console.log(car2.changeYear(2000));
const driver = {
    name: "Олександр",
    age: 35,
    license: true,
    experience: "10 років"
};
car2.addDriver(driver);
console.log(car2);
