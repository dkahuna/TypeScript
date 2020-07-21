// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

character = "Link";
console.log(character);


// functions

let greet: Function;

greet = () => {
    console.log("hello, world");
}

console.log(greet());

const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b);
    console.log(c);
}

add(10, 20);
