
//In real world use case, it might be just adding the value to the database but not returning anything.
//What would you do in such a scenario.
//How would you strictly type this function.
//There is a type available and this type is called void.

function writeToDatabase (value: string){
    console.log("Writing to a database", value);
}

//-------------------- Void ------------//

// Void is a special TypeScript type which is used with functions that do not return anything.
// So for any function that does not return anything, you can use void.
// In fact, there are two types in TypeScript that signify that the function would not return anything.
// The first one is void.
// The second one is never.

//----------- Void Vs Never ---------------//

// The difference between void and never is that you assign a never type to a function that never completes
// its execution.
// So especially to a function that throws an error void function over here would complete its execution.
// It just does not return anything.
// Never, however, would never complete the execution.


//void 
function writeToDatabase1(value: string):void { //so here just added now 
    console.log("Writing to a database", value);
}

//never and void can be use here but the correct need to use is never since this not complited
function throwErrornever(error:string): never{
    throw new Error(error);
}

function throwErrorvoid(error:string): void{
    throw new Error(error);
}

//so here we try to assign a never but its getting error since this function will be complited 
function writeToDatabase21(value: string):never { //so here just added now 
    console.log("Writing to a database", value);
}


type check = never extends void? true: false;
type check2 = void extends never? true: false;










