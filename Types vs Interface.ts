
//--------------------------------------------------------------//
// 124. Type Alias vs Interface in TypeScript
//-------------------------------------------------------------//


//-----------------------------------------Type types----------------------------------//
// The first advantage of using interfaces over types is that interfaces can be extended and implemented by classes, 
// while types cannot be extended or implemented by classes. 

//-------- Type Alias ---------//
//The first advantage of using types over interfaces is that types provide us with the ability to create
//union types, as well as intersection types.
// type use type keyword 

type UserType = {
    name:string
}


type AdminUserType ={
    isAdmin: boolean;
}

//-------- Intersection Types  ---------//
// Use &
// so UserType & AdminUserType means that the userAdmin variable must have all the properties of both UserType and AdminUserType, 
// so it must have a name property of type string and an isAdmin property of type boolean, so here we have created a userAdmin variable 
// that has both properties name and isAdmin, and we have assigned it a value of "joy" for the name property and true for the isAdmin property,
//  so this variable is of type UserType & AdminUserType because it has all the properties of both types, so we can use this variable to create
//  objects that have all the properties of both types.

const userAdmin : UserType & AdminUserType = {
    name: "joy",
    isAdmin: true,
}



//-------- Union Types  ---------//
// Use |
// so UserType | AdminUserType means that the userOrAdmin variable can be "either" of type UserType or of type AdminUserType,
// So these kind of union types are possible with custom types but are not possible with interfaces.
// so here we have created a userOrAdmin variable that can be either of type UserType or of type AdminUserType,
// so this variable is of type UserType | AdminUserType because it can be either of type UserType or of type AdminUserType, 

const userOrAdmin : UserType | AdminUserType = {
    name: "joy",
    isAdmin: true,
}


//-------- Tuples Types  ---------//

// another use case for using types is if you want to declare tuples.
// Tuples can be declared using type keywords.
// However, tuples cannot be declared using interfaces.
// tuple use [ ] that means a array 
// so here we have declared a tuple type called ResponseTuple that has three elements, the first element is of type number, 
// the second element is of type string and the third element is of type boolean, so this tuple can be used to create variables that have these three elements in this specific order, 
// so here we have created a variable called response that is of type ResponseTuple and we have assigned it a value of [200, "OK", true], 
// so this variable is of type ResponseTuple because it has the three elements in the specific order as defined in the tuple type, 
// so we can use this variable to create objects that have these three elements in this specific order.

type ResponseTuple = [number, string, boolean];

const response: ResponseTuple = [200, "OK", true];



//-----------------------------------------Interface types----------------------------------//


//what makes them different from type
//declarations.
//One of the major differences is that TypeScript automatically merges two interfaces with the same name,
//but that does not happen in case of types



// --@Type : 
// we redeclare the type we got an error 
// the error show is Duplicate identifier 'UserType1'.ts(2300)
type UserType1 = {
    name: string;
}

type UserType1 = {
    age: number;
}

//--@Interface : 
// here we can redeclare the interface and it will not give us an error 
// because TypeScript automatically merges two interfaces with the same name

interface PersonA {
    name: string;
}

interface PersonA {
    lastName: string;
}


const person1A: PersonA = {
    name: "joy",
    lastName: "Ng"
}


// The second major difference is that interfaces can extend each other, whereas types cannot.


interface Name {
    name: string;
}

interface LastName {
    lastName: string;
}

interface PersonB extends Name, LastName {  // here we have created a new interface called PersonB that "extends" both Name and LastName interfaces, so now the PersonB interface has all the properties of both Name and LastName interfaces, so it has a name property of type string and a lastName property of type string, so we can use this PersonB interface to create objects that have both name and lastName properties.
}


const personB: PersonB = {
    name: "joy",
    lastName: "Ng"
}


// Also, implementation of multiple interfaces is possible when you use them in conjunction with classes.
// So the person interface can here be called as a class as well.




interface NameC {
    name: string;
}

interface LastNameC {
    lastName: string;
}

// interface PersonB extends Name, LastName {  // here we have created a new interface called PersonB that "extends" both Name and LastName interfaces, so now the PersonB interface has all the properties of both Name and LastName interfaces, so it has a name property of type string and a lastName property of type string, so we can use this PersonB interface to create objects that have both name and lastName properties.
// }

//From Interface Convert to Class
class PersonC implements NameC, LastNameC { // here we have created a new class called PersonC that "implements" both NameC and LastNameC interfaces, so now the PersonC class has all the properties of both NameC and LastNameC interfaces, so it has a name property of type string and a lastName property of type string, so we can use this PersonC class to create objects that have both name and lastName properties.
    constructor(
        public name: string,
        public lastName: string
    ) {}
}


const personC: PersonC = {
    name: "joy",
    lastName: "Ng"
}

const personCwithClass: PersonC = new PersonC("joy", "Ng");



//125. is in the file Abstract Classes vS interfaces.ts  
