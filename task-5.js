'use strict'

class Car {
    constructor({
        speed = 0,
        price,
        maxSpeed,
        isOn,
        distance
    }) {
        this.speed = speed
        this._price = price
        this.maxSpeed = maxSpeed
        this.isOn = isOn
        this.distance = distance
    }

    static getSpecs(car) {
        return console.log(car);
        // return console.log(this.maxSpeed,this.speed,this.isOn,this.distance,this._price);
    }

    get price() {
        return this._price
    }

    set price(value) {
        return this._price = value
    }

    turnOn() {
        return this.isOn = true
    }

    turnOff() {
        return this.isOn = false
    }

    accelerate(value) {
        return value < this.maxSpeed ? this.speed = value : false
    }

    decelerate(value) {
        if (value > 0 && value < this.speed) {
            this.speed = this.speed - value
        } else this.speed = 0
        return this.speed
    }

    drive(hours) {
        if (this.isOn = true) {
            this.distance = this.speed * hours
        }
        return

    }
}

const mustang = new Car({
    maxSpeed: 200,
    price: 2000
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);


Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();


Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000