//intersection types allow us to combine multiple types into one. 
// This is useful when we want to create a type that has all the properties of multiple types.
//intersection types are similar to union types, 
// but instead of allowing a value to be one of several types, it requires a value to be all of the specified types.


type Cat ={
    name: string; //common property between Cat and Dog
    purrs: boolean; //unique property for Cat
    color: string; //common property between Cat and Dog
}

type Dog = {
    name: string; //common property between Cat and Dog
    barks: boolean; //unique property for Dog
    breed: string; //unique property for Dog
    color: string; //common property between Cat and Dog
}

type CatDog = Cat & Dog; //intersection type that combines properties of both Cat and Dog

const myPet: CatDog = {
    name: "Fluffy", //common property
    purrs: true,    //unique property for Cat
    barks: false,   //unique property for Dog
    breed: "Mixed", //unique property for Dog
    color: "Brown"  //common property
};

console.log(myPet);

//ex.2

type Employee = {
    name: string;
    employeeId: number;
    department: string;
}

type Manager = {
    name: string;
    employeeId: number;
    department: string;
    managesTeam: boolean;
}

type EmployeeManager = Employee & Manager; //intersection type that combines properties of both Employee and Manager

const manager: EmployeeManager = {
    name: "Alice",
    employeeId: 123,
    department: "Sales",
    managesTeam: true
};


console.log(manager);








