// this is for Interface 


interface User {
    name: string;
    age: number;
    phone: number;

    greeting(): void;
}



class RegisteredUser implements User {

    constructor(public name: string, public age: number, public phone: number) {
    }

    greeting(): void {
        console.log(`Hello, my name is ${this.name}`);
    }

}


// so here the greeting method is implemented in the RegisteredUser class
// unlike in the abstract class where the greeting method is implemented in the Person class and inherited by the RegisteredUser class
// in the interface, the greeting method is implemented in the RegisteredUser class itself and not inherited from any other class




//So for the sake of our example, if the greeting was a separate interface 



interface UserB {
    name: string;
    age: number;
    phone: number;

}

//so here we have a separate interface for the greeting method and the UserB interface 
interface Greeting {
    greeting(): void;
}

class RegisteredUserB implements UserB, Greeting { //and adding the Greeting interface to the implements clause

    constructor(public name: string, public age: number, public phone: number) {
    }

    greeting(): void {
        console.log(`Hello, my name is ${this.name}`);
    }

}

//Abstract classes can contain static methods as well, whereas interfaces cannot contain static methods.





