// readonly array and tuple can be defined using the readonly modifier. 

let numbers: readonly number[] = [1, 2, 3]; // A readonly array of numbers

// numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'

let person: readonly [string, number] = ["Alice", 30]; // A readonly tuple with a string and a number

// person[0] = "Bob"; // Error: Cannot assign to '0' because it is a read-only property
// person[1] = 25; // Error: Cannot assign to '1' because it is a read-only property

// Readonly arrays and tuples are useful when you want to ensure that the data cannot be modified after it has been created.
// They provide a way to enforce immutability and prevent accidental changes to the data, 
// which can help improve code safety and maintainability.


