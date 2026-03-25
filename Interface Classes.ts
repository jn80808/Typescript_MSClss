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


interface Automobiles1 {
    type: string;
    brand: string;
    colors: string[];
    description: string;
    
}



//type - car
//brand - toyota, ferrari, honda
//colors - red, blue, white
//description - a reliable and fuel-efficient car


//--------------------------------------------------//
// 116. Assigning Generic to Interfaces in TypeScript
//-------------------------------------------------//

enum AutoMobileType {
    car = "car",
    truck = "truck",
    motorcycle = "motorcycle",
    bus = "bus",
    bike = "bike",
    van = "van",
}

enum AutoMobileBrand {
    toyota = "toyota",
    ferrari = "ferrari",
    honda = "honda",
    ford = "ford",
    chevrolet = "chevrolet",
    bmw = "bmw",
}

enum AutoMobileColors {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver",
    gray = "gray",
}


interface Automobile<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
    
}


//--------------------------------------------------------//
// 117.Using Multiple Generics in Interfaces in TypeScript
//--------------------------------------------------------//

enum AutoMobileType1 {
    car = "car",
    truck = "truck",
    motorcycle = "motorcycle",
    bus = "bus",
    bike = "bike",
    van = "van",
}

enum AutoMobileBrand1 {
    toyota = "toyota",
    ferrari = "ferrari",
    honda = "honda",
    ford = "ford",
    chevrolet = "chevrolet",
    bmw = "bmw",
}

enum AutoMobileColors1 {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver",
    gray = "gray",
}


interface Automobile1<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
    
}

// Example of multiple generics in interfaces
const ferrari: Automobile1<AutoMobileType1, AutoMobileBrand1, AutoMobileColors1> = {
    type: AutoMobileType1.car,
    brand: AutoMobileBrand1.ferrari,
    colors: [AutoMobileColors1.red, AutoMobileColors1.black],
    description: "A high-performance sports car known for its speed and luxury."
}

// another example of honda with its type, brand and colors as strings
const honda : Automobile1<string, string, string> = {
    type: "car",
    brand: "honda",
    colors: ["red", "blue"],
    description: "A reliable and fuel-efficient car."
}

// another example that if toyota for instance might have a number of codes for its colors, where is not a strings 
// we create a toyota automobile with its colours as numbers 


const toyota : Automobile1<string, AutoMobileBrand1, number> = {
    type: "car",
    brand: AutoMobileBrand1.toyota,
    colors: [1, 2, 3], // Assuming these numbers represent specific color codes for Toyota
    description: "A reliable and fuel-efficient car."
}

// console log all of this 3 example 
console.log(ferrari);
console.log(honda);
console.log(toyota);





