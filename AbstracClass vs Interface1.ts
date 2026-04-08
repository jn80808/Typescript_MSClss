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

    //so here just added a static method to the abstract class and it will work fine but if we try to add a static method to an interface it will give an error because interfaces cannot contain static methods
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

