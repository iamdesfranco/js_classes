'use strict';

const display = document.querySelector('.display');
const scaffod = `<li>%s%</li>`;

// sayHi();

class Car {
    constructor(name, doors, engine, color) {
        this.name = name;    
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStat() {
        console.log( `This is a ${this.name} with ${this.doors} doors, a ${this.engine} engine and in the color of ${this.color}` );
    }

    static totalDoors(car1, car2) {
        const doors1 = car1.doors;
        const doors2 = car2.doors;

        return doors1 + doors2;
    }
}

class SUV extends Car {
    constructor(name, doors, engine, color, brand, carStat) {
        super(name, doors, engine, color, carStat);
        this.brand = brand;
        this.wheels = 4;
        this.ac = true;
    }

    myBrand() {
        return console.log(`this SUV is a ${this.brand}`);
    }
}

var fortuner = new SUV('Fortuner', 4, '4Cyl', 'White', 'Toyota');

var civic = new Car('Civic', 5, 'V4', 'blue');

// for(let i in fortuner) {
//     display.innerHTML += scaffod.replace('%s%',`${i}: ${fortuner[i]}`)
// }

// function sayHi() {
//     console.log('Hello!')
// }

console.log(`${fortuner.name}\n`,fortuner);
console.log(fortuner.myBrand())

console.log(`${civic.name}\n`,civic);

console.log(fortuner.carStat(), civic.carStat());

console.log(`Total Doors: ${Car.totalDoors(fortuner, civic)}`)




