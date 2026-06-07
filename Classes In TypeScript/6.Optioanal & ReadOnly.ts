//------------------------------
//---------- Optional ----------
//------------------------------

class User {
    name: string | undefined;
    age: number | undefined;
    email: string | undefined;
    lastname?: string;      //--- adding new properties that and make it optional properties by adding "?" and this make this optional 

        constructor(name: string, age: number,email: string) {
            this.name = name;
            this.age = age;
            this.email = email;
        }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

//-----here's adding "types"  now 
const user1 : User = new User("Joy",28, "joyng@gmail.com")


//now lastname not getting an error even if we dont put it in the constructor 
user1.lastname ="last";




//------------------------------------------------------
//--- Adding optional properties in the constructor too 
//------------------------------------------------------

class User1 {
    name: string | undefined;
    age: number | undefined;
    email: string | undefined;
    lastname?: string;      //--- adding new properties that and make it optional properties by adding "?" and this make this optional 

        constructor(name: string, age: number,email: string, lastname?: string) { // added additional parameter lastname 
            this.name = name;
            this.age = age;
            this.email = email;
            this.lastname = lastname; //lastname is added now 
        }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

//-----here's adding "types"  now 
const user2 : User1 = new User1("Joy",28, "joyng@gmail.com")
const user3 : User1 = new User1("Joy",28, "joyng@gmail.com","Ng")

//now still lastname not getting error since we added in the constructor 
user2.lastname ="last";

//console 
console.log(user2); 
console.log(user3);



//------------------------------
//---------- ReadOnly ----------
//------------------------------



class User2 {
    name: string | undefined;
    age: number | undefined;
    readonly email: string | undefined; //adding ReadOnly 
    lastname?: string;      

        constructor(name: string, age: number,email: string, lastname?: string) { 
            this.name = name;
            this.age = age;
            this.email = email;
            this.lastname = lastname;  
        }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

//-----here's adding "types"  now 
const user4 : User2 = new User2("Joy",28, "joyng@gmail.com")
const user5 : User2 = new User2("Joy",28, "joyng@gmail.com","Ng")

//now still lastname not getting error since we added in the constructor 
user4.lastname ="last";

//here assigning a new email address : now its getting an error 
user5.email ="joyngRICHLIFE@gmail.com" 



//console 
console.log(user2); 
console.log(user3);








