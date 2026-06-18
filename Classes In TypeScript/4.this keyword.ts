
// ------------at the constructor passing only parameter name and age 
// and not assigning it to the class properties

class User1 {
    name: string | undefined
    age: number | undefined

        constructor(name: string, age: number) {
    }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

const user1 = new User1("John Doe", 23);
user1.greet(); // Output: Hello, my name is John Doe


// ------------with "this keyword" 
// to use the this keyword, this keyword within the class itself refers to the class.
// So whenever you want to access any of the fields of a class, or you want to refer to any of the methods
// for setting a value or for accessing a value, you can always use the this keyword.


//from this.name -> class property name
//= name -> parameter name from the constructor function
// So this.name = name means that we are assigning the value of the parameter name to the class property name.
class User2 {
    name: string | undefined;
    age: number | undefined;
    email: string | undefined;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

//so here without add the email in the constructor it will get error when i intantiate here the email 
const user = new User2("Joy",28, "joyng@gmail.com")



// Added Email in the constructor 

class User3 {
    name: string | undefined;
    age: number | undefined;
    email: string | undefined;

        constructor(name: string, age: number,email: string) {
            this.name = name;
            this.age = age;
            this.email = email;
        }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

//so here email is now accepting to 
const user3 = new User3("Joy",28, "joyng@gmail.com")

console.log(user3.greet); 
