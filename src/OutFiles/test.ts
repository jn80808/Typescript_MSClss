
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

