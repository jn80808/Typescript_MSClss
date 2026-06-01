// let us assume that we have a function called return params.
// This particular function has one parameter that is the param.

function returnParams (param){
    return param;
}

//Right now this function can take in any parameter and return that from within this function.



function returnParams1 (param: any){
    return param;
}


// we have generics.
// Consider generics like variables which are declared before the function declaration, so that TypeScript
// knows that this particular type would be used across the entire function.
// we can define generic by using angle bracket <>


// Between these angle brackets I declare a name for the variable or name for the generic, and I call it "Type".
// This type is the type of value with which this function would be invoked


function returnParams2<Type> (param: Type){
    return param;
}

// So what we are saying over here is with whatever type this function is invoked, is the type of the
// parameter.
// It could be invoked with a string.
// Then the parameter is of string type
// It could be invoked with a number.
// So the parameter is of number type.

//so the <Type> the type inside of the angle braket is acts as variable 


// In the end, the function will always return the same type.

function returnParams3<Type> (param: Type): Type { 
    return param;
}

// That's how this function is working.
// returnParams3 is now is a complete generic function.


// so now lets test it 
returnParams3<String>("String"); // so here if the <String> the value should be string 
returnParams3<String>(12222);   // if the type we put is string and the value we put is number its gets an error 

//so her we can use string as type 
const return1 = returnParams3<String>("12222"); 
console.log(return1);

//we can use number to 

const return2 = returnParams3<Number>(11); 
console.log(return2);


//Generic Type of arrow function () =>
const myParam: <T>(param:T ) => T = (param) => param;

//Generic Type of function expression 
const myparam2 = function <U> (param: U): U { 
    return param;
}


//Generic type in  object 

type ObjectType = {
    myParam:<V>(param: V )=> V ,
    myParam1:<V, X>(param1: V, param2: X ) => V|X //and the return V|X either V or X 
}



//Generic Type with Type Alias 
type MyParam = <K>(param: K) => K;















