//create a decorator . A decorator is nothing but a function.

function methodLogger1(originalMethod: any, context:any){
    console.log(originalMethod);
     console.log(context);
}

function methodLogger2(target: any, context:any){
    console.log(target);
}


class Person {
  constructor(public name: string) {}

  @methodLogger1  //calling the decorator now 
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}


//Output: 
// [Function: greet]
// {
//   kind: "method",
//   name: "greet",
//   static: false,
//   private: false,
//   access: {
//     has: [Function],
//     get: [Function],
//     set: [Function]
//   },
//   metadata: undefined
// }




// {
//   kind: "method",
//   // What kind of decorator is methodLogger?
//   // methodLogger is a method decorator because it is
//   // being applied to a method (greet).

//   name: "greet",
//   // The name of the method that is being decorated.

//   static: false,
//   // The method is not static.
//   // It belongs to an instance of the Person class.

//   private: false,
//   // The method is not private.
//   // It can be accessed normally through a Person object.

//   access: {
//     has: ...,
//     get: ...,
//     set: ...
//   },
//   // Provides access-related functions for the decorated method.

//   metadata: undefined
//   // No metadata is associated with this decorator in this example.
// }



kind: "method"
// methodLogger is a method decorator because
// it is applied to a method.

name: "greet"
// The name of the decorated method.

static: false
// greet() is not a static method.

private: false
// greet() is not a private method.

metadata: undefined
// No metadata is provided in this example.



// IMPORTANT TAKEAWAY ABOUT DECORATORS
//
// The moment TypeScript is compiled (transpiled) into JavaScript,
// decorators are invoked.
//
// Decorators are a TypeScript feature that can modify or change
// the code during the compilation/transpilation process.
//
// Decorators themselves are not simply carried forward as decorators
// into the resulting JavaScript. Instead, they are executed during
// the transformation of the TypeScript code.
//
// Decorators are invoked once and only once during this process.
//
// They are NOT invoked every time an object is created or every time
// the decorated method is called.
//
// Example:
//
// @methodLogger1
// greet() {
//   ...
// }
//
// The method decorator is invoked when the class is being processed,
// not every time greet() is executed.
//
// IMPORTANT:
// Decorators are executed during class definition/initialization
// according to the JavaScript decorator semantics. They are not
// called each time the decorated method runs.


// --------------------------------------------------
// CLASS DECORATOR
// --------------------------------------------------

// Just like we can create a method decorator,
// we can also create a class decorator.
//
// A class decorator is applied to the entire class.
//
// Example:
//
// @classDecorator
// class Person {
//   ...
// }



//Method decorator 
function methodLoggers(originalMethod: any, context:any){
    console.log(originalMethod);
     console.log(context);
}

//classdecorator 
function classDecorators(target: any, context: any) {
  console.log(target);
  console.log(context);
}


//------ class Part Decorators ------
@classDecorators //calling the decorator now for class Part Decorators 
class Persons {
  constructor(public name: string) {}


  //method 
  @methodLogger1  //calling the decorator for Method Part of Decorators
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

}


// Output :
// Note: with standard TypeScript decorators, the method decorator is evaluated before the class decorator

// 1. @methodLoggers -> The method decorator needs to process the greet() method first:
//        ↓
// 2. @classDecorators -> Then the class decorator processes the completed class:



// METHOD DECORATOR
// │
// ├── originalMethod → greet()
// └── context
//     ├── kind: "method"
//     ├── name: "greet"
//     ├── static: false
//     ├── private: false
//     └── metadata: undefined


// CLASS DECORATOR
// │
// ├── target → Person class
// └── context
//     ├── kind: "class"
//     ├── name: "Person"
//     ├── metadata: undefined
//     └── addInitializer: function

// //Actual output 
// app.js:41  ƒ greet() { ... }

// app.js:42  {
//               kind: "method",
//               name: "greet",
//               static: false,
//               private: false,
//               access: { ... },
//               metadata: undefined
//             }

// app.js:46  class Person { ... }

// app.js:47  {
//               kind: "class",
//               name: "Person",
//               metadata: undefined,
//               addInitializer: ƒ
//             }
// }




