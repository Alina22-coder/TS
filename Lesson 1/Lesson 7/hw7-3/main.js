// #vV9a6584I5
function Car (model, producer, yearOfRelease, maximumSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.yearOfRelease = yearOfRelease;
    this.maximumSpeed = maximumSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function (){
        return `їдемо зі швидкістю ${this.maximumSpeed} на годину`
    }
    this.info = function (){
        for (const key in this){
            console.log(key, this[key]);
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        if(newSpeed > 0){
            return this.maximumSpeed + newSpeed
        }
    }
    this.changeYear = function (newValue) {
        return this.yearOfRelease = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new Car ('Model S', 'Tesla', 2022, 250,  2.0);


console.log(car.drive());
console.log(car.info());
console.log(car.increaseMaxSpeed(12));
console.log(car.changeYear(2025));


const driver1={
    name: "Олександр",
    age: 35,
    license: true,
    experience: "10 років"
}

car.addDriver(driver1);
console.log(car.driver);
console.log(car);




