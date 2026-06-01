type HasLength ={
    length: number;
}

//<T extends HasLength> means that the type parameter T must be a subtype of HasLength, which means that it must have a length property of type number. This allows us to safely access the length property of item within the function without causing a type error.
//This generic declaration over here ensures that T would be a type that has a length property assigned to it.
//void : function does not return anything, so the function would be void.
//<T extends HasLength> : is know as generic constraint, it is a way to restrict the types that can be used as type arguments for a generic type or function. In this case, we are saying that T must be a subtype of HasLength, which means that it must have a length property of type number. This allows us to safely access the length property of item within the function without causing a type error.
function logLength<T extends HasLength>(item: T): void {
    console.log(item.length);
}

logLength("Hello, world!"); // Output: 13 :TypeScript will not throw an error.This is because strings do have a length property attached to them.
logLength([1, 2, 3, 4, 5]);
logLength({ length: 10, name: "Test" }); // Output: 10

//logLength(123); // Error: Argument of type 'number' is not assignable to parameter of type 'HasLength'.
//logLength({ name: "Test" }); // Error: Argument of type '{ name: string; }' is not assignable to parameter of type 'HasLength'.
//logLength({ length: "10" }); // Error: Argument of type '{ length: string; }' is not assignable to parameter of type 'HasLength'. Type 'string' is not assignable to type 'number'.

