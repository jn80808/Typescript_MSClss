//union type : when a variable can hold more than 
// one type of value


////-------String and Number 

type StringOrNumber = string | number; //union type 

let value : StringOrNumber;
value = "Hello";
value = 42;

function printValue(value : StringOrNumber) : void {
    if (typeof value === "string") {
        console.log(`String value: ${value}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}

printValue("Hello");
printValue(42);


////-------Number and Undefined 

type NumberOrUndefined = number | undefined;

let age : NumberOrUndefined;
age = 30;
age = undefined;

function printAge(age : NumberOrUndefined) : void {
    if (age === undefined) {
        console.log("Age is undefined");
    } else {
        console.log(`Age: ${age}`);
    }
}

printAge(30);
printAge(undefined);

////-------String and Null

type StringOrNull = string | null;
let name : StringOrNull;
name = "Alice";
name = null;


function printName(name : StringOrNull) : void {
    if (name === null) {
        console.log("Name is null");
    }
    else {
        console.log(`Name: ${name}`);
    }
}   

printName("Alice");
printName(null);

////-------Date and Undefined

type DateOrUndefined = Date | undefined;
let eventDate : DateOrUndefined;
eventDate = new Date();
eventDate = undefined;

function printEventDate(date : DateOrUndefined) : void {
    if (date === undefined) {
        console.log("Event date is undefined");
    } else {
        console.log(`Event date: ${date.toDateString()}`);
    }
}

printEventDate(new Date());
printEventDate(undefined);



////-------string and Undefined
function printInput(input : string | undefined)  {
    if (input ){
        console.log(`Input: ${input}`);
    }
    console.log("Input is undefined");
}

printInput("Hello");
printInput(undefined);
printInput();









