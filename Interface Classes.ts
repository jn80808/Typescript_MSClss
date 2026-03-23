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


//--------------------------------------------------//
// 112. Introduction to Interfaces in TypeScript
//-------------------------------------------------//

interface Person {
    name : string;
    email : string;
    age: number;
    phone?: number; // Optional property
    greet?: () => void; // Optional method

}

const person : Person = {
    name : "joy",
    email: "joy@gmail.com",
    age: 27
}

//--------------------------------------------------//
// 113. Extending Interfaces in TypeScript
//-------------------------------------------------//

interface User {
    name: string;
    email: string;
    phone: number;
    gender: string;
}

interface UserWithAddres extends User {
    Address: string;
}


const useA: User={
    name: "joy",
    email: "joy@gmail.com",
    phone: 1234567890,
    gender: "female"
}



const userWithAddress: UserWithAddres = {
    name: "joy",
    email: "joy@gmail.com",
    phone: 1234567890,
    gender: "female",
    Address:"123 Main St",
}

//--------------------------------------------------//
// 114. Inheriting from Multiple Interfaces in TypeScript
//-------------------------------------------------//

enum Roles {
    admin = "admin",
    author = "author",
    editor = "editor",
}

interface Role {
    role: Roles;
}

enum PermissionsList {
    read = "read",
    write = "write",
    execute = "execute",
}

interface Permission {
    permission: PermissionsList[];

}

interface UserWithAddresB extends UserB {
    Address: string;
}

interface UserB {
    name: string;
    email: string;
    phone: number;
    gender: string;
}


interface AdminUser extends UserB, Role, Permission {
    numberofUsersReporting: number;

}


const useB: UserB={
    name: "joy",
    email: "joy@gmail.com",
    phone: 1234567890,
    gender: "female"
}



const userWithAddressB: UserWithAddresB = {
    name: "joy",
    email: "joy@gmail.com",
    phone: 1234567890,
    gender: "female",
    Address:"123 Main St",
}

const rob : AdminUser = {
    name: "rob",
    email: "rob@gmail.com",
    phone: 9876543210,
    gender: "male",
    role: Roles.admin,
    permission: [PermissionsList.read, PermissionsList.write],
    numberofUsersReporting: 5,
}

//--------------------------------------------------//
// 115. Interfaces and Generics in TypeScript
//-------------------------------------------------//


interface Automobile {
    type: string;
    
}














