//-----Comparing Access Modifiers 

//                     Final Object                    Child Class                 Parent class

// Public                 /                               /                           /
// Protected              X                               /                           /
// Private                X                               X                           /





//---"public" : If you want a property to be accessible outside the class, or when the final instance of the class

// that you create, you need to have no choice.

// You have to make that particular property or method as public.

// And finally, when you don't have a choice, you have to expose that property or method outside of the class.

// In the final instance of the class that you create in the final object of the class you create, then

// you have to make it public.



//---"private" : But start conservative.

// Start by thinking whether this particular property or method is actually needed outside the class or

// not, if that particular property or method is not needed outside the class, make it private.


//---"protected" : use protected only when you need that particular property or method inside a subclass

// or a child class, go ahead and make it protected.




//---------
// So which access modifier to use depends on what you're trying to achieve.

// But what I would suggest is "start" conservative.

// Start by thinking that it has to be a "private" property or a method, and then when you realize that,

// okay, a private property or a method would not solve the purpose, this has to be given access in the

// child class.

// Go ahead, make it protected.

// And then when you realize or when you feel or you know that this particular property would be needed

// as a part of the final instance of the class, go ahead and make it public.

// That's the kind of thought process that you run when you declare access modifiers.


