// Access modifiers do not exist in JavaScript, but exist only in the TypeScript world.

// Access modifiers.

// As the name suggests, you can use TypeScript to control whether certain methods or properties are visible

// to code outside the class.

// When we start talking about inheritance, these become very important.

// Access modifiers let you control whether the child class or whether the instance of a class would have

// access to a specific property of the class or the method of the class.

// To give you a theoretical overview and let you know what types of access modifiers exist, there are

// three types of access modifiers.


// 1. public 
// 2. protect 
// 3. private 


// --- definition 

// 1. public - The public is the most liberal access modifier, so any property of a class or a method of a class which

// has public assigned as the access modifier, that particular property is publicly accessible within

// the class, within child classes, as well as within the instance of the class.

// So in all three places you would get access to these kind of properties which have public as the access

// modifier.

// 2. protect - The protected access modifier protects the property and makes the property of a class only available

// within the class, and within the child class of the class.

// So once a property is marked as protected, it is not available in the instance of a class.

// 3. private - The private is the strictest form of access modifier, any property or method which is marked as a private

// method or a property is only available within the class.

// These kind of properties or methods are not available to you outside of the class, not even inside

// child classes.



//----Let's look at how access modifiers are assigned to properties.
//Access modifiers are very simple to use, but a very powerful feature of TypeScript.


class User {
    public name: string;
    private email: string;
    protected phone : number; 
}



//-----Comparing Access Modifiers 

//                     Final Object                    Child Class                 Parent class

// Public                 /                               /                           /
// Protected              X                               /                           /
// Private                X                               X                           /


// Copyright (c) 2026 Joy Ng
// Author: Joy Ng
// email: joygng0088@gmail.com
