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
// once you forgot to add the changes to the admin so to solve this we will gonna do implement the inheratance this is the purpose of the inheretance
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

// this is correct way to do the inheretance decalare a extends too 

class Admin1 extends User {


}
