// const arrayOfNumbers = [1, 2, 3, 4];

// const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());

// console.log(arrayOfStrings);

// type AreaNumber = {
//    readonly height: number;
//     width: number;
//     thickness: number;
// }

// const object: AreaNumber = {
//     height: 13,
//     width: 5,
//     thickness: 2
// };
// console.log(object['height']);

// // object.height = 20;   can not assign to height. Because it is declared as readonly.

// type A = AreaNumber['height']; // look up types
// type B = keyof AreaNumber;

// const BValue: B = 'height'; // 'height' | 'width' | 'thickness'

// type Volume = {
//     height: number;
//     width: number;
//     depth: number;
// }

// type Area = {
//     [key in keyof Volume]: boolean;
// }
