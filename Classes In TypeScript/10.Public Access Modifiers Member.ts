
class User {
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



const user4 : User = new User("Joy",28, "joyng@gmail.com")
const user5 : User = new User("Joy",28, "joyng@gmail.com","Ng")


//-------------------------------------//
//---------- PUBLIC MODIFIERS ----------//
//-------------------------------------//



// Whenever we declare a property or a method inside a class, just the way that we have declared over

// here, 

//     name: string | undefined;
//     age: number | undefined;
//     readonly email: string | undefined; //adding ReadOnly 
//     lastname?: string;     



// the property by default gets the access modifier of public.

// So even if you do not assign an access modifier to a property by default, TypeScript would consider

// your property as a public property.



//-- Now, if you have to explicitly define an access modifier for a particular property, this is how you do it.



//----------------------//
//---- Parent Class ----// 
//----------------------//
class User1 {
    public name: string ; //-- adding public prefix this is now setting to public modifiers or public property  
    public age: number ;
    public readonly email: string 
    public lastname?: string;      

        constructor(name: string, age: number,email: string, lastname?: string) { 
            this.name = name;
            this.age = age;
            this.email = email;
            this.lastname = lastname;  
        }

    public greet() {    //-- adding prefix public at the method it make this public method 
        console.log("Hello, my name is " + this.name); //the property name is accessible in the method since we decalre this properties as public at line 53
    }
}




const user1 : User1 = new User1("Joy",28, "joyng@gmail.com")
const user2 : User1 = new User1("Joy",28, "joyng@gmail.com","Ng")



// Now what about the child class?

// Is a public property accessible in the child class?

// A public property inside the parent class is accessible inside the child class.

// so let's go and check the admin class 


//----------------------//
//---- Child Class ----// 
//--------------------//

class Admin extends User1{
    isAdmin: boolean = true;
    userReporting: number;  

    constructor(name: string, age: number,email: string, userReporting: number, lastname?: string){  
        super(name, age,email,lastname);   // only properties in parent constructor no need to add the userReporting because this is for admin and super is for parent class argument                       
        this.userReporting = userReporting;
    }


    public PrintName(){
        console.log(this.name);  // so now here we create new method in this child class and we access the name and still we dont have an issue
    }                            //This is another takeaway for the "this" keyword that using the "this keyword" inside the child class, you
                                //can access the properties of the parent class also.So in this case, even though this keyword does refer to the admin class, it is not referring to the parent class 
}

const admin1: Admin = new Admin("Joy",28,"joyng@gmail.com", 20) 


//----------------------//
//---- Final Object ----// 
//----------------------//

console.log(user1.name)     //Output: Joy 
admin1.PrintName(); //Output: Joy 
                    //which means Joy is accessible inside the child class.



// So the takeaway from this lecture is that whenever you assign a public access modifier to any property

// or any method inside the class, that particular property or method is accessible in the final object

// that you create from that class in the child class, as well as in the parent class.

//-----Comparing Access Modifiers 

//                     Final Object                    Child Class                 Parent class

// Public                 /                               /                           /
// Protected              X                               /                           /
// Private                X                               X                           /

// so from this we can see the public properties or method will be accessible from parent class -> child class -> final object 


