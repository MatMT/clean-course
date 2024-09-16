export abstract class Vehicle {

    abstract getNumberOfSeats() : number;

    // getNumberOfSeats() : number {
    // throw Error('Methos not implemented');
    // }
}

export class Tesla extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Volvo extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Ford extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}
