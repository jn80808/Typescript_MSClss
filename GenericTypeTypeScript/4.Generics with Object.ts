//------------------- key value pair any ------------------//
//so here we have a key value pair and the type of key and value is any



//key value pair: 

let stringNumberPair ={
    key : "age",
    value : 30
}

let NumberStringPair = {
    key : 130,
    value : ["a"]
}

//the problem here is that key is any type and value is any type 
//now we want that key and value is specific type 

//------------------- key value pair specific type  ------------------//

type KeyValuePair<K, V> = {
    key: K,
    value: V
}


let stringNumberPair1: KeyValuePair<string, number> = { 
    key : "age",
    value : 30
}

let NumberStringPair1: KeyValuePair<number, string[]> = {
    key : 130,
    value : ["a"]
}

//------------------- key value pair function   ------------------//

type HasId = {
    id: string
}

function printId<T extends HasId> (obj: T) {
    console.log(obj.id);
}

//--alternative way to write the same function--//
function printId1 (obj: HasId) {
    console.log(obj.id);
}


const user = {
    id: "123",
    name: "John"
}

printId(user); // Output: "123"
printId1(user); // Output: "123"

const product = {
    name: "Laptop"
}

//printId(product); // Error: Argument of type '{ name: string; }' is not assignable to parameter of type 'HasId'.
//printId1(product); // Error: Argument of type '{ name: string; }' is not assignable to parameter of type 'HasId'.

//-- with id 
const productWithId = {
    id: "456",
    name: "Smartphone"
}

printId(productWithId); // Output: "456"
printId1(productWithId); // Output: "456"


















