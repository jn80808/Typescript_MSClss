
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