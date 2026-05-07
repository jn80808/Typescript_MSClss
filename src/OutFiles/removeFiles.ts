console.log("New Function Folder -> that expected output only .js will generate and this extension file will not be generate .d.ts, .js.map, d.ts.map in dist folder");
interface User1 {
    username : string;
    email : string;
    login() : void;

}


class Admin1 implements User1 {
    constructor (
        public username : string, 
        public email : string, 
        public adminLevel : number) {}

        login() : void {
            console.log("Admin logged in");
        }

}

class Customer1 implements User1 {
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
    public static login(user : User1) : void {
        user.login();
    }
}


const admin: Admin1 = new Admin1("joy", "joy@gmail.com", 1);
const customer: Customer1 = new Customer1("mike", "mike@gmail.com", "laptop, phone", ["laptop", "phone"]);

Auth.login(admin);
Auth.login(customer);

