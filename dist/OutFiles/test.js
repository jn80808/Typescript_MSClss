"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegisteredUser {
    constructor(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    greeting() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
