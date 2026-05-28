// let's talk about asynchronous functions and how you can strictly type async functions
// in TypeScript.
// Asynchronous functions in JavaScript always return a promise.
// We use the async keyword when defining asynchronous functions in JavaScript.



//-------having Promise string ----------//
async function fethFromDatabase(id: number) : Promise<any> {}


//-------having Promise any ----------//
const anotherAsyncFunction = async (): Promise<any> => {};



//-------having Promise string ----------//
async function returnString(id:number): Promise<string>{
    return Promise.resolve("string")
}


//-------having Promise type ----------//
type User = {
    name: string; 
    age: number;
}

async function returnUser(id: number){
    return Promise.resolve({name:"joy", age:28})
}

async function returnUser1(id: number): Promise<User>{
    return Promise.resolve({name:"joy", age:28})
}
















