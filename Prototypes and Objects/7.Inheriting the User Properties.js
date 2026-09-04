
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
