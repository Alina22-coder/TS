// #5kla3yMpgp
class Car {
    constructor(model, producer, yearOfRelease, maximumSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.yearOfRelease = yearOfRelease;
        this.maximumSpeed = maximumSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive (){
        return `їдемо зі швидкістю ${this.maximumSpeed} на годину`;
    };
    info (){
        for (const key in this){
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed  (newSpeed) {
        if(newSpeed > 0){
            return this.maximumSpeed + newSpeed
        }
    };
    changeYear (newValue) {
        if(newValue >1815){
            return this.yearOfRelease = newValue;
        }
    };
    addDriver (driver) {
        this.driver = driver;
    };
}

let car = new Car ('Model S', 'Tesla', 2022, 250,  2.0);

console.log(car.drive());
console.log(car.info());
console.log(car.increaseMaxSpeed(20));
console.log(car.changeYear(2000));

const driver={
    name: "Олександр",
    age: 35,
    license: true,
    experience: "10 років"
}
car.addDriver(driver);
console.log(car);






