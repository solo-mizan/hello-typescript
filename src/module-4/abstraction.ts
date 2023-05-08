// // using interface
// interface IVehicle{
//     startEngine(): void;
//     stopEngine(): void;
//     move(): void;
// }

// class Vehicle implements IVehicle {

//     constructor(
//         public name: string,
//         public model: string,
//        public milage: number
//     ){
        
//     }
//     test() {
//         console.log('Testing purpose...');
//     }

//     startEngine(): void {
//         console.log('Engine started');
//     }

//     stopEngine(): void {
//         console.log('Engine stopped');
//     }

//     move(): void {
//         console.log('Car is moving...')
//     }
// }

// const vehicle1 = new Vehicle('Toyota', 'Corolla', 2500)
// console.log(vehicle1);

// using abstract class

class Vehicle {
        constructor(
        public name: string,
        public model: string,
       public milage: number
    ){
        
    }
    test() {
        console.log('Testing purpose...');
    }

    startEngine(): void {
        console.log('Engine started');
    }

    stopEngine(): void {
        console.log('Engine stopped');
    }

    move(): void {
        console.log('Car is moving...')
    }
}