//Always remember, class itself is not an object.
// Class is an entity that helps you create objects.
// Class is a blueprint of the final object that would be created using this particular class itself.
// Now the question is how do you define the properties of a class?
// In order to define the properties of the class, we can simply declare the name of the property.


class User {
    name: string | undefined
    age: number | undefined
    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

// In the above code, we have defined a class called User
// We have declared two properties name and age, and a method greet.
// Now we can create an "instance" of the User class using the "new" keyword.

let user1 = new User();
user1.name = "John";
user1.age = 30;
user1.greet(); // Output: Hello, my name is John

// We can also create another instance of the User class.
let user2 = new User();
user2.name = "Jane";
user2.age = 25;
user2.greet(); // Output: Hello, my name is Jane






