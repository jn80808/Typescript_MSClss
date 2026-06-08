class User1 {
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



const user4 : User1 = new User1("Joy",28, "joyng@gmail.com")
const user5 : User1 = new User1("Joy",28, "joyng@gmail.com","Ng")

//---- inheritance ----//

class Admin extends User1{
    isAdmin: boolean = true;
}


const admin: Admin = new Admin("Joy",28,"joyng@gmail.com")


console.log(user4) 
console.log(admin)


//Admin class have 
// Admin only has one additional property that is isAdmin, and it does not have any of the properties

// which is dynamic in nature isAdmin property.

// If you also see right now always has a default value of true, but what if there were additional properties

// inside the admin class and they required an instantiation or a dynamic value, just like the constructor of the parent class

// <PARENT CONSTRUCTOR : 
//         constructor(name: string, age: number,email: string, lastname?: string) { 
//             this.name = name;
//             this.age = age;
//             this.email = email;
//             this.lastname = lastname;  
//         }
// > 

// where we are having name email as well as last name as dynamic values?

// How to add a constructor to the child class, and then ensure that this constructor  in the parent class is also invoked properly.

// To understand this in a better way, let's just start by adding one additional property to our admin class.

// This additional property let's call it as users reporting, which is how many number of users are reporting

// to this particular admin So I will strictly type it as a number.


class Admin1 extends User1{
    isAdmin: boolean = true;
    userReporting: number;  //this will get an error : Property userReporting has no initializer 
}

// Now we need to add a constructor to admin so that that constructor can have parameter called users reporting.

// And then users reporting can be assigned dynamically to this.

// Because every user in our application would have different number of users reporting to it, so every

// admin user would have different number of users.

// Some admins would have ten users reporting to it.

// Someone would have two users reporting to it.

// So that's what we want to accomplish within the constructor of this class.

// Now let's go ahead and try adding constructor 


class Admin2 extends User1{
    isAdmin: boolean = true;
    userReporting: number;  

    constructor(userReporting: number){     //its getting a error if we hover the constructor its show this : Constructors for derived classes must contain a 'super' call
        this.userReporting = userReporting;
    }
}

// Now what do we mean by that?

// What this actually means is that till you did not have a constructor and you did not need a constructor,

// you did not have a dynamic property.

// TypeScript behind the scenes was automatically adding a constructor to the admin class and was calling

// a "super method".

// Now what is this super method?

// Super method in a child class can be called inside the constructor, and it actually invokes the constructor

// of the parent class.

        // constructor(name: string, age: number,email: string, lastname?: string) { 
        //     this.name = name;
        //     this.age = age;
        //     this.email = email;
        //     this.lastname = lastname;  
        // }

// You see, the constructor of the parent class should be invoked before the child class constructor.

// This is important because if all the properties of the parent class would have not been instantiated

// properly, you would not be able to access those particular properties within the child class.

// So the child class would not be able to create an instance or an object which contains name, email,

// last name, etc. till these properties have not been initialized in the parent class.

// In order to initialize these properties, we use a "special method called super method".

//----- super method -----//


class Admin3 extends User1{
    isAdmin: boolean = true;
    userReporting: number;  

    constructor(userReporting: number){     
        super();                            //---initialize firts the parent constructor : now we see an error when we hover it , it will show you Expected 3-4 arguments, but got 0 : constructor User1(name: string, age: number, email: string, lastname?: string): User1 that are parent constructor 
        this.userReporting = userReporting;
    }
}


// Now, if you want all these three arguments to be dynamic in nature, whenever you create a new admin,

// you want to accept these three arguments as well.

// Along with the admin class, you can add these arguments as parameters to the constructor function of

// the admin.

// And this is what you would usually do in most of the cases.

// So let's go ahead and let's follow the same sequence or order that we have in case of the constructor

// function of the parent class.

// So let's just copy these two mandatory properties or parameters first.

// And let's add these to the constructor of the child class as parameters.

class Admin4 extends User1{
    isAdmin: boolean = true;
    userReporting: number;  

    constructor(name: string, age: number,email: string, userReporting: number, lastname?: string){  //added the parameter of parent class constructor first add only the mandatory and the optional is will be added always at the end of parameter   
        super();                         
        this.userReporting = userReporting;
    }
}


//after adding the parameter of parent constructor to child constructor 
// now at super method we will add the argument that only in parent class 


class Admin5 extends User1{
    isAdmin: boolean = true;
    userReporting: number;  

    constructor(name: string, age: number,email: string, userReporting: number, lastname?: string){  
        super(name, age,email,lastname);   // only properties in parent constructor no need to add the userReporting because this is for admin and super is for parent class argument                       
        this.userReporting = userReporting;
    }
}

const admin: Admin5 = new Admin5("Joy",28,"joyng@gmail.com") // so here since we added a userReporting if you hover this is ther error :  An argument for 'userReporting' was not provided.


const admin1: Admin5 = new Admin5("Joy",28,"joyng@gmail.com", 20) //so we add 20 and now the error is go away 

//output :

// Admin5 {
//   name: 'Joy',
//   age: 28,
//   email: 'joyng@gmail.com',
//   lastname: undefined,
//   isAdmin: true,
//   userReporting: 20
// }


