//--------------- Key of Operator ------------------//


//keyof operator is used to get the keys of an object type as a union of string literal types. 
// It is often used in combination with mapped types to create new types based on the keys of an existing type.


//the key of operator is used in order to create a union of all the keys of an object.
// So the moment you use key of operator, it generates a new type, which is actually a union of all the
// properties or keys of an object.

type Events = {
    id: number;
    date: Date;
    type: "indoor" | "outdoor";
}

//So if I wanted to create another type that was a union of ID, date and type, I could use the key of operator.

type UnionOfkeysOfEvents = keyof Events; // UnionOfkeysOfEvents is now a union of "id" | "date" | "type" so its a union of all the keys of the Events type.
                                         // Do remember Keyof operators only work with object types.



let idOfEvents: UnionOfkeysOfEvents = "id"; // idOfEvents can only be assigned the value of "id", "date" or "type" because it is a union of those keys.

let idOfEvents1: UnionOfkeysOfEvents = "name"; // Error: Type '"name"' is not assignable to type 'UnionOfkeysOfEvents' because "name" is not a key of the Events type at line 9 

let dateOfEvents: UnionOfkeysOfEvents = "date"; // dateOfEvents can only be assigned the value of "id", "date" or "type" because it is a union of those keys.

let typeOfEvents: UnionOfkeysOfEvents = "type"; // typeOfEvents can only be assigned the value of "id", "date" or "type" because it is a union of those keys.



//--------------- index signature with keyof operator ------------------//
//index signature have a 2 types 
//1. number index signature : [key: number] : any
//2. string index signature : [key: string] : any


//---@ [key: number] Index Signature : This is a first type of an index signature where all the properties are of the type numbers.
type Number = {
    [key: number]: string; // this means that any key of type string can be assigned a value of type number.
}
// So what if I were supposed to use Keyof operator along with this kind of an index signature where all the keys are numbers?

type NumericKeyOf = keyof Number; // NumericKeyOf is now of type number because the keys of the Number type are of type number.

let numericKey: NumericKeyOf = 1; // numericKey can only be assigned a number because it is of type number.

//---@[key: string]  Index Signature : This is a second type of an index signature where all the properties are of the type string.

type String = {
    [key: string]: number; // this means that any key of type string can be assigned a value of type number.
}

type StringKeyOf = keyof String; // StringKeyOf is now of type string because the keys of the String type are of type string.

let stringKey: StringKeyOf = "name"; // stringKey can only be assigned a string because it is of type string.


//---- 

type NumberStringPair = {
    [key: string] : string ; 
}

type NumberStringPairKeyOf = keyof NumberStringPair; // NumberStringPairKeyOf is now of type string because the keys of the NumberStringPair type are of type string.

let numberStringPairKey: NumberStringPairKeyOf = "age"; // numberStringPairKey can only be assigned a string because it is of type string.


//numberStringPairKey is string | number because the keys of the NumberStringPair type can be of type string or number.
// We get a union of numbers as well as a string, because this is how JavaScript objects work behind the scenes.
// Object keys in JavaScript are always coerced to string, even if they are numbers.
// That is the reason TypeScript considers this kind of a type where you already have a key not just as
// a string, but a union of string and number, because TypeScript understands that number as well as
// a string can be used.

let stringObject : NumberStringPair = {
    0: "first",
    second: "second"
};

console.log(stringObject["0"]); // Output: "first"
console.log(stringObject["second"]); // Output: "second"



//------------------- combination   ------------------//


type Person = {
    name?:string;
    age?: string;
    address?: string;
}

type PartialPerson = {
    [K in keyof Person]?: Person[K] | null; // PartialPerson is now a type where all the properties of the Person type are optional.
}


let partialPerson: PartialPerson = {
    name: "John",
    age: null,
    address: "123 Main St"
};

console.log(partialPerson.name); // Output: "John"
console.log(partialPerson.age); // Output: null
console.log(partialPerson.address); // Output: "123 Main St"



let partialPerson1: PartialPerson = {
    name: "John"
};


console.log(partialPerson1.name); // Output: "John"
console.log(partialPerson1.age); // Output: undefined
console.log(partialPerson1.address); // Output: undefined
console.log(partialPerson1.address); // Output: undefined
console.log(partialPerson1.address); // Output: undefined










type KeyValuePair<K extends string, V> = {
    key: K;
    value: V;
}

type EventKeyValuePair = KeyValuePair<keyof Events, string>; // EventKeyValuePair is now a type that has a key property that can only be "id", "date" or "type" and a value property that is of type string.





