class Car implements IVehicle {
    wheels: number;
    engine: string;

    constructor(wheels: number, engine: string) {
        this.wheels = wheels;
        this.engine = engine;
    }

    drive() {
        console.log('Driving..');
    }
}