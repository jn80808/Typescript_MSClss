//----------------------//
//---- Parent Class ----// 
//----------------------//

class User1 {
    public name: string ; //-- Public Property   
    public age: number ;
    public readonly email: string 
    public lastname?: string;      
    //protected phone: number;  //-- Protected Property 
    private phone: number; //--private : if you go to the chile class you will see that the phone now is getting error 

        constructor(name: string, age: number,email: string,phone: number, lastname?: string) { //-- Added phone since we added the properties 
            this.name = name;
            this.age = age;
            this.email = email;
            this.lastname = lastname; 
            this.phone = phone; //Phone is private now and only accessible in the parent class 
        }

    public greet() {   // -- Public Method 
        console.log("Hello, my name is " + this.name); 
    }

    //Creating Method for private properties 
    public printParentPhone(){
        console.log(this.phone);  //Phone is private now and only accessible in the parent class 
        
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
        console.log(this.phone);  //phone is private in the parent class so here this is not accessible anymore in the child class 
    }

    // -- Protected Method : protected properties 
    protected PrintNumber1(){   
        console.log(this.phone);  //phone is private in the parent class
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

//-- Private properties :
console.log(user1.phone) // phone is private in the parent class
console.log(admin1.phone) // phone is private in the parent class

//-- child method <Admin> : Public Method : protected properties 
admin1.PrintNumber();

//-- parent properties : Private directly calling will get error 
admin1.PrintNumber1();

//-- child method <Admin> : Public Method : Protected Method
admin1.userProtectedPhone();


//Parent Method with private properties inside 
admin1.printParentPhone();


//-----Comparing Access Modifiers 

//                     Final Object                    Child Class                 Parent class

// Public                 /                               /                           /
// Protected              X                               /                           /
// Private                X                               X                           /









