

// Inheritance happens when one class inherits the properties of another class.
// In TypeScript, you can make one class inherit the properties of another.
// The class that inherits the properties of another class becomes the child class, whereas the class
// from which it inherits becomes the parent class.
// In TypeScript, one class can inherit the properties of only one another Class.
// You do not have the concept of multiple inheritance, as it is possible in some of the programming languages.
// In TypeScript, one class can only inherit the properties of another class 


 //what you need to know is that one class can inherit only one another class and no more.

class User1 {
    name: string | undefined;
    age: number | undefined;
    readonly email: string | undefined; //adding ReadOnly 
    lastname?: string;      

        constructor(name: string, age: number,email: string, lastname?: string) { 
            this.name = name;
            this.age = age;
            this.email = email;
            this.lastname = lastname;  
        }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}



const user4 : User1 = new User1("Joy",28, "joyng@gmail.com")
const user5 : User1 = new User1("Joy",28, "joyng@gmail.com","Ng")

//---- inheritance ----//

class Admin extends User1{}

//using extends <className> 
// This is how you create inheritance.
// Over here you are telling TypeScript that I want admin to extend the user class, which means admin
// should have all the properties that are present inside the user class.
// By just using the extends keyword, TypeScript makes sure that all the properties of the user class
// do exist inside the admin class also.
// Now additionally, admin class can have its own properties as well.
// So lets say this admin class has another property called "isAdmin", and this is a kind of a boolean
// property and I want to assign it a default value of true because whichever user is created using this
// admin class is supposed to be an admin, and hence his admin should always be true in this case.

class Admin1 extends User1{
    isAdmin: boolean = true;
}


//const <varname> : datatype = new <classname("valuetopass in class")> 
const admin: Admin1 = new Admin1("Joy",28,"joyng@gmail.com")

console.log(user4) 
// Output: 
// User4 {
//   name: 'Joy',
//   age: 28,
//   email: 'joyng@gmail.com',
//   lastname: undefined
// }

console.log(admin)
// Output: 
// Admin1 {
//   name: 'Joy',
//   age: 28,
//   email: 'joyng@gmail.com',
//   lastname: undefined,
//   isAdmin: true
// }

//Admin1 Class : Child Class 
//User1 : Parent Class 

// Copyright (c) 2026 Joy Ng
// Author: Joy Ng
// email: joygng0088@gmail.com