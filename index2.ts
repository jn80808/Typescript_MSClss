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



//----------------------------------------------//
// 95.Understanding Static Blocks
//---------------------------------------------//

function loadInitialCount(): number {
    console.log("Loading initial count...");
    return 5; // Simulate loading from a database or configuration
}


class Counter1 {
    static count=  0;  
    
    static increment() {    
        Counter.count++;
    }

    static {
        console.log("Initilizing Counter class.");
        //Counter.count = 5; // Initialize count to 5
        Counter.count = loadInitialCount(); // Initialize count using a function
    }
}


console.log(Counter1.count); // Output: 5
Counter1.increment();
console.log(Counter1.count); // Output: 6

Counter1.increment();
console.log(Counter1.count); // Output: 7    

const counter3 = new Counter1();
const counter4 = new Counter1   (); 



function loadInitialCount1(): number {
    console.log("Loading initial count...");
    return 10; 
}


class Counter2 {
    static count=  0;  
    
    static increment() {    
        Counter2.count++;
    }

    static {
        console.log("Initilizing Counter class.");
        //Counter.count = 5; // Initialize count to 5
        Counter2.count = loadInitialCount1(); // Initialize count using a function
    }
}


console.log(Counter2.count); // Output: 5
Counter2.increment();
console.log(Counter2.count); // Output: 6

Counter2.increment();
console.log(Counter2.count); // Output: 7    

const counter5 = new Counter2();
const counter6 = new Counter2   (); 



//----------------------------------------------//
// 96. Generics with classes 
//---------------------------------------------//

class Box {
    private _value: any;

    constructor(value: any) {
        this._value = value;
    }       

    get value(): any {
        return this._value;
    }

    set value(newValue: any) {
        this._value = newValue;
    }   

}

const numberBox1 = new Box(123);
console.log(numberBox1.value); // Output: 123    
numberBox1.value = 456;
console.log(numberBox1.value); // Output: 456
numberBox1.value = "Hello"; // Error: Type 'string' is not assignable to type 'number'


//use generic type T to represent the type of value stored in the box. This allows us to create boxes that can hold any type of value, 
// while still providing type safety.
class Box2<T> {
    private _value: T;

    constructor(value: T) {
        this._value = value;
    }       

    get value(): T {
        return this._value;
    }

    set value(newValue: T) {
        this._value = newValue;
    }   

}

const numberBox = new Box2<number>(123);
console.log(numberBox.value); // Output: 123    
numberBox.value = 456;
console.log(numberBox.value); // Output: 456
numberBox.value = "Hello"; // Error: Type 'string' is not assignable to type 'number'


const stringBox = new Box2<string>("Hello");
console.log(stringBox.value); // Output: Hello
stringBox.value = "World";
console.log(stringBox.value); // Output: World
stringBox.value = 123; // Error: Type 'number' is not assignable to type 'string'


//----------------------------------------------//
// 97. Generics Use Case
//---------------------------------------------//

//ORIGINAL CODE Extends 
class Repository{   
    private items: any[] = [];

    add(item: any): void {
        this.items.push(item);
    }

    getAll(): any[] {
        return this.items;
    }

    getById(id: number): any {
        return this.items.find(item => item.id === id);
    }   

    removebyId(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }   

    
}


//with generic type of <T> and type of class with id that will use to  extends generic type T. 
// This allows us to create repositories for different types of items, 
// while still ensuring that each item has an id property that can be used for retrieval and deletion.


type Identifiable = { id: number };

class Repository2<T extends Identifiable> {   
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }

    getById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }   

    removebyId(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }   

    
}

type User = { 
    id: number; 
    name: string;
    email: string;
};

const userRepository = new Repository2<User>();
userRepository.add({ id: 1, name: "John Doe", email: "john@example.com" });
userRepository.add({ id: 2, name: "Jane Smith", email: "jane@example.com" });
userRepository.add({ id: 3, name: "Bob Johnson", email: "bob@example.com" });

console.log(userRepository.getAll());
console.log(userRepository.getById(2));
userRepository.removebyId(2);
console.log(userRepository.getAll());   


//----------------------------------------------//
// 98.Concreate Implementation With User Type
//---------------------------------------------//




type Identifiable1 = { id: number };

class Repository3<T extends Identifiable1> {   
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }

    getById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }   

    removebyId(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }   

    
}

type User1 = Identifiable1 & { 
    name: string;
    email: string;
};

type Book = Identifiable1 & {
    title: string;      
    ISBN: string;
};


//USER REPOSITORY
const userRepository1 = new Repository3<User1>();
userRepository1.add({ id: 1, name: "John Doe", email: "john@example.com" });
userRepository1.add({ id: 2, name: "Jane Smith", email: "jane@example.com" });
userRepository1.add({ id: 3, name: "Bob Johnson", email: "bob@example.com" });

console.log(userRepository1.getAll());
console.log(userRepository1.getById(2));
userRepository1.removebyId(2);
console.log(userRepository1.getAll());   


//BOOK REPOSITORY
const bookRepository = new Repository3<Book>();
bookRepository.add({ id: 1, title: "The Great Gatsby", ISBN: "978-0743273565" });
bookRepository.add({ id: 2, title: "To Kill a Mockingbird", ISBN: "978-0061120084" });
bookRepository.add({ id: 3, title: "1984", ISBN: "978-0451524935" });

console.log(bookRepository.getAll());
console.log(bookRepository.getById(2));
bookRepository.removebyId(2);
console.log(bookRepository.getAll());


//----------------------------------------------//
// ----100.Composing New Classes With Mixins----//
//----------------------------------------------!

function Timestamped<T extends new (...args: any[]) => {}>(Base: T) {
    return class extends Base {
        timestamp = new Date();
    };
}

class User2 {
    constructor(public name: string, public email: string) {}
}

const TimestampedUser = Timestamped(User2);
const user = new TimestampedUser("John Doe", "john@example.com");
console.log(user.name); // Output: John Doe
console.log(user.email); // Output: john@example.com
console.log(user.timestamp); // Output: current date and time






