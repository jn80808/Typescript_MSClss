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
