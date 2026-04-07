// this is for Interface 


interface User {
    name: string;
    age: number;
    phone: number;
}



class RegisteredUser implements User {
    name: string;
    age: number;
    phone: number;

    constructor(name: string, age: number, phone: number) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
}



