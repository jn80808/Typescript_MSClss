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
admin1.PrintNumber();

//-- child method <Admin> : Protected Method : protected properties 
admin1.PrintNumber1();

//-- child method <Admin> : Public Method : Protected Method
admin1.userProtectedPhone();

//-- child method <Admin> : Public Method : Protected Method
admin1.userProtectedPhone();
//-- child method <Admin> : Public Method : Protected Method
admin1.userProtectedPhone();


