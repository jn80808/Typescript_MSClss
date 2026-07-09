//-------------------------------------------//
//---------- PROTECTED MODIFIERS ----------//
//----------------------------------------//


//-----Comparing Access Modifiers 

//                     Final Object                    Child Class                 Parent class

// Public                 /                               /                           /
// Protected              X                               /                           /
// Private                X                               X                           /




//----- protected properties

// So whenever you add a protected access modifier to a property or a method of that class, that particular

// property or method is not available in the final object that you create.

// A protected method or a property is only available in the child class, as well as in the parent class

// or the class that you declare that particular property or method in.

// This is the only difference between public and protected.

// So whenever you want some properties to be only accessible inside the parent class and the child class,

// and you don't want these properties to be accessible outside of the class that is in the final instance,

// or the object that you create from particular class, then you need to assign those properties or methods

// a protected access modifier.

//----------------------//
//---- Parent Class ----// 
//----------------------//

class User1 {
    public name: string ; //-- Public Property   
    public age: number ;
    public readonly email: string 
    public lastname?: string;      
    protected phone: number;  //-- Protected Property 

        constructor(name: string, age: number,email: string,phone: number, lastname?: string) { //-- Added phone since we added the properties 
            this.name = name;
            this.age = age;
            this.email = email;
            this.lastname = lastname; 
            this.phone = phone;  //-- Added phone : So any property that is declared as a protected property is available inside that class.
                                //Apart from being available inside the parent class where you declare such a property, a protected property
                                //is also available inside the child class.
        }

    public greet() {   // -- Public Method 
        console.log("Hello, my name is " + this.name); //name is public properties so here name property is accessible 
    }
}

const user1 : User1 = new User1("Joy",28, "joyng@gmail.com",1234) //1234 phone is added 
const user2 : User1 = new User1("Joy",28, "joyng@gmail.com",2143,"Ng",)  //1234 phone is added 

//----------------------//
//---- Child Class ----// 
//--------------------//

class Admin extends User1{
    isAdmin: boolean = true;
    userReporting: number;  

    constructor(name: string, age: number,email: string, phone:number,userReporting: number, lastname?: string){   // added phone here at parameter at constructor before in the super method 
        super(name, age,email,phone,lastname);  // added phone 
        this.userReporting = userReporting;
    }

    // -- Public Method : public properties 
    public PrintName(){   
        console.log(this.name);  
    }

    //-- Public Method : protected properties 
    public PrintNumber(){   
        console.log(this.phone);  //phone is accessible 
    }

    // -- Protected Method : protected properties 
    protected PrintNumber1(){   
        console.log(this.phone);  //phone is accessible 
    }

    // -- Public Method : Protected Method
    public userProtectedPhone(){
        this.PrintName();
    }


}

const admin1: Admin = new Admin("Joy",28,"joyng@gmail.com", 20,12435) //Added Phone number : 12435

//----------------------//
//---- Final Object ----// 
//----------------------//

//-- public properties :
console.log(user1.name)  //public properties 
console.log(admin1.name)  //public properties 

//-- protected properties :
console.log(user1.phone) // protected properties 
console.log(admin1.phone) // protected properties 


//-- child method <Admin> : Public Method : protected properties 
admin1.PrintNumber(); //output : 12435 : its have an output because the method is declared as public 
                      //This is because you are accessing a protected property inside the class and not outside the class.
                      // It is this method which is responsible for printing this property for you.
                      // So within the class you are able to access the phone number.
                      // And that's the reason why you are able to print this phone number on the console.
                      // Even though the phone number is a protected property.So you can't access it directly, but you can access it within the class now.

//-- child method <Admin> : Protected Method : protected properties 
admin1.PrintNumber1(); // now this protected method is not accessible anymore it throws an error saying that print number is a protected method and is not accessible.


//-- child method <Admin> : Public Method : Protected Method
admin1.userProtectedPhone(); //And since this is a public method, phone number would still be printed onto the console.
                            //This is because even though you have converted print number into a protected method, but protected
                            //methods are available inside the class.
                            //So what I'm doing is I have just created another public method which invokes this protected method within
                            //the class.


// so here as we can see protected properties only accessible in parent class-> child class but not accessible in final object 

//-----Comparing Access Modifiers 

//                     Final Object                    Child Class                 Parent class

// Public                 /                               /                           /
// Protected              X                               /                           /
// Private                X                               X                           /



// But here's a gotcha.

// You will see that even though TypeScript is warning me, but phone number is printed on the console.

// This is because I'm compiling all code that is TypeScript code into JavaScript code.

// Even if there is error in TypeScript, and JavaScript itself does not recognize access modifiers, and

// since JavaScript does not understand access modifiers, JavaScript goes ahead and prints this to the

// console.

// Now we can avoid this situation by changing our TS config file.



// So if I navigate to ts config file right here, you will see that there is a property in ts config and

// this property is called "noEmitOnError"

// Now if I set this property to "true" where I set no emit on error to true, this means that whenever there

// is an error inside my TypeScript file, TypeScript will not compile to JavaScript.

// It will force you to comply with TypeScript, get rid of all the errors and then only it will compile

// to JavaScript.

// In this case, a JavaScript file would not be generated and hence you would not get this kind of an

// error.



// Copyright (c) 2026 Joy N
// Author: Joy N

