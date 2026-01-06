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
        console.log(email);
    }

    greet(){
        return `hello jhon`;
    }
}

const user3 = new User();
const user4 = new User1("JJ","joyng808@gmail.com");

console.log(user);



