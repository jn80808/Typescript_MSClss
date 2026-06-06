

type Filter = {
    (array: number[], predicate: (item: number)=> boolean): number[];
    (array: string[], predicate: (item: string)=> boolean): string[];
    (array: object[], predicate: (item: object)=> boolean): object[];
}


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

console.log(filter1(numbers, predicate)); // Output: [8, 9, 10]


