type GetFirstElement = <T>(arr: T[]) => T | undefined;



const getFirstElement: GetFirstElement = (arr)=>{
    return arr[0];
}


const numberArray = [1,2,3,4,5];
const stringArray = ["a", "b", "c", "d", "e"];

console.log(getFirstElement(numberArray)); // Output: 1
console.log(getFirstElement(stringArray)); // Output: "a"

let numberOutput  = getFirstElement<number>(numberArray); // TypeScript infers numberOutput as number 

let numberOutput1  = getFirstElement(numberArray); // TypeScript infers numberOutput as number or undefined because the function can return undefined if the array is empty

let stringOutput  = getFirstElement<string>(stringArray); // TypeScript infers stringOutput as string

let stringOutput1  = getFirstElement(stringArray); // TypeScript infers stringOutput as string or undefined because the function can return undefined if the array is empty


//------------------- Example: The Generic Function is in inside ------------------

//so now this is different from above 
//A
type FirstElement <T> = (arr: T[]) => T | undefined;

//VS 
// B
type GetirstElement = <T>(arr: T[]) => T | undefined;

//so here the type of the function is different from above because here we are using the generic type in the type alias 
// and in above we are using the generic type in the function declaration


//@A : Generic on the type alias itself <T>  belongs to the type alias.
//Think of it as: 
type FirstElement1<number1> = (arr: number1[]) => number1 | undefined;
type FirstElement2<string2> = (arr: string2[]) => string2 | undefined;

// Type Alias
//     │
//     └── T
//          │
//          └── Function

type FirstElement3<T> = (arr: T[]) => T | undefined;

const getNumber: FirstElement3<number> =
    (arr) => arr[0];

getNumber([1, 2, 3]); // OK
getNumber(["a"]);     // Error

//@A : its only work on the number you specify <> at line 52 
// so if you want a string type you have to create another type alias for string and so on 


//@B : Generic on the function declaration <T> belongs to the function declaration.
//the type alias itself is not generic Instead, it describes a generic function.
//Think of it as: 
type GetirstElement1 = <number1>(arr: number1[]) => number1 | undefined;
type GetirstElement2 = <string2>(arr: string2[]) => string2 | undefined;


// Type Alias
//     │
//     └── Generic Function
//             │
//             └── T


type GetFirstElement1 = <T>(arr: T[]) => T | undefined;

const getFirst: GetFirstElement1 =
    (arr) => arr[0];

getFirst([1, 2, 3]);      // number
getFirst(["a", "b"]);     // string
getFirst([true]);         // boolean

//@B : its work on any type you specify <> at line 72  because the generic type is on the function declaration 
// not on the type alias itself.

