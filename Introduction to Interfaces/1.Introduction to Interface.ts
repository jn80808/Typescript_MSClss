// WHAT THE HELL IS AN INTERFACE?

// An Interface is a Binding Contract Between Two Or
// More Components of an Application.


// An interface is like a contract between two or more parts of an application. It defines what each part must provide so they can work together.

// One easy way to understand interfaces is through hardware. A laptop has a USB port, which is a USB interface. Any device that follows the USB standard—such as a phone, mouse, or keyboard—can be connected to it.

// The important point is that these devices must follow the same USB contract. Once connected, they work automatically. As a user, you don’t need to know how the device communicates internally with the laptop. You only need to know that both support the USB interface, so they are compatible.

// The same idea applies to software applications. An interface specifies the methods, properties, or behaviors that a component must implement. As long as different components follow the same interface, they can interact correctly without needing to know each other’s internal implementation.


// In this example:


//                                                        ------> PHONE
//                                                        |
//          ---------------------->                     |  
// LAPTOP                               USB INTERFACE   --------> MOUSE
//          <----------------------                     |
//                                                        |
//                                                        ------> KEYBOARD 


// - The laptop communicates through the USB interface.
// - Any device (phone, mouse, keyboard) can connect as long as it follows
//   the USB standard (the contract).
// - The laptop does not need to know how each device works internally.
// - It only expects every connected device to follow the USB interface.

// The same concept applies in TypeScript:

// - An interface defines a contract.
// - Any class or object that implements the interface must provide all
//   the required properties and methods.
// - Code using the interface doesn't care about the internal implementation,
//   only that the contract is followed.


//------------------APPLICATION INTERFACE EXAMPLE

//Think of a User interface as a contract between users and the application.


//                                                        ------> ADMIN
//                                                        |
//          ---------------------->                     |  
// APPLICATION                        USER INTERFACE   --------> CUSTOMER
//          <----------------------                     |
//                                                        |
//                                                        ------> GUEST



// Key Points:
// - The User interface defines what every user must have.
// - Admin, Customer, and Guest can have different behaviors.
// - For example:
//     • Admin can manage users.
//     • Customer can purchase products.
//     • Guest can only browse.
// - Even though their functionality differs, they all follow the same
//   User interface (contract).
// - Because they follow the contract, they can interact with the rest
//   of the application without issues.
// - Components like Sign Up and Login only depend on the User interface,
//   not on a specific user type.


// SIGNUP <---------                         -----------> ADMIN
//                 |                        |
//                 |                       |
//                 ------ USER INTERFACE   -----------> CUSTOMER             
//                 |                       |
//                 |                        |
// LOGIN <---------                          ------------> GUEST 



// In TypeScript, an interface is declared using the `interface` keyword.

// Example:

// interface User {
//     id: number;
//     name: string;
//     login(): void;
// }

// Any class or object implementing the User interface must provide
// the required properties and methods.


interface User {
    userName: string;
    email: string;
    login(): void;
}

class Admin implements User { //Implement User Interface 
    constructor(
        public userName: string,    // properties declare in user interface Line 97
        public email: string,       // properties declare in user interface Line 97
        public adminLevel: number   //additional properties for admin class , unique properties for admin class  
    ) {}

    login(): void {  //implement the log in method from the User Interface Line 97 So you can see TypeScript is creating this binding contract. Whenever a new user class is declared, can be an admin class, can be a customer class.
                    //So whenever a developer declares these kind of classes, TypeScript will make sure that all the functionality, all the properties of the user interface are implemented in that particular user class.
        
     console.log("Admin is now logged in");

    }
}

//----------------Create Customer class that implement the User Interface from line 97
// This customer class can have its own methods as well as properties which are different from admin,
// but the only condition is that it must adhere to the user interface contract. 

class Customer implements User {
    constructor(
        public userName: string,
        public email: string
    ) {}

    login(): void { //implement the login method in the User Interface 
        console.log("Customer is now logged in");
    }
}

// Example
const admin = new Admin("Joy", "joy@example.com", 1);
admin.login();

const customer = new Customer("John", "john@example.com");
customer.login();


//----------------- new class 
// So this is a simple method where it just grabs the user and triggers or invokes the login method on the user object.
// Now using this we can create different types of users 


class Auth {
    public static login(user: User) {
    user.login();
    }
}


const admin1: Admin = new Admin("Alice", "alice@gmail.com", 1)
Auth.login(admin1)

const customerJoy:Customer = new Customer("Joy","joy@gmail.com")
Auth.login(customerJoy)

// Now you will see customer is a different class altogether.

// Admin is a different class altogether, but auth is able to work both with admin as well as with customer,

// just because admin and customer adhere or implement the same interface.

