const display = document.getElementsByClassName('display');

class Car {
    constructor(name, doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
        this.name = name;
    }

    carStat() {
        console.log( `This is a ${this.name} with ${this.doors} doors, a ${this.engine} engine and in the color of ${this.color}` );
    }
}

var fortuner = new Car('Fortuner', 4, '3L', 'grey')

display.innerHTML = `<h1>${fortuner.name}</h1>`

console.log(fortuner);
console.log(fortuner.carStat());




