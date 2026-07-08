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





