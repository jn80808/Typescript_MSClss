//type casting in typescript


//-------------<> keyword for type casting
//type casting is a way to tell the compiler to treat a value as a different type. 
// It can be useful when you know more about the type of a value than the compiler does,
// or when you want to override the compiler's type inference.

//since typescript if you put firtsname type script automatically infers it as a string 
//but if you want to treat it as any type you can use type casting by using <> and inside of <> put the type that you want to cast to 

//so here if you hover the variable firstNameNoCasting it will show that it is of type string 
// but if you hover the variable firstNameWithCasting it will show that it is of type any 
// because we casted it to any type 


let firstNameNoCasting  = "John";
let firstNameWithCasting = <any>"John";


//-------------as keyword for type casting
// another way to do type casting is by using the "as" keyword
let firstNameWithCastingAs = "John" as any;



//so ex. we have a API Endport that return a user object 

let userData ={
    name: "Alice",
    age: 30,
    email: "alice@example.com"
}

//and you have a function that fecth user data from the API and return it as a User type

function fetchUserData() {
    return userData;
}

const fetchedUser = fetchUserData() ; //casting the returned value to User type

// now typescript understand that the fetchedUser is of type User and you can access its properties and methods without any error


//now we can add a type annotation to the function return type to make it more clear and avoid any confusion

type UserAnnotation = {
    name: string;
    age: number;
    email: string;
}

function fetchUserData1() {
    return userData as UserAnnotation; //casting the returned value to User type
}

const fetchedUser1 = fetchUserData1() ; //casting the returned value to User type



