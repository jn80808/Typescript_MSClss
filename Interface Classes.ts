interface User {
    username : string;
    email : string;
    login() : void;

}


class Admin implements User {
    constructor (
        public username : string, 
        public email : string, 
        public adminLevel : number) {}

        login() : void {
            console.log("Admin logged in");
        }

}

class Customer implements User {
    constructor (
        public username : string,
        public email : string,
        public purchaseHistory : string,
        public purchaseHistory1 : string [] ) {}

        login() : void {
            console.log("Customer logged in");
        }
    }



class Auth {
    public static login(user : User) : void {
        user.login();
    }
}


const admin: Admin = new Admin("joy", "joy@gmail.com", 1);
const customer: Customer = new Customer("mike", "mike@gmail.com", "laptop, phone", ["laptop", "phone"]);

Auth.login(admin);
Auth.login(customer);


