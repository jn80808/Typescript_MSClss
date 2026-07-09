//A class is template or blueprint for creating objects. 
// It defines the properties and methods that an object created from the class will have. 
// In TypeScript, we can define a class using the class keyword followed by the name of the class and a pair of curly braces {}. 
// Inside the curly braces, we can define the properties and methods of the class.


let user1 = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

let user2 = {
    name: "Jane",
    age: 25,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// now  we have two objects user1 and user2 that have the same properties and methods.
// this is not efficient and can lead to code duplication.
// we can use a class to define a template for creating user objects.

class User {
        constructor(
            public name: string, 
            public age: number) {}
    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

let user3 = new User("John", 30);
let user4 = new User("Jane", 25);
user3.greet(); // Output: Hello, my name is John
user4.greet(); // Output: Hello, my name is Jane

// In this example, we defined a class called User with two properties name and age, and a method greet.
// We then created two instances of the User class, user3 and user4, and called the greet method on each instance. 
// This approach is more efficient and avoids code duplication compared to creating separate objects for each user.


    

// Copyright (c) 2026 Joy Ng
// Author: Joy Ng
