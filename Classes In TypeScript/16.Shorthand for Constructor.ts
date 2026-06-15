//----------------------//
//---- Parent Class ----// 
//----------------------//

class User1 {
        //this is shorthand way to make properties as well parameters in constructor so its make lessen 
        constructor(
                public name: string, 
                public age: number,
                readonly email: string,
                private phone: number, 
                public lastname?: string) {

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
    public isAdmin: boolean = true;
    

    constructor(name: string, age: number,email: string, phone:number,
        public userReporting: number, lastname?: string)
        {  
        super(name, age,email,phone,lastname);      
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



