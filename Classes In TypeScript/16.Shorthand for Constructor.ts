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
            this.phone = phone; 
        }

    public greet(): string {   // --from parent method 
       return`hello ${this.name}`
    }

    //Creating Method for private properties 
    public printParentPhone(){
        console.log(this.phone);  
        
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
        console.log(this.phone);  
    }

    // -- Protected Method : protected properties 
    protected PrintNumber1(){   
        console.log(this.phone);  
    }

    // -- Public Method : Protected Method
    public userProtectedPhone(){
        this.PrintName();
    }

    //Override Method 
    public greet(): string {  
       return`hello ${this.name}! I am admin ` // adding text this is how we can override the methods 
    }

}

const admin1: Admin = new Admin("Joy",28,"joyng@gmail.com", 20,12435) //Added Phone number : 12435



console.log(user1.greet);   //output:hello Joy
console.log(admin1.greet);  //output:hello Joy! I am admin



