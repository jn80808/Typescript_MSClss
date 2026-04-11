// I create 2 files so it will side by side and you can easily compare them
// this is for abstract class

abstract class Person {
    public abstract name  : string;
    public abstract email :string;
    public abstract phone :string;

    public greeting () {
        console.log(`Hello ${this.name}, welcome!`);

    }

}


class RegisteredUser extends Person {
    constructor(
        public name: string, 
        public email: string, 
        public phone: string
    ) {
        super();
    }
}

const personA : RegisteredUser = new RegisteredUser(
    "Joy",      
    "joyng@gmail.com",
    "000000888888888"
)


personA.greeting();


// Now let's see the same thing with interface
// so here inside at line 48-50 i decalare this so that in const it will declare properties before values 
// caused in the RegisteredUserA at const directly declare value 

class RegisteredUserB extends Person {
    constructor(user: { name: string; email: string; phone: string }) {
        super();
        this.name = user.name;
        this.email = user.email;
        this.phone = user.phone;
    }

    public name!: string;
    public email!: string;
    public phone!: string;
}

const personB : RegisteredUserB = new RegisteredUserB({
    name: "Joy",
    email: "joyng@gmail.com",
    phone: "000000888888888"
});



//Abstract classes can contain static methods as well, whereas interfaces cannot contain static methods.

abstract class PersonC {
    public abstract name  : string;
    public abstract email :string;
    public abstract phone :string;

    public greeting () {
        console.log(`Hello ${this.name}, welcome!`);

    }

    //so here just added a static method to the abstract class and it will work fine 
    // but if we try to add a static method to an interface it will give an error 
    // because interfaces cannot contain static methods
    public static nameClass(){
        return "Class name is PersonC";
    }
}


class RegisteredUserC extends PersonC {
    constructor(
        public name: string, 
        public email: string, 
        public phone: string
    ) {
        super();
    }
}

const personC : RegisteredUserC = new RegisteredUserC(
    "Joy",      
    "joyng@gmail.com",
    "000000888888888"
)


personC.greeting();

console.log(PersonC);
console.log(PersonC.nameClass());


// The question is which one should you use?

// The answer is that there is no straightforward way to decide, and it depends on what you are trying

// to achieve.

// If you're trying to implement certain design patterns which require the use of interfaces, then you

// would have to use interfaces and vice versa.

// But here is something that can make your life a bit easy.

// --@abstract classes: 

// If you need to have certain implementations in your parent class, like the greeting method we have

// over here, or any static methods like the name class method that we have over here, then you're better

// off using abstract classes.

//So if any implementation is mandatory within the class, you need to use abstract classes.

// --@interfaces:

// On the other hand, if you're just looking for creating a contract for your classes and the classes

// are bound to implement those contracts or interfaces, then using interfaces makes much more sense.



// Implementing
// ____________  an interface will have the same properties as that interface inherited or applied to a class.

// Implementing an interface in a class means that the class agrees to follow the rules defined by that interface, inheriting its properties and methods. This aligns with the objective of understanding how interfaces work in programming, demonstrating that by implementing an interface, you provide specific functionalities that the interface requires.

// Was this content relevant to you?


// trues
// _______Interfaces are similar to type aliases, but only for object types.

