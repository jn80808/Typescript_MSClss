//Decorator - A decorator in TypeScript is special kind of declaration that can modify classes,methods,properties, 
// or parameters,enhancing their behaviour or metadata at design time.



// This section of the course focuses on **decorators**.

// There are actually two sections in this course that cover decorators. This particular section focuses on **TypeScript Stage 3 decorators**. Later in the course, we’ll have another section covering **TypeScript experimental decorators**, which are based on the earlier **Stage 2 decorator proposal**.

// We’ll explore the differences between these two types of decorators in more detail, including why the newer approach was introduced and why these changes were necessary.

// But first, let’s start with the basics: **What exactly is a decorator?**

// Decorators are one of the important features of TypeScript and are a feature that historically helped distinguish TypeScript from JavaScript.

// JavaScript itself now has a proposal for adding decorators to the language. However, TypeScript has supported decorators for a long time, even before they became part of the JavaScript standardization process.


//Decorators only work with a class or members of a class 

// //class property 
// class User1{
//     @DoSomething
//     name: string;
// }

// //class propeties 
// class User2{
//     constructor (
//          @DoSomething public name: string
//     ){}
// }

// //class method 
// class User {
//     @DoSomething
//     signIn(){}
// }

// //accessors and mutators 
// class User {
//     @DoSomething
//     public get fullName(){}
// }




// ============================================================
// DECORATORS
// ============================================================
//
// A decorator in TypeScript is a special kind of function
// that can be used to modify or enhance a class or its members.
//
// Decorators are written using the @ symbol:
//
//     @doSomething
//
// A decorator can be used with:
//     - Classes
//     - Properties
//     - Methods
//     - Getters and setters (accessors/mutators)
//
// In the older decorator system, decorators could also be
// applied to method and constructor parameters.
//
// ------------------------------------------------------------
// HOW A DECORATOR WORKS
// ------------------------------------------------------------
//
// A decorator is essentially a function:
//
//     function doSomething() {
//         // decorator logic
//     }
//
// To use it as a class decorator:
//
//     @doSomething
//     class User {
//     }
//
// The @doSomething syntax tells TypeScript that the
// doSomething decorator should be applied to the User class.
//
// Depending on where the decorator is used, the decorator
// receives different parameters and can use information about
// the class or class member to modify or enhance its behavior.
//
// ------------------------------------------------------------
// WHERE CAN DECORATORS BE USED?
// ------------------------------------------------------------
//
// 1. CLASS DECORATOR
//
//     @doSomething
//     class User {
//     }
//
// The decorator is applied to the entire class.
//
//
// 2. PROPERTY DECORATOR
//
//     class User {
//
//         @doSomething
//         name: string;
//
//     }
//
// The decorator is applied to a property of the class.
//
//
// 3. METHOD DECORATOR
//
//     class User {
//
//         @doSomething
//         signIn() {
//         }
//
//     }
//
// The decorator is applied to a method of the class.
//
//
// 4. GETTER / SETTER DECORATOR
//
// Decorators can also be applied to accessors and mutators:
//
//     class User {
//
//         @doSomething
//         get name() {
//             return this._name;
//         }
//
//         @doSomething
//         set name(value: string) {
//             this._name = value;
//         }
//
//     }
//
// ------------------------------------------------------------
// STAGE 2 VS STAGE 3 DECORATORS
// ------------------------------------------------------------
//
// TypeScript has two important decorator systems:
//
//     1. Stage 2 / Experimental Decorators
//     2. Stage 3 Decorators
//
// STAGE 2 DECORATORS
// ------------------
//
// The older decorator implementation is commonly called
// "experimental decorators".
//
// These decorators were widely used with TypeScript 4.x
// and earlier versions.
//
// STAGE 3 DECORATORS
// ------------------
//
// TypeScript 5 introduced support for the newer decorator
// proposal, commonly referred to as Stage 3 decorators.
//
// The newer decorators were introduced to align TypeScript
// more closely with the ECMAScript / JavaScript decorator
// proposal.
//
// ------------------------------------------------------------
// WHY ARE THERE TWO DECORATOR SYSTEMS?
// ------------------------------------------------------------
//
// Decorators were already widely used in the TypeScript
// ecosystem before JavaScript standardized its own decorator
// proposal.
//
// Frameworks such as Angular and NestJS have historically
// relied heavily on the older TypeScript decorator system.
//
// The older decorator system supported features such as:
//     - Parameter decorators
//     - Metadata / reflection mechanisms
//
// Because many existing applications and frameworks depended
// on these features, TypeScript continues to support the older
// decorator behavior through compiler options.
//
// ------------------------------------------------------------
// TSCONFIG SETTINGS
// ------------------------------------------------------------
//
// The older decorator system can be enabled using:
//
//     "experimentalDecorators": true
//
// The commonly used metadata option is:
//
//     "emitDecoratorMetadata": true
//
// Example:
//
//     {
//         "compilerOptions": {
//             "experimentalDecorators": true,
//             "emitDecoratorMetadata": true
//         }
//     }
//
// IMPORTANT:
//
// Simply using TypeScript 5 does NOT necessarily mean that
// you are using Stage 3 decorators.
//
// Always check your tsconfig.json.
//
// If "experimentalDecorators" is enabled, your project is
// using the older experimental decorator behavior.
//
// ------------------------------------------------------------
// PARAMETER DECORATORS
// ------------------------------------------------------------
//
// One of the major differences between Stage 2 and Stage 3
// decorators is parameter decorators.
//
// Stage 2 decorators could be applied to method parameters:
//
//     class User {
//
//         signIn(@doSomething username: string) {
//         }
//
//     }
//
// They could also be used with constructor parameters:
//
//     class User {
//
//         constructor(
//             @doSomething name: string
//         ) {
//         }
//
//     }
//
// Stage 3 decorators do NOT support parameter decorators.
//
// This is an important difference because frameworks such as
// Angular and NestJS have historically made use of parameter
// decorators.
//
// ------------------------------------------------------------
// KEY TAKEAWAYS
// ------------------------------------------------------------
//
// 1. A decorator is a special function used to modify or
//    enhance a class or its members.
//
// 2. Decorators are written using the @ symbol.
//
// 3. Decorators can be used with classes, properties, methods,
//    and accessors, depending on the decorator system.
//
// 4. TypeScript has an older Stage 2 / experimental decorator
//    system and a newer Stage 3 decorator system.
//
// 5. TypeScript 5 introduced the newer Stage 3 decorator
//    implementation.
//
// 6. Stage 2 decorators support parameter decorators.
//
// 7. Stage 3 decorators do NOT support parameter decorators.
//
// 8. The "experimentalDecorators" setting in tsconfig.json
//    is important when determining which decorator behavior
//    your project is using.
//
// 9. Angular and NestJS have historically relied heavily on
//    the older decorator system.
//
// 10. When working with decorators, always check your
//     TypeScript version and tsconfig.json configuration.
//
// ============================================================
// END OF DECORATORS INTRODUCTION
// ============================================================

