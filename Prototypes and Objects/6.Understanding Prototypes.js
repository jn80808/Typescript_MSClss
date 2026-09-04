// When it comes to inheritance and programming, there are two schools of thought.

// One is the classic inheritance using classes and child classes, and the other one is prototypical inheritance.

// JavaScript uses the concept of prototypical inheritance.

// we will learn how we can attach methods to a prototype of an object

// we would see how adding methods to prototypes helps in inheritance just the way we did it with the classes.

// for this let's focus on learning how we can attach methods to a prototype of an object.



// ex.0 original arrow function only 
function User(name, email) {
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



const user = new User('John', 'john@email.com');

console.log(user); 

// Output :




// ex.1 with prototype
function User1(name, email) {
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

//individual methods are added to the prototype of the object

User1.prototype.login = function() {
    console.log(this.name, 'Has logged in');
}

User1.prototype.logout = function() {
    console.log(this.name, 'Has logged out');
}

User1.prototype.addPoint = function() {
    console.log('total points', this.points);
}




const user1 = new User1('John', 'john@email.com');

console.log(user1); 


// Output:

// User {name: 'John', email: '
// vil: 'john@email.com', p
// oints: 0}
// email: "john@email.com
// name: "John"
// points: 0
//     [[Prototype]] : Object
//          > addPoint: f ()
//          > login: f ()
//          > Logout! f ()
//          > constructor: f User(
//          > [[Prototype]]: Objec