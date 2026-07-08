/*
INTERFACES IN TYPESCRIPT

Interfaces are one of the most important features of Object-Oriented Programming (OOP).

If you've used languages like Java or C#, you've probably worked with interfaces before.

The most important thing to remember is:

👉 An interface is a contract.

What does a contract mean?
- It defines the structure of an object or class before it is created.
- It specifies what properties and methods must exist.
- It does NOT provide the implementation—only the blueprint.

For example, if we want to create a Person object, we can first define
its structure using an interface.

TypeScript uses the `interface` keyword to declare an interface.

Example:

interface Person {
    name: string;
    age: number;
    greet(): void;
}

Now any object or class that follows the Person interface must have:
- a `name` property
- an `age` property
- a `greet()` method

Example object:

const person: Person = {
    name: "Joy",
    age: 25,
    greet() {
        console.log("Hello!");
    }
};

Summary:
- Interface = Contract
- Defines the required structure of an object or class
- Declared using the `interface` keyword
- Helps make code consistent, reusable, and easier to maintain
*/


//---------------------- in c#
// Controller  --> Class ✅
// Model       --> Class ❌ (not Interface)
// Interface   --> Contract


// Interface (Contract)
// public interface IUser
// {
//     string UserName { get; set; }
//     void Login();
// }

// A better way to think about it
// Model = the actual data/object (e.g., User, Product, Order)
// Interface = the contract that says what a class must have
// Class = the implementation of that contract
// Controller = contains the application/business logic and handles requests



//----------------------  In TypeScript

interface User {
    userName: string;
    login(): void;
}

class Admin implements User {
    userName: string;

    constructor(userName: string) {
        this.userName = userName;
    }

    login() {
        console.log("Admin logged in");
    }
}


// Here:

// User → Interface (Contract)
// Admin → Class (Implementation)
// Real-world analogy

// Think of a job description:

// Interface = Job description (must know C#, SQL, Git)
// Class (Employee) = The actual employee who fulfills that job description.
// Different employees (Admin, Customer, Guest) can all satisfy the same job description in different ways.

// So your understanding should be adjusted to:

// Model      = Class (data/entity)
// Interface  = Contract/Blueprint
// Controller = Class (handles requests)

// This is the standard way interfaces are used in both C# and TypeScript.












