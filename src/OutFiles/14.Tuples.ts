let person1 = ["Alice", 30]; // Inferred as (string | number)[] : inferred is typescript will assign the type of the array as a union of the types of its elements, which is (string | number)[]

//declaring a tuple with specific types for each element
let person: [string, number] = ["Alice", 30]; // A tuple with a string and a number

// Accessing tuple elements
let name = person[0];
let age = person[1];

//so here the type should follow the order of the types defined in the tuple. If we try to assign values in a different order, it will result in a type error.
let person2: [string, number] = [25, charlie]; // Another tuple with a string and a number


// Tuples can also have optional elements by adding a question mark (?) after the type of the optional element
let personWithOptional: [string, number?] = ["Bob"]; // The age is optional


// Tuples can also have rest elements
let personWithRest: [string, ...number[]] = ["Charlie", 25, 35, 45]; // The rest of the elements are numbers

// Tuples can also have readonly elements
let readonlyPerson: readonly [string, number] = ["Dave", 40]; // The tuple is readonly and cannot be modified

// Tuples are useful for representing fixed-size collections of related values, such as a person's name and age, or a point in 2D space with x and y coordinates.




//Array vs tuple syntax 

//Array 
let personA: (number | string) [] = [25, "Alice", 3, "Bob", "the builder"]; // An array that can contain both numbers and strings

//Tuple

let personT: [number, string, number, string, string] = [25, "Alice", 3, "Bob", "the builder"]; // A tuple with specific types for each element

//so in Array type use ()=[] syntax 
// in Tuple type use [] = [] syntax with specific types for each element.

// at tuple if we want the array match to the type of the tuple [] we declare 

//  In summary, arrays are more flexible and can contain any number of elements of the same type
//  while tuples are more rigid and have a fixed number of elements with specific types.

// in Tuple the data type is arrange order  and the value should be in the same order as the type defined in the tuple. 
// If we try to assign values in a different order, it will result in a type error.


