

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




//--- function user

// ex.1 without using "this" keyword, we can create a constructor function, but we will not be able to store the values in the new object that is being created.
function User3(name, email) {}

const user3 = new User3('John', 'john@email.com');

console.log(user3); //-> output : User3 {}
                    // its empty object right now 
                    // receives the values, but doesn't store them.
                    //never store them in the object.
                    //no properties created in the object, because we haven't assigned them to the object using "this" keyword.


// ex.2 with using "this" keyword, we can create a constructor function, and we will be able to store the values in the new object that is being created.
function User4(name, email) {
    this.name = name;    //receives the values and stores them in the new object.
    this.email = email; //receives the values and stores them in the new object.
}

const user4 = new User4('John', 'john@email.com');

console.log(user4); //-> output : User4 { name: 'John', email: 'john@email.com' }


// 1. The `new` keyword creates a new empty object when the constructor is invoked.
// 2. The `this` keyword is then used to assign values to that new object.






// ex.3 with method in constructor function
function User5(name, email) {
    this.name = name;    
    this.email = email; 

    this.login=()=>{}

    this. logout=()=>{}

    this. addPoint=()=>{}

}

const user5 = new User5('John', 'john@email.com');

console.log(user5); //-> output : User5 { name: 'John', email: 'john@email.com' }





// ex.4 with method in constructor function
function User6(name, email) {
    this.name = name;    
    this.email = email; 

    this.login=()=>{
        console.log(this.name, 'Has logged in');
    }

    this. logout=()=>{
        console.log(this.name, 'Has logged out');
    }

    this. addPoint=()=>{
        console.log('total points', this.points);
    }

}

const user6 = new User6('John', 'john@email.com');

console.log(user6); //-> output : User6 { name: 'John', email: 'john@email.com' }




