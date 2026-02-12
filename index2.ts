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


//----------------------------------------------//
// 93.Using Accessors - Getters
//---------------------------------------------//

class Person3 {
    private _age?: number;

    constructor(  public firstName: string, public lastName: string) {}


    public set age(age: number) {
        if (age > 200 || age < 0) {
            throw new Error("Age must be between 0 and 200");
        }

        this._age = age;
}


    public get age(): number | undefined {
        if (this._age !== undefined ) {
            throw new Error("Age must be between 0 and 200");
        }


        return this._age;
    }

    public FullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person5 = new Person3("John", "Doe");
const person6 = new Person3("Jane", "Smith");

// console.log(person1.getFullName());


console.log(person6.FullName());

// person4.age() = 25; // This will throw an error
person5.age = 300; // This will throw an error
person6.age = 25; // This will work fine


//----------------------------------------------//
// 94.Static Members
//---------------------------------------------//

class Counter {
    static count=  0;  
    
    static increment() {    
        Counter.count++;
    }

}


console.log(Counter.count); // Output: 0
Counter.increment();
console.log(Counter.count); // Output: 1

Counter.increment();
console.log(Counter.count); // Output: 2    

const counter1 = new Counter();
counter1.increment(); // Error: Property 'increment' does not exist on type 'Counter'.
const counter2 = new Counter(); 










