// Pick
interface Person {
    name: string;
    email: string;
    contactNo: string; 
}

type Contact = Pick<Person, "contactNo" | "email">;


// Omit
type Name = Omit<Person, "email">;

// Optional
type Optional = Partial<Person>;

// Required
type RequiredProps = Required<Person>;

// ReadOnly
const person: Readonly<Person> = {
    name: "Mizan Rahman",
    email: "mizanbd.eee@gmail.com",
    contactNo: "01719402933"
};

// Using index signature 
type MyObj1 = {
    [key: string]: string;
};

const obj: MyObj2 = {
    a: "Mizan",
    b: "Mahdee",
    c: "Rony",
    d: "Ahosan"
};

// Record type
type MyObj2 = Record<'a' | 'b' | 'c' | 'd', string>;