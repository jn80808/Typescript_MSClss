//----------- working with objects

let person ={
    name : "John",
    age : 30,
    email : "john@example.com"

}


// assign type as object 

let car : object = {
    make : "Toyota",
    model : "Camry",
    year : 2020
}

// now typescript understand that the variable 
// car is of type object but it doesn't know 
// the properties of the object and their types 
// so if you try to access the properties of the 
// car object it will give you an error 
// because it doesn't know that the car object 
// has those properties


// at object type hierarchy 
// it can be array , function , constructor 

car = []; // so typescript its not get an error and this is the problem with using object type because it doesn't give you any information about the properties of the object and their types
car = function(){}; // so typescript its not get an error or complain again and this is the problem with using object type because it doesn't give you any information about the properties of the object and their types
//and this is what we dont like a behaivor of this 


// now we can use object literal type to define the shape of the object and its properties and their types
//{} : is an object literal type 
let newcar : {} = {
    brand: "Honda",
    model: "Civic",
    year: 2022
} 

// {} by just putting this is will not dont have difference just putting word of object 
newcar = [];

// so we newcar we = [] array and still typescripts still dont send an complain 


// so the next thing we can do is add properties inside {} of this object literal type to define the shape of the object and its properties and their types

let newCar1 : { brand: string; model: string; year: number } = { // we defined the shape of the object and its properties and their types
    brand: "Honda",
    model: "Civic",
    year: 2022
}

// so now we can test it by assigning an array to newCar1 and see if typescript will give us an error or not
newCar1 = []; 

// so here we can see that typescript give us an error 
// because we defined the shape of the object 
// and its properties and their types and we assigned an array 
// to it which is not compatible with the defined shape of the object 
// and its properties and their types

