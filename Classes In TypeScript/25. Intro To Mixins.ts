// theoretical overview of what our mixins, mixins, and TypeScript

// are a pattern to add properties and methods from one class to another.

// They use functions that take a class and return a new class with the combined features.

// Now this definition is a little bit difficult to interpret, but mixins are a great concept to use in

// TypeScript.


// what mixins actually are.

// Mixins are a special kind of functions that take one class as an argument and then return another class

// by adding some features or properties or methods to the previous class that you passed as an argument

// to the mixin function.



//USER ---------------> Mixin-Adds ---------------> User + TimeStamp  
//                      TimeStamp 



// So, for example, there could be a mixin that adds time stamp properties to every class.

// Whenever you pass a class and invoke this mixin function, it will generate a new class which will be

// equal to the user class, but would have additional properties of time stamp added to the user class.

// Mixins are more of a pattern that you can use with TypeScript than being the feature of the TypeScript

// language itself.

// So what is the advantage of using a mixin?

// Why would you take a user class and add certain properties to a class when you can do that by adding

// the property to the base class itself?

// Why would you need a mixin in order to add properties to a user class?




// USER                                  USER + TIME STAMP 
  
        
//                 Mixin- Adds 
//                 TimeStamp 


// BOOK                                   BOOK + TIME STAMP 



// Why would you need a mixin in order to add properties to a user class?

// It so happens that there are some kind of properties that you might want to add to all of the classes,

// or most of your classes.

// For example, here we have a user class as well as a book class, and we might want to add a time stamp

// property to both user as well as the book.

// This is a very good case of a mixin when you have certain properties that need to be added to multiple

// classes.

// In that case, you can create a mixin.

// This gives you the ability of not repeating your code, and then still using the base classes and adding

// those properties as well as methods onto these base classes, and creating new classes which contain

// these additional properties or methods.

// So that's a theoretical overview of what mixins actually do.

// In a nutshell, they are a very simple pattern.

// They take in a class as an argument, add certain properties or methods to that class, and spit out

// or return a new class which contains the additional properties or methods mentioned in the mix in itself.

// We look at a practical implementation of mixins in the next 


