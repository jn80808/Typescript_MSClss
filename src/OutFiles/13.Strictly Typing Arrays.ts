//ex.1 without declaring types for arrays
let a = [1,2,3]; //inferred as number[] (array of numbers)
let b = ["a", "b", "c"];
let c = [1, "a", true]; //inferred as (number | string | boolean)[] (array of union types)

//ex.2 with explicitly declaring types for arrays
let d: number[] = [1, 2, 3]; //explicitly typed as an array of numbers
let e: string[] = ["a", "b", "c"];
let f: (number | string | boolean)[] = [1, "a", true]; //explicitly typed as an array of union types


// strictly typing arrays helps catch errors at compile time and provides better code readability and maintainability. 
// It ensures that only the specified types of elements can be added to the array, preventing unintended type errors.




