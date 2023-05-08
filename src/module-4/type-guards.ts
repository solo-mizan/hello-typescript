// // introduction of type guard

// // keyof guard

// type AlphaNumeric = string | number;

// function add(param1:AlphaNumeric, param2:AlphaNumeric): AlphaNumeric {
//     if (typeof param1 === 'number' && typeof param2 === 'number') {
//         return param1 + param2;
//     }
//     else {
//         return param1.toString() + param2.toString();
// }
// }

// console.log(add(1, 2));
// console.log(add('1', '2'));


// // in guard 
// type NormalType = {
//     name: string;
// }

// type AdminUserType = {
//     name: string;
//     role: 'admin';
// };

// function getUser(user: NormalType | AdminUserType) {
//     if ('role' in user) {
//         return `I am an Admin and my role is ${user.role}`
//     }
//     else {
//         return `I am a normal user`
//     }
// }

// const normalUser1: NormalType = { name: "Mr. X" };
// const adminUser1: AdminUserType = { name: "Mr. Y", role: "admin" };

// console.log(getUser(normalUser1));

// console.log(getUser(adminUser1));

// // instance of guard

// class Animal {
//     name: string;
//     species: string;
//     constructor(name: string, species: string) {
//         this.name = name;
//         this.species = species;
//     }

//     makeSound() {
//         console.log("I am making sound");
//     }
// }

// class Dog extends Animal {
//     constructor(name: string, species: string) {
//         super(name, species)
//     }
//     makeBark() {
//         console.log("I am barking");
//     }
// }

// class Cat extends Animal {
//     constructor(name: string, species: string) {
//         super(name, species)
//     }
//     makeMeow() {
//         console.log("I am meowing");
//     }
// }

// const animal1 = new Dog('German shephard', 'Dog');
// const animal2 = new Cat('Maklu Project', 'British Cat');

// function isDog(animal: Animal): animal is Dog {
//     return animal instanceof Dog;
// }

// function getAnimal(animal: Animal) {
//     if (isDog(animal)) {
//         animal.makeBark();
//     }
//     else if (animal instanceof Cat) {
//         animal.makeMeow();
//     }
//     else {
//         animal.makeSound();
//     }
// }

// getAnimal(animal1);

// getAnimal(animal2)