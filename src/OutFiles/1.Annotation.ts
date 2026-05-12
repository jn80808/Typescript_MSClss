//duck --- 20 

//Declaration and Annotation in TypeScript

//declaration: is declaring a type 

type CustomString = string;

type CustomNumber = number;

type User = {
    username : string;
    email : string;
    login() : void;
}

type CustomDate = Date;

type CustomArray<T> = T[];

type CustomSymbol = symbol;

//annotation : when you assigning a type to a variable or function parameter or return type

let firstName : CustomString = "John";
let ageJohn : CustomNumber = 30;
let userJohn: User = {
    username : "john_doe",
    email : "john.doe@example.com"
}

let today : CustomDate = new Date();
let numbers : CustomArray<number> = [1, 2, 3, 4, 5];

function greetUser(user : User) : void {
    console.log(`Hello, ${user.username}!`);
}
greetUser(userJohn);

let uniqueId : CustomSymbol = Symbol("id");

let unique : CustomSymbol = Symbol();


function addNumbers(a : CustomNumber, b : CustomNumber) : CustomNumber {
    return a + b;
}   

//inference : when TypeScript can automatically determine the type of a variable or function return type based on the assigned value or function body
let sum : CustomNumber = addNumbers(5, 10);
console.log(sum);

//declaration: is declaring a type
//annotation : when you assigning a type 
//inference : when TypeScript can automatically determine the type of a variable 


