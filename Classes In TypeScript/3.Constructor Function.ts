//normal class hard coded values

class User {
    name= "Jhon Doe";
    age= 23;
    email= "jhon.doe@example.com";
    greet() {
        console.log("Hello, my name is " + this.name);
    }
}


// We want to have something within this class that lets us pass some "dynamic properties" to this class,
// so that we are able to "assign dynamic values" to name and email fields over here.
// And it turns out that in order to do so, we have something known as a "constructor function".
// A constructor function is a special kind of function within this class itself that is invoked every
// time a new instance of the class is created.
// The "constructor" itself is a "reserved keyword" inside the class, and you define a constructor function
// using the constructor keyword itself.
// So if you want to define a constructor function within this class, you would use a constructor keyword


//class with constructor function for dynamic values

class User1 {
    name: string | undefined
    age: number | undefined

        constructor(name: string, age: number) {
    }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

const user = new User();
const user1 = new User1("John Doe", 23);
const user2 = new User1("Jane Doe", 25);

user.greet(); // Output: Hello, my name is Jhon Doe
user1.greet(); // Output: Hello, my name is John Doe
user2.greet(); // Output: Hello, my name is Jane Doe


// Copyright (c) 2026 Joy Ng
// Author: Joy Ng