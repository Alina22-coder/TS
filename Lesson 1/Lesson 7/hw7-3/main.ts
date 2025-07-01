// #vV9a6584I5
type CarType = {
    model: string;
    producer: string;
    yearOfRelease: number;
    maximumSpeed: number;
    engineCapacity: number;
    drive: () => string;
    info: () => void;
    increaseMaxSpeed: (newSpeed: number) => number|undefined;
    changeYear: (newValue: number) => number;
    addDriver: (driver: DriverType) => void;
    driver?: DriverType;
};

type DriverType = {
    name: string;
    age: number;
    license: boolean;
    experience: string;
};

function Car (this: any, model:string, producer:string, yearOfRelease:number, maximumSpeed:number, engineCapacity:number):void {
    this.model = model;
    this.producer = producer;
    this.yearOfRelease = yearOfRelease;
    this.maximumSpeed = maximumSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function ():string{
        return `їдемо зі швидкістю ${this.maximumSpeed} на годину`
    }
    this.info = function ():void{
        for (const key in this){
            console.log(key, this[key]);
        }
    }
    this.increaseMaxSpeed = function (newSpeed:number):number|undefined {
        if(newSpeed > 0){
            this.maximumSpeed += newSpeed;
            return this.maximumSpeed;
        }
    }
    this.changeYear = function (newValue:number):number {
        return this.yearOfRelease = newValue;
    }
    this.addDriver = function (driver:DriverType):void {
        this.driver = driver;
    }
}

let car:CarType = new (Car as any) ('Model S', 'Tesla', 2022, 250,  2.0);


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