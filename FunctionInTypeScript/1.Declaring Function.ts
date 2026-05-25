// Javascript function 


//named function 
function intro1_named_function (name: string, age: number): string  /*output datatype will be declared here so the output type here will be string*/{
    return `My name is ${name} and I am ${age} years old.`;
}


//function expression
const intro2_function_expression = function (name: string, age: number): string {
    return `My name is ${name} and I am ${age} years old.`;
}

//arrow function
const intro3_arrow_function = (name: string, age: number): string | number => {
    return `My name is ${name} and I am ${age} years old.`;
}

//arrow function with implicit return
const intro4_implicit_return = (name: string, age: number): string => `My name is ${name} and I am ${age} years old.`;

//function with optional parameter
function intro5_optional_parameter (name: string, age?: number): string {
    if (age) {
        return `My name is ${name} and I am ${age} years old.`;
    }
    return `My name is ${name}.`;
}

//function with default parameter
function intro6_default_parameter (name: string, age: number = 30): string {
    return `My name is ${name} and I am ${age} years old.`;
}

console.log(intro1_named_function("John", 25));     //output: My name is John and I am 25 years old.
console.log(intro2_function_expression("Jane", 30));    //output: My name is Jane and I am 30 years old.
console.log(intro3_arrow_function("Doe", 35));     //output: My name is Doe and I am 35 years old.
console.log(intro4_implicit_return("Smith", 40));   //output: My name is Smith and I am 40 years old.
console.log(intro5_optional_parameter("Alice"));       //output: My name is Alice.
console.log(intro6_default_parameter("Bob"));         //output: My name is Bob and I am 30 years old.





