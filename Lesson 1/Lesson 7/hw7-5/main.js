// #zg6Fifnqig
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const cinderellas = [
    new Cinderella('cinderella1', 25, 38 ),
    new Cinderella('cinderella2', 28, 37 ),
    new Cinderella('cinderella3', 22, 36 ),
    new Cinderella('cinderella4', 23, 39 ),
    new Cinderella('cinderella5', 26, 35 ),
    new Cinderella('cinderella6', 24, 34 ),
    new Cinderella('cinderella7', 21, 40 ),
    new Cinderella('cinderella8', 27, 32 ),
    new Cinderella('cinderella9', 23, 30 ),
    new Cinderella('cinderella10', 25, 33 ),
]

const prince = new Prince('prince', 31, 35);

const cinderellaWife = cinderellas.find(cinderella => cinderella.footSize ===prince.shoe);

prince.wife = cinderellaWife;
console.log(prince.wife)