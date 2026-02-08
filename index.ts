//-------------------------------------//
// 75.Creating First Class and Instance
//-------------------------------------//


class User{
    name = "Jhon";
    email = "jj@gmail.com";

    greet(){
        return `hello jhon`;
    }
}

const user = new User();

console.log(user);

//------------------------//
// 76.Constructor Function
//------------------------//

class User1{
    name = "Jhon";
    email = "jj@gmail.com";

    constructor(name:string, email:string){}

    greet(){
        return `hello jhon`;
    }
}

const user1 = new User();
const user2 = new User1("JJ","joyng808@gmail.com");

console.log(user);



//------------------------//
// 77.This keyword
//------------------------//

class User2{
    //Before
    // name = "Jhon";
    // email = "jj@gmail.com";

    name: string;
    email: string;

    constructor(name:string, email:string){
        this.name = name;
        this.email = email;
        console.log(email);
    }

    greet(){
        return `hello ${this.name}`;
    }
}

const user5 = new User2("ff","joygng808@gmail.com");
const user6 = new User2("JJ","joygng808@gmail.com");

console.log(user5);
console.log(user6.greet);
console.log(user1);
console.log(user2.greet);


//----------------------------//
// 80. Inheritance with Classes 
//----------------------------//


class User3{
    //Before
    // name = "Jhon";
    // email = "jj@gmail.com";

    name: string;
    email: string;
    lastname?: string;

    constructor(name:string, email:string, lastname?: string){
        this.name = name;
        this.email = email;
        lastname = lastname;
        console.log(email);
    }

    greet(){
        return `hello ${this.name}`;
    }
}

const user7 = new User2("ff","joygng808@gmail.com");
const user8 = new User2("JJ","joygng808@gmail.com");

// this is the example of not a right way because it repeating the code 
// by doing this once you have changes in the user you need to implement it as well in the admin which is it will caused future error 
// once you forgot to add the changes to the admin so to solve this we will gonna do implement the inheratance this is the purpose 
// of the inheretance
class Admin {
    
    name: string;
    email: string;

    constructor(name:string, email:string){
        this.name = name;
        this.email = email;
        console.log(email);
    }

    greet(){
        return `hello ${this.name}`;
    }
}

// below this is correct way to do the inheretance decalare a extends too 
/*And let's simply say that admin is supposed to extend or extends the user class.

This is how you create inheritance.

Over here you are telling TypeScript that I want admin to extend the user class, which means admin

should have all the properties that are present inside the user class.

By just using the extends keyword, TypeScript makes sure that all the properties of the user class

do exist inside the admin class also. 

Now additionally, admin class can have its own properties as well.

So lets say this admin class has another property called is admin, and this is a kind of a boolean

property and I want to assign it a default value of true because whichever user is created using this

admin class is supposed to be an admin, and hence his admin should always be true in this case.
*/


class Admin1 extends User3 {
    isAdmin: boolean = true;


}

//And I'm going to create another user over here.
const admin: Admin = new Admin1("Mark", "marker@gmail.com");

console.log(user);
console.log(admin);


//----------------------------//
// 81. SuperMethod 
//----------------------------//


class Admin2 extends User3 {
    isAdmin: boolean = true;
    userReporting: number;

    constructor(
    name: string,
    email: string,
    userReporting: number,
    lastname?: string // optional to put pero just added nalang din 

    ){
        super(name,email,lastname);
        this.userReporting = userReporting;
    }

}

//And I'm going to create another user over here.
const admin2: Admin = new Admin1("Mark", "marker@gmail.com");
const admin3: Admin2 = new Admin2("Mark", "marker@gmail.com",11);

console.log(user);
console.log(admin);

//----------------------------//
// 82.Practice Classes  
//----------------------------//

/**
 * Practice Problem 
 * You are building a simple library management system.
 * Implement the following requirements using Typescript:
 * 
 * 
 *TODO: 1.Create a class Book with the following properties: 
 * - title (string, required)
 * - author (string, required)
 * - yearPublished (number, optional)
 * - ISBN (string, readonly)
 * 
 * TODO: 2.Define a construction function to initialize the Book class with 
 * title, author, yearPublished, and ISBN 
 * 
 * TODO: 3.Ensure that the constructor function uses the this keyword to assign values to the properties 
 * 
 * TODO 4. Create an Instance of the Book Class and log its details 
 * 
 * TODO 5. Create a function logBookDetails that takes an instance of Book as a parameter and logs its details 
 * 
 * TODO 6. Cretae a subclass EBook that extends the Book class. Add the following properties:
 * - fileSize(number, required)
 * - format (string, required)
 * 
 * TODO: 7. Use the super method to call the constructor of the parent class Book from the EBook class.
 * 
 * TODO: 8. Ensure that the yearPubslished property in the Book Class is Optional and the ISBN property is readonly
 */

//----------------------------------//
// 83.Practice Classes Solution 
//----------------------------------//


class Book {
    title: string;
    author:string;
    yearPublish?: number;
    readonly ISBN : string;


    constructor( 
        title: string, 
        author: string, 
        ISBN: string,
        yearPublish?: number
    ){
        this.title = title;
        this.ISBN = ISBN;
        this.author = author;
        
        if(yearPublish){
            this.yearPublish = yearPublish;
        }


    }
}

    const firstBook = new Book("The Greate Gatsby", "F.Scott","113355",1938);
    console.log(firstBook);

    function logBookDetails(book: Book):void {
        console.log (`Title: ${book.title}`);
        console.log (`Author: ${book.author}`);
        console.log (`ISBN: ${book.ISBN}`);
        
        if (book.yearPublish){
            console.log(`Year Pubslished: ${book.yearPublish}`);

        }
    }

    logBookDetails(firstBook);


    class Ebook extends Book {
        fileSize: number;
        format: string;


        constructor(
            title: string,
            author: string,
            ISBN: string,
            fileSize: number,
            format: string,
            yearPublish?: number
        ){
            super( title, author,ISBN, yearPublish);
            this.fileSize = fileSize;
            this.format = format; 
        }
    }

    const firstEBook = new Ebook("the great joyRICH", "N.Gonzaga","435345",2,"PDF",1998)

    logBookDetails(firstBook);


//----------------------------------//
// 84.Access Modifiers 
//---------------------------------//

/**
 * >> Access modifiers.
 * As the name suggests, you can use TypeScript to control whether certain methods or properties are visible
 * to code outside the class.
 * >> When we start talking about inheritance, these become very important.
 * >> Access modifiers let you control whether the child class or whether the instance of a class would have
 * access to a specific property of the class or the method of the class.
 * here are
 *  three types of access modifiers.
 * >> The first one is public, second is protected, and then private.
 */


//--------------------------------------//
// 85.Public Modifiers / Public Members
//--------------------------------------//

// by default typescript properties and method set to default 
// we can explicitly declare public modifiers 
// we can explicitly declare a public modifier in properties and method 



class User4{

    public name: string; // properties 
    email: string;
    lastname?: string;

    constructor(name:string, email:string, lastname?: string){
        this.name = name;
        this.email = email;
        lastname = lastname;
        console.log(email);
    }

    public greet(){ // method 
        return `hello ${this.name}`;
    }
}

const user9 = new User4("ff","joygng808@gmail.com");
const user99 = new User4("JJ","joygng808@gmail.com");



class Admin3 extends User3 {
    isAdmin: boolean = true;
    userReporting: number;

    constructor(
    name: string,
    email: string,
    userReporting: number,
    lastname?: string // optional to put pero just added nalang din 

    ){
        super(name,email,lastname);
        this.userReporting = userReporting;
    }

    //public modifiers accessing the name from USER Properties which is the parent class 
    public printName(){
        console.log(this.name);
    }

}
// using the "this" keyword inside the child class, you can access the properties of the parent class also.
const admin4: Admin = new Admin1("Mark", "marker@gmail.com");
const admin5: Admin3 = new Admin3("Mark", "marker@gmail.com",11);

console.log(user);
console.log(admin5);


console.log(user.name);
admin5.printName();

//--------------------------------------------//
// 86.Protected Modifiers / Protected Members 
//--------------------------------------------//

/**
 * - >> So whenever you add a protected access modifier to a property or a method of that class, that particular
 * property or method is not available in the final object that you create.
 * - >> A protected method or a property is only available in the child class, as well as in the parent class
 * or the class that you declare that particular property or method in.
 * - >> This is the only difference between public and protected.
 */

class User5{

    public name: string; // properties 
    email: string;
    lastname?: string;
    protected phone: number;


    constructor(name:string, email:string, phone:number,  lastname?: string){
        this.name = name;
        this.email = email;
        this.phone = phone;
        lastname = lastname;
        console.log(email);

    }

    public greet(){ // method 
        return `hello ${this.name}`;
    }
}

const user10 = new User4("ff","joygng808@gmail.com");
const user11 = new User4("JJ","joygng808@gmail.com");



class Admin5 extends User5 {
    isAdmin: boolean = true;
    userReporting: number;

    constructor(
    name: string,
    email: string,
    phone:number,
    userReporting: number,
    lastname?: string // optional to put pero just added nalang din 


    ){
        super(name,email,phone,lastname);
        this.userReporting = userReporting;
    }

    //public modifiers accessing the name from USER Properties which is the parent class 
    public printName(){
        console.log(this.name);
    }

    //protected modifiers 
        public printPhone(){
        console.log(this.phone);
    }


}
// using the "this" keyword inside the child class, you can access the properties of the parent class also.
const admin6: Admin = new Admin1("Mark", "marker@gmail.com");
const admin7: Admin5 = new Admin5("Mark", "marker@gmail.com",5645,11);

console.log(user);
console.log(admin7);


console.log(user.name);
admin5.printName();


//-------------------------------------//
// 87.Private Modifiers / Private Members
//-------------------------------------//

class User6{

    public name: string; // properties 
    email: string;
    lastname?: string;
    private phone: number;


    constructor(name:string, email:string, phone:number,  lastname?: string){
        this.name = name;
        this.email = email;
        this.phone = phone;
        lastname = lastname;
        console.log(email);

    }

    //public modifier method
    public greet(){ // method 
        return `hello ${this.name}`;
    }

    //private modifier method
        public printPhone(){
        console.log(this.phone);
    }

}

const user12 = new User6("Mark", "marker@gmail.com",5645);



class Admin6 extends User6 {
    isAdmin: boolean = true;
    userReporting: number;

    constructor(
    name: string,
    email: string,
    phone:number,
    userReporting: number,
    lastname?: string // optional to put pero just added nalang din 


    ){
        super(name,email,phone,lastname);
        this.userReporting = userReporting;
    }

    //public modifiers accessing the name from USER Properties which is the parent class 
    public printName(){
        console.log(this.name);
    }

    //protected modifiers 
    //     public printPhone(){
    //     console.log(this.phone);
    // }


}
// using the "this" keyword inside the child class, you can access the properties of the parent class also.
const admin9: Admin6 = new Admin6("Mark", "marker@gmail.com",5645,11);

user12.printPhone(); 

//--------------------------------------------//
// 89. Overriding Methods in Child Class
//-------------------------------------------//

/**
 * it is possible to override some method inside a child class and give a different output inside the child class.
 */


class User7{

    public name: string; // properties 
    email: string;
    lastname?: string;
    private phone: number;


    constructor(name:string, email:string, phone:number,  lastname?: string){
        this.name = name;
        this.email = email;
        this.phone = phone;
        lastname = lastname;
        console.log(email);

    }

    //public modifier method
    public greet(){ // method 
        return `hello ${this.name}`;
    }
}

const user13 = new User6("Mark", "marker@gmail.com",5645);



class Admin7 extends User6 {
    isAdmin: boolean = true;
    userReporting: number;

    constructor(
    name: string,
    email: string,
    phone:number,
    userReporting: number,
    lastname?: string // optional to put pero just added nalang din 


    ){
        super(name,email,phone,lastname);
        this.userReporting = userReporting;
    }
}
// using the "this" keyword inside the child class, you can access the properties of the parent class also.
const admin10: Admin6 = new Admin6("Mark", "marker@gmail.com",5645,11);

user12.printPhone(); 













