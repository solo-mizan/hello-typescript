// // a type is dependent on another type

// type a1 = null;
// type a2 = number;
// type a3 = string;

// type a4 = a1 extends string ? string : any;

// // nested conditional type

// type d = a1 extends null ? null : a3 extends number ? number : never;