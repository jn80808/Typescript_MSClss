

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


//from the constructor below if you think about it, this is actually a type of a blueprint for an object.
// Whenever a user object is created, or whenever an instance of the user class is created, that particular
// object will always have these three properties.
// So classes in TypeScript also act as types.

const user3 = new User3("Joy",28, "joyng@gmail.com")

//-----here's adding "types"  now 
const user1 : User3 = new User3("Joy",28, "joyng@gmail.com")


//when you use properties not in the class it will get an issue 
user1.lastname ="last";

//assigning value thats not match to the types assigned get an error 
user1.name =123

//assigning value thats match is no error 
user1.name ="Joy"

