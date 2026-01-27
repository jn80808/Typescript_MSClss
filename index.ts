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

    constructor(name:string, email:string){
        this.name = name;
        this.email = email;
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



