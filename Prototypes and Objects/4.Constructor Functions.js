// we're going to start looking at the constructor functions in JavaScript.

// All throughout the course.

// Till now we have been calling classes as syntactic sugar in JavaScript.

// And that's because behind the scenes, it's the prototypical inheritance that is working to give us

// the functionality or the sugary syntax of being able to use classes in JavaScript.

// The constructor functions are the very base of understanding the prototypical inheritance in JavaScript.

// If we understand the constructor functions, we can see how things work under the hood.

// To start with, I have some boilerplate code over here, which is just a simple JavaScript class.

// Let's have a look at our user class.




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


// So inside this constructor function name and email are being assigned the values that are being received

// as arguments to this constructor function.

// And there is a third property as well called points.

// And this points property starts with an initial value of zero.


const user1 = new User('John', 'john@example'); //-> creating an instance of the user class

const user2 = new User('Jane', 'jane@example'); //-> creating an instance of the user class

// So we have created two instances of the user class, user1 and user2. 

console.log(user1); //-> output : User { name: 'John', email: 'john@example', points: 0 }
console.log(user2); //-> output : User { name: 'Jane', email: 'jane@example', points: 0 }
user2.addPoint(); //-> output : total points 1




