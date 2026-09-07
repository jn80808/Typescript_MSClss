
// ex.1 with prototype
function User1(name, email) {
    this.name = name;    
    this.email = email; 

}

//adding prototype adminuser

AdminUser.prototype = Object.create(User1.prototype); // creates a new object with the prototype of User1 and assigns it to the prototype of AdminUser, allowing AdminUser to inherit methods from User1
                                                      // Object.create(User1.prototype) create a new object with the prototype of User1 and assigns it to the prototype of AdminUser, allowing AdminUser to inherit methods from User1

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


//Adding Inheritance to the User1 constructor function
function AdminUser(name, email, role) { //role is a new property specific to AdminUser, name and email are inherited from User1
    //User1.call(this, name, email); // Inherit properties from User1
    User1.apply(this, [name, email]); // Inherit properties from User1 | "this" point it to itself adminuser and pass the arguments to the user constructor function 
    this.role = role; // Add new property specific to Admin
}




const user1 = new User1('John', 'john@email.com');
const admin = new AdminUser('Admin Joy Ng ', 'adminjoyng@email.com', 'super-admin');

console.log(user1); 
console.log(admin); 



// outout :

// AdminUser {
//     name: 'Admin Joy Ng ',
//     email: 'adminjoyng@email.com',
//     points: 0,
//     role: 'super-admin',
//     peopleReporting: 10
//     [[Prototype]]: User1 
//         addPoint: ƒ ()
//         login: ƒ ()
//         logout: ƒ ()
//         constructor: ƒ User1()
//         [[Prototype]]: Object
// }

// user1
//   │
//   │ [[Prototype]]
//   ↓
// User1.prototype
//   │
//   ├── login()
//   ├── logout()
//   └── addPoint()
//        │
//        ↓
// Object.prototype




// Output layout:


// user1
// User1 {
//     name: 'John',
//     email: 'john@email.com'
// }
//     ↓
// User1.prototype
//     ├── login()
//     ├── logout()
//     └── addPoint()


// admin
// AdminUser {
//     name: 'Admin Joy Ng ',
//     email: 'adminjoyng@email.com',
//     role: 'super-admin'
// }
//     ↓
// AdminUser.prototype
//     ↓
// User1.prototype
//     ├── login()
//     ├── logout()
//     └── addPoint()




// add methods to the AdminUser prototype and called this method update People Reporting
//updatePeopleReportin : new method specific to AdminUser, which updates the people reporting for the admin user. This method is added to the prototype of AdminUser, allowing all instances of AdminUser to access it.
//and this will have 1 parameter:  newNumber
//this will update the reporting property of the admin user so if you want to change the number of people reporting to the admin user, you can call this method and pass in the new number as an argument.
// user this keyword to grab the reporting property and assigner to the new number passed in as an argument : this.peopleReporting = newNumber;

AdminUser.prototype.updatePeopleReporting = function(newNumber) {
    this.peopleReporting = newNumber;
  
}

// output:

// AdminUser {
//     name: 'Admin Joy Ng ',
//     email: 'adminjoyng@email.com',
//     role: 'super-admin'

//     [[Prototype]]: User1 
//         updatePeopleReporting: ƒ ()
//         [[Prototype]]: User1 -- part of user object prototype chain
//             login: ƒ ()
//             logout: ƒ ()
//             addPoint: ƒ ()
//             constructor: ƒ User1()
//             [[Prototype]]: Object
// }


