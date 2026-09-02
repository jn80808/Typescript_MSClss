

class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.points = 0;
    }

    login() {
        console.log(this.name, 'Has logged in');
    }

    logout() {
        console.log(this.name, 'Has logged out');
    }

    addPoint(){

        this.points++;

        console.log('total points', this.points);
    }

}




const user1 = new User('John', 'john@example'); //-> creating an instance of the user class

const user2 = new User('Jane', 'jane@example'); //-> creating an instance of the user class

// So we have created two instances of the user class, user1 and user2. 

console.log(user1); //-> output : User { name: 'John', email: 'john@example', points: 0 }
console.log(user2); //-> output : User { name: 'Jane', email: 'jane@example', points: 0 }
user2.addPoint(); //-> output : total points 1



// User
// │
// ├── name: "John"
// ├── email: "john@email.com"
// ├── points: 0
// │
// └── [[Prototype]]
//     ├── addPoint()
//     ├── constructor
//     ├── login()
//     └── logout()


// User {
//     name: "John",
//     email: "john@email.com",
//     points: 0
// }

//         |
//         |
//         |
//         v

// User {
//     name: "John",
//     email: "john@email.com",
//     points: 0,
//     [[Prototype]]: Object
// }


//         |
//         |
//         |
//         v

// [[Prototype]]: Object
//     addPoint: ƒ addPoint()
//     constructor: class User
//     login: ƒ login()
//     logout: ƒ logout()
//     [[Prototype]]: Object

    
//         |
//         |
//         |
//         v

// User {
//     name: "John",
//     email: "john@email.com",
//     points: 0,
//     [[Prototype]]: Object
// }
// [[Prototype]]: Object
//     addPoint: ƒ addPoint()
//     constructor: class User
//     login: ƒ login()
//     logout: ƒ logout()
//     [[Prototype]]: Object

// Q : why the method and constructor in under in prototype ?
// A : JavaScript puts class methods on the prototype so that all objects created from the class can share the same method instead of creating a separate copy of the method for every object.

// -- > NORMAL Expectation : 

// user1
// ├── name
// ├── email
// ├── points
// ├── login()
// ├── logout()
// └── addPoint()

// user2
// ├── name
// ├── email
// ├── points
// ├── login()
// ├── logout()
// └── addPoint()

// But that would be wasteful.

// Instead, JavaScript does something more efficient:


// user1
// ├── name: "John"
// ├── email: "john@email.com"
// └── points: 0
//         │
//         ↓
//     Prototype
//     ├── login()
//     ├── logout()
//     └── addPoint()


// user2
// ├── name: "Mary"
// ├── email: "mary@email.com"
// └── points: 0
//         │
//         ↓
//     Prototype
//     ├── login()
//     ├── logout()
//     └── addPoint()


// Both objects share the same methods through the prototype.


// One important correction

// The constructor function does NOT actually run from the prototype every time you use the object.

// When you do:

// const user1 = new User("John", "john@email.com");

// the constructor runs and creates/initializes:

// user1
// ├── name: "John"
// ├── email: "john@email.com"
// └── points: 0

// The methods are then available through:

// user1
//    ↓
// [[Prototype]]
//    ↓
// User.prototype

// Why use a prototype?

// Imagine you create 10,000 users.

// You don't want 10,000 copies of:

// login() { ... }
// logout() { ... }
// addPoint() { ... }

// Instead, all 10,000 users can share the same methods.

//              User.prototype
//             /      |       \
//            ↓       ↓        ↓
//         user1    user2    user3
//         John     Mary     Peter

// Each user has their own data:

// user1 → name: John
// user2 → name: Mary
// user3 → name: Peter

// But they share the same methods:

//        login()
//        logout()
//        addPoint()

// That's one of the main reasons JavaScript classes use prototypes behind the scenes.




