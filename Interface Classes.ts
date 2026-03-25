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




//--------------------------------------------------------//
// 118.Using Interfaces with classes in TypeScript
//--------------------------------------------------------//

enum AutoMobileType2 {
    car = "car",
    truck = "truck",
    motorcycle = "motorcycle",
    bus = "bus",
    bike = "bike",
    van = "van",
}

enum AutoMobileBrand2 {
    toyota = "toyota",
    ferrari = "ferrari",
    honda = "honda",
    ford = "ford",
    chevrolet = "chevrolet",
    bmw = "bmw",
}

enum AutoMobileColors2 {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver",
    gray = "gray",
}


interface Automobile2<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
    
}


class Car implements Automobile2<string, AutoMobileBrand2, AutoMobileColors2> {
    constructor(
        public type: string,
        public brand: AutoMobileBrand2,
        public colors: AutoMobileColors2[],
        public description: string
    ) {}
}


const ferrari2 = new Car(
    "car",
    AutoMobileBrand2.ferrari,
    [AutoMobileColors2.red, AutoMobileColors2.black],
    "A high-performance sports car known for its speed and luxury."
);

const honda2 = new Car(
    "car",
    AutoMobileBrand2.honda,
    [AutoMobileColors2.red, AutoMobileColors2.blue],
    "A reliable and fuel-efficient car."
);

const toyota2 = new Car(
    "car",
    AutoMobileBrand2.toyota,
    [AutoMobileColors2.silver, AutoMobileColors2.gray],
    "A reliable and fuel-efficient car."
);


console.log(ferrari2);
console.log(honda2);
console.log(toyota2);

//--------------------------------------------------------------//
// 119. Multiple Classes Using the Same Interface in TypeScript
//-------------------------------------------------------------//


enum AutoMobileType3 {
    car = "car",
    truck = "truck",
    motorcycle = "motorcycle",
    bus = "bus",
    bike = "bike",
    van = "van",
}

enum AutoMobileBrand3 {
    toyota = "toyota",
    ferrari = "ferrari",
    honda = "honda",
    ford = "ford",
    chevrolet = "chevrolet",
    bmw = "bmw",
}

enum AutoMobileColors3 {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver",
    gray = "gray",
}


interface Automobile3<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
    
}

// Here we have created a truck class that implements the Automobile3 interface, and we have assigned the type as string, brand as AutoMobileBrand3 and colors as AutoMobileColors3, so when we create a new truck object we only need to add brand, colors and description because type is already assigned in the class as default value
class Truck implements Automobile3<string, AutoMobileBrand3, AutoMobileColors3> {
    public type: string = "truck"; // so here is added default value so at constant varibale assigning value we dont need to add type as truck 
                                    // because it is already assigned in the class only brand, colors and description we need to add when creating a new truck object

    constructor(
        //public type: string,
        public brand: AutoMobileBrand3,
        public colors: AutoMobileColors3[],
        public description: string
    ) {}


}

const fordTruck = new Truck( // so here as you can see we dont need to add type as truck because it is already assigned in the class as default value, so we only need to add brand, colors and description when creating a new truck object
    AutoMobileBrand3.ford, 
    [AutoMobileColors3.black, AutoMobileColors3.gray],
    "A powerful truck designed for heavy-duty tasks."
);

const chevroletTruck = new Truck(
    AutoMobileBrand3.chevrolet,
    [AutoMobileColors3.white, AutoMobileColors3.silver],
    "A versatile truck suitable for both work and leisure."
);

const bmwTruck = new Truck(
    AutoMobileBrand3.bmw,
    [AutoMobileColors3.red, AutoMobileColors3.blue],
    "A luxury truck that combines performance with style."
);

console.log(fordTruck);
console.log(chevroletTruck);
console.log(bmwTruck);


//--------------------------------------------------------------//
// 120. Implementing Multiple Interfaces 
//-------------------------------------------------------------//


enum AutoMobileType4 {
    car = "car",
    truck = "truck",
    motorcycle = "motorcycle",
    bus = "bus",
    bike = "bike",
    van = "van",
}

enum AutoMobileBrand4 {
    toyota = "toyota",
    ferrari = "ferrari",
    honda = "honda",
    ford = "ford",
    chevrolet = "chevrolet",
    bmw = "bmw",
}

enum AutoMobileColors4 {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver",
    gray = "gray",
}


interface Automobile4<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
    
}


//additional interface Vehicle
interface CommercialVehicle {
    loadCapacity: string;
    licenseRenewalDate: Date;
}


//so now since we have created a new interface for commercial vehicle, we can implement this interface in our truck class along with the Automobile4 interface by adding some comma "," , so now our truck class will have all the properties and methods of both interfaces, so we can create a new truck object that has all the properties of both interfaces
class Truck1 implements Automobile3<string, AutoMobileBrand3, AutoMobileColors3>,
                        CommercialVehicle {

    public type: string = "truck"; 

    constructor(
        //public type: string,
        public brand: AutoMobileBrand3,
        public colors: AutoMobileColors3[],
        public description: string,
        public loadCapacity: string, // so here at the constructor we will add this is the property from the CommercialVehicle interface so typescript now understands that we are implementing 2 interfaces in this class, the automobile interface and the commercial vehicle interface, so we need to add the properties of both interfaces in the constructor when creating a new truck object
        public licenseRenewalDate: Date
    ) {}


}

const fordTruck1 = new Truck1( // so here as you can see we dont need to add type as truck because it is already assigned in the class as default value, so we only need to add brand, colors and description when creating a new truck object
    AutoMobileBrand3.ford, 
    [AutoMobileColors3.black, AutoMobileColors3.gray],
    "A powerful truck designed for heavy-duty tasks.",
    "10 tons", // this is the load capacity of the truck which is a property from the CommercialVehicle interface
    new Date("2024-12-31") // this is the license renewal date of the truck which is a property from the CommercialVehicle interface
);

console.log(fordTruck1);



//--------------------------------------------------------------//
// 120. Implementing Multiple Interfaces 
//-------------------------------------------------------------//
// classes in typescript can inherit only one from one class 
// this mean that there can only be one parent class if you are creating child classes
// so here we will create simple class USER 

class User {
    constructor(
        public name: string
    ) {}
}

class Password {
    constructor(
        public password: string
    ) {}

}

class RegisteredUser extends User, Password { // this will give an error because we cannot inherit from multiple classes in typescript and with this error is solve by interface because we can implement multiple interfaces in a class but we cannot inherit from multiple classes in typescript as previous example at line 514 that we have created a truck class that implements two interfaces Automobile3 and CommercialVehicle, so we can implement multiple interfaces in a class but we cannot inherit from multiple classes in typescript, so here we will get an error because we are trying to inherit from two classes User and Password which is not allowed in typescript   
    constructor(
        name: string,
        password: string
    ) {
        super(name); // this will give an error because we cannot call super() for multiple classes in typescript
        super(password); // this will give an error because we cannot call super() for multiple classes in typescript
    }
}

// A class can implement as many interfaces as it wants to.

// But a class can only inherit from one class itself.

// It cannot inherit from multiple classes.

// This is an important takeaway, and this increases the importance of interfaces within TypeScript and

// object oriented programming as a whole.

// Again, in TypeScript, you can inherit from only one parent class, but classes can implement as many

// interfaces as it wants to, and there is no limitation on that.


//--------------------------------------------------------------//
// 122.Interface and Access Modifiers in ypeScript
//-------------------------------------------------------------//


enum AutoMobileType5 {
    car = "car",
    truck = "truck",
    motorcycle = "motorcycle",
    bus = "bus",
    bike = "bike",
    van = "van",
}

enum AutoMobileBrand5 {
    toyota = "toyota",
    ferrari = "ferrari",
    honda = "honda",
    ford = "ford",
    chevrolet = "chevrolet",
    bmw = "bmw",
}

enum AutoMobileColors5 {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver",
    gray = "gray",
}


interface Automobile5<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
    
}


//additional interface Vehicle
interface CommercialVehicle1 {
    loadCapacity: string;
    licenseRenewalDate: Date;
}



