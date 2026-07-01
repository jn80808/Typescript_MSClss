//---------------------------------------------------------------------------
//-------------- Static Properties and Abstract Classes in TypeScript ------
//---------------------------------------------------------------------------

// static properties - What are static properties of a class along with real world
// examples of static properties you already use in JavaScript.


// abstract classes - Everything about Abstract classes and how are they different
// from normal classes along with examples of inheritance and
// their use with child classes.


//---------------------------------------------------------------------------
//-------------- All About Abract Classes in TypeScript ---------------------
//---------------------------------------------------------------------------

// 1. Shared Methods 

//     Definition:
//     A shared method is a regular method defined in a parent (base) class that all child classes can use without rewriting it.

//     Example Idea:
//     If every vehicle can start(), define start() once in the parent class so all vehicles inherit it.


// 2. abstract methods

//     Definition:
//     An abstract method is a method that has no implementation in the abstract class. Every child class must provide its own implementation.

//     Example Idea:
//     A makeSound() method in an Animal class. Every animal (Dog, Cat, Bird) makes a different sound, so each child class implements it.


// 3. constructor methods

//     Definition:
//     A constructor is a special method that runs automatically when an object is created. It is used to initialize properties.

//     Example Idea:
//     When you create a Person, the constructor sets the person's name and age.


// 4.method overriding

//     Definition:
//     Method overriding is when a child class provides its own version of a method that already exists in the parent class.

//     Example Idea:
//     The parent class has a move() method, but the Bird class overrides it to say "Flying" instead of the default behavior.

// 5. abstract properties

//     Definition:
//     An abstract property is a property declared in an abstract class without a value. Every child class must define that property.

//     Example Idea:
//     An abstract class Shape declares a color property, and every shape (Circle, Square) must provide its own color.

// 6. inheritance 


//     Definition:
//     Inheritance allows a child class to reuse the properties and methods of a parent class. It helps avoid repeating code.

//     Example Idea:
//     A Dog class inherits from an Animal class, so it automatically has the animal's properties and methods.



//--------------------------------------------------
// ------------Quick Summary Table -----------------
//--------------------------------------------------

// Concept                         	Simple Definition

// 1.Shared Methods	                    Methods defined in the parent class that all child classes can use.

// 2.Abstract Methods	                Methods with no implementation that child classes must implement.

// 3.Constructor	                    A special method that runs when an object is created to initialize data.

// 4.Method Overriding	                A child class replaces a parent's method with its own version.

// 5.Abstract Properties	            Properties declared in an abstract class that child classes must define.

// 6.Inheritance	                    A child class inherits and reuses the properties and methods of a parent class.




// 1.Shared methods = "Everyone uses this same method."

// 2.Abstract methods = "Everyone must have this method, but each class decides how it works."

// 3.Constructor = "Set up the object when it's created."

// 4.Method overriding = "I want different behavior from my parent."

// 5.Abstract properties = "Every child must provide this property."

// 6.Inheritance = "I can reuse what my parent has."



