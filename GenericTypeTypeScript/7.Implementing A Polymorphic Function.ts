



const filter = () => {    } ;

const filter1 = (array: any[], predicate: (item: any) => boolean) => {   
    let result: any[] = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
 } ;


 //-- create function for predicate that checks if a number is greater than 7
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 function predicate(num: number): boolean {
    return num > 7 ;
 }


let evenNumbers = filter1(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

let addedNumbers = filter1(numbers, (num) => num > 3);
console.log(addedNumbers); // Output: [4, 5]


// create a function for predicate that checks if an animal is a cat
let animials = ["cat", "dog", "rabbit", "hamster"];

function filterCat(item:string){
    return item === "cat";

}

console.log(filter1(animials, filterCat)); // Output: ["cat"]

console.log(filter1(numbers, predicate)); 
console.log(filter1(animials, filterCat)); 


let animalsWithA = filter1(animials, (animal) => animal.includes("a"));
console.log(animalsWithA); // Output: ["cat", "rabbit", "hamster"]







