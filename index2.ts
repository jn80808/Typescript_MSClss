//----------------------------------------------//
// 91.More Control Over Classes 
//---------------------------------------------//

class Person {
    public fullName: string;

    constructor(    
    public firstName: string,
    public lastName: string,
    public age: number
) {
    if (age > 200 || age < 0) {
        throw new Error("Age must be between 0 and 200");
    }

    this.fullName = `${firstName} ${lastName}`;
}

    // public getFullName(): string {
    //     return `${this.firstName} ${this.lastName}`;
    // }


}

const person1 = new Person("John", "Doe", 300);
const person2 = new Person("Jane", "Smith", -25);

// console.log(person1.getFullName());


console.log(person2.fullName);


//----------------------------------------------//
// 92.Using Mutators - Setters
//---------------------------------------------//



class Person2 {
    private _age?: number;

    constructor(  public firstName: string, public lastName: string) {}


    public set age(age: number) {
        if (age > 200 || age < 0) {
            throw new Error("Age must be between 0 and 200");
        }
        this._age = age;
}

    public FullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person3 = new Person2("John", "Doe");
const person4 = new Person2("Jane", "Smith");

// console.log(person1.getFullName());


console.log(person4.FullName());

// person4.age() = 25; // This will throw an error
person3.age = 300; // This will throw an error
person4.age = 25; // This will work fine











