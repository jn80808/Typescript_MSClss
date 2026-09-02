//                                 Understanding the `this' keyword and
//                                         constructor functions

// `this` keyword - We take a deep dive and understand what is this keyword in JavaScript.

// constructor functions - In this section we understand what are constructor functions in JavaScript 
//                         which are the core building blocks of the prototypical inheritance.



// ============================================================
// JavaScript Prototypes & Objects
// ============================================================
//
// This module introduces objects, prototypes, and prototypical
// inheritance in JavaScript.
//
// ============================================================


// ------------------------------------------------------------
// 1. `this` Keyword
// ------------------------------------------------------------
//
// - Understand what `this` means in JavaScript.
// - `this` refers to different things depending on how a
//   function is called.
// - Study examples because `this` can be confusing.
//
// Key things to understand:
// - `this` inside an object method
// - `this` inside a regular function
// - `this` inside an arrow function
// - `this` inside constructor functions
// - `this` with `call()`, `apply()`, and `bind()`


// ------------------------------------------------------------
// 2. Constructor Functions
// ------------------------------------------------------------
//
// - Learn how constructor functions work.
// - Constructor functions are used to create multiple objects
//   with the same structure and behavior.
// - They are an important building block for understanding
//   prototypical inheritance.
//
// Example:
//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// const person1 = new Person("John", 25);
//
// When using `new`:
// 1. A new object is created.
// 2. `this` refers to the new object.
// 3. The object's prototype is linked to Person.prototype.
// 4. The new object is returned.
//
//
// ------------------------------------------------------------
// 3. Prototypical Inheritance
// ------------------------------------------------------------
//
// Understand:
//
// - What a prototype is.
// - What prototypical inheritance means.
// - How objects can inherit properties and methods from
//   other objects.
//
// Important concept:
//
// Every JavaScript object has an internal link to another
// object called its prototype.
//
// If JavaScript cannot find a property or method on the object,
// it looks for it on the object's prototype.
//
// This continues up the prototype chain until the property is
// found or the chain ends with null.
//
//
// Example:
//
// const person = {
//     greet() {
//         console.log("Hello!");
//     }
// };
//
// const john = Object.create(person);
//
// john.greet();
//
// `john` does not have its own `greet()` method,
// but it can access the method from its prototype.
//
//
// ------------------------------------------------------------
// 4. Property Descriptors
// ------------------------------------------------------------
//
// - Learn what property descriptors are.
// - Understand how property descriptors control the behavior
//   of object properties.
//
// Important descriptor properties:
//
// - value
// - writable
// - enumerable
// - configurable
//
// Example:
//
// const person = {};
//
// Object.defineProperty(person, "name", {
//     value: "John",
//     writable: false,
//     enumerable: true,
//     configurable: false
// });
//
// `writable: false` means the property cannot be changed.
//
//
// ------------------------------------------------------------
// 5. JavaScript Classes
// ------------------------------------------------------------
//
// - Learn how classes work in JavaScript.
// - Understand that JavaScript classes use prototypical
//   inheritance underneath.
// - Classes provide a simpler syntax for working with the
//   prototype-based system.
//
// Classes are essentially syntactic sugar over JavaScript's
// existing prototype-based inheritance system.
//
// Example:
//
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//
//     greet() {
//         console.log(`Hello, ${this.name}`);
//     }
// }
//
// const john = new Person("John");
//
// The `greet()` method is stored on Person.prototype,
// rather than being recreated separately for every object.
//
//
// ============================================================
// Key Takeaways
// ============================================================
//
// 1. JavaScript uses prototype-based inheritance.
//
// 2. Objects can inherit properties and methods from their
//    prototypes.
//
// 3. Constructor functions are one way to create objects
//    that share the same prototype.
//
// 4. The `new` keyword creates a new object and connects it
//    to the constructor's prototype.
//
// 5. Property descriptors control how object properties behave.
//
// 6. JavaScript classes are syntactic sugar over the
//    prototype-based inheritance system.
//
// 7. Understanding `this`, prototypes, and constructor
//    functions makes JavaScript classes much easier to understand.


