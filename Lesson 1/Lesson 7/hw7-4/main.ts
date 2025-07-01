// #5kla3yMpgp
type DriverType2 = {
    name: string;
    age: number;
    license: boolean;
    experience: string;
};

class Car2 {model:string; producer:string; yearOfRelease:number; maximumSpeed:number; engineCapacity:number; driver?: DriverType2;
    constructor(model:string, producer:string, yearOfRelease:number, maximumSpeed:number, engineCapacity:number) {
        this.model = model;
        this.producer = producer;
        this.yearOfRelease = yearOfRelease;
        this.maximumSpeed = maximumSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive ():string{
        return `їдемо зі швидкістю ${this.maximumSpeed} на годину`;
    };
    info ():void{
        for (const key in this){
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed  (newSpeed:number):number|undefined {
        if(newSpeed > 0){
            this.maximumSpeed += newSpeed;
            return this.maximumSpeed;
        }
    };
    changeYear (newValue:number):number|undefined{
        if(newValue >1815){
            return this.yearOfRelease = newValue;
        }
    };
    addDriver (driver:DriverType2):void {
        this.driver = driver;
    };
}

let car2:Car2 = new (Car as any) ('Model S', 'Tesla', 2022, 250,  2.0);

console.log(car2.drive());
console.log(car2.info());
console.log(car2.increaseMaxSpeed(20));
console.log(car2.changeYear(2000));

const driver={
    name: "Олександр",
    age: 35,
    license: true,
    experience: "10 років"
}
car2.addDriver(driver);
console.log(car2);