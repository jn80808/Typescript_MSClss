// Javascript function 


//named function 
function intro1_named_function (name: string, age: number): string  /*output datatype will be declared here so the output type here will be string*/{
    return `My name is ${name} and I am ${age} years old.`;
}


//function expression
const intro2_function_expression = function (name: string, age: number): string { //using the word of function 
    return `My name is ${name} and I am ${age} years old.`;
}

//arrow function
const intro3_arrow_function = (name: string, age: number): string | number => {
    return `My name is ${name} and I am ${age} years old.`;
}

//arrow function with implicit return
const intro4_implicit_return = (name: string, age: number): string => `My name is ${name} and I am ${age} years old.`;

//function with optional parameter by adding ? after the parameter name
function intro5_optional_parameter (name: string, age?: number, country?: string): string {
    if (country && age) {
        return `My name is ${name}. I am from ${country}.`;
    }else if (age) {
        return `My name is ${name} and I am ${age} years old.`;
    }
    return `My name is ${name}.`;
}
intro5_optional_parameter("Alice", 28, "USA");      //output: My name is Alice. I am from USA.
intro5_optional_parameter("Alice", 28);             //output: My name is Alice and I am 28 years old.
intro5_optional_parameter("Alice");                 //output: My name is Alice.



//function with default parameter
function intro6_default_parameter (name: string, age: number = 30): string {
    return `My name is ${name} and I am ${age} years old.`;
}

console.log(intro1_named_function("John", 25));         //output: My name is John and I am 25 years old.
console.log(intro2_function_expression("Jane", 30));    //output: My name is Jane and I am 30 years old.
console.log(intro3_arrow_function("Doe", 35));          //output: My name is Doe and I am 35 years old.
console.log(intro4_implicit_return("Smith", 40));       //output: My name is Smith and I am 40 years old.
console.log(intro5_optional_parameter("Alice"));        //output: My name is Alice.
console.log(intro6_default_parameter("Bob"));           //output: My name is Bob and I am 30 years old.



//function with Custom Parameter Type and Return Type
type Person = {
    name: string;
    age: number;
    country: string;
}

function intro7_custom_parameter_type (person: Person): string {
    return `My name is ${person.name}, I am ${person.age} years old and I am from ${person.country}.`;
}

const person1: Person = {
    name: "Charlie",
    age: 40,
    country: "UK"
};

console.log(intro7_custom_parameter_type(person1));    //output: My name is Charlie, I am 40 years old and I am from UK.

//ex.2 function with Custom Parameter Type and Return Type
enum AgeUnit {
    Years = "years",
    Months = "months",
    Days = "days"
}

type PersonWithAgeUnit = {
    name: string;
    age: number;
    ageUnit: AgeUnit;
}

function intro8_custom_parameter_type (person: PersonWithAgeUnit): string {
    return `My name is ${person.name}, I am ${person.age} ${person.ageUnit} old.`;
}

const person2: PersonWithAgeUnit = {
    name: "David",
    age: 30,
    ageUnit: AgeUnit.Years
};

console.log(intro8_custom_parameter_type(person2));    //output: My name is David, I am 30 years old.

//ex.3 converting years to months 

function convertAgeToMonths(person: PersonWithAgeUnit): PersonWithAgeUnit {
    if (person.ageUnit === AgeUnit.Years) {
       person.age = person.age * 12;
         person.ageUnit = AgeUnit.Months;
    }
    return person;
}

console.log(convertAgeToMonths(person2));   //output: 360






