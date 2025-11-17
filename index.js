//-------------------------------------//
// 75.Creating First Class and Instance
//-------------------------------------//
var User = /** @class */ (function () {
    function User() {
        this.name = "Jhon";
        this.email = "jj@gmail.com";
    }
    User.prototype.greet = function () {
        return "hello jhon";
    };
    return User;
}());
var user = new User();
console.log(user);
//------------------------//
// 76.Constructor Function
//------------------------//
var User1 = /** @class */ (function () {
    function User1(name, email) {
        this.name = "Jhon";
        this.email = "jj@gmail.com";
    }
    User1.prototype.greet = function () {
        return "hello jhon";
    };
    return User1;
}());
var user1 = new User();
var user2 = new User1("JJ", "joyng808@gmail.com");
console.log(user);
