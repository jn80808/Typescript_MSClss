//Enums 

const STATUS_LOADING = "loading";
const STATUS_SUCCESS = "success";
const STATUS_ERROR = "error";

// Using enums to define a set of named constants
enum Status {
    Loading = "loading",
    Success = "success",
    Error = "error"
}

// Using the enum values
let currentStatus: Status = Status.Loading;
if (currentStatus === Status.Loading) {
    console.log("The status is loading.");
}

// Enums provide a way to define a set of named constants, which can improve code readability and maintainability.
// Enums can be used to represent a fixed set of related values, such as status codes, directions, or user roles.
// Enums can also be numeric, where the values are automatically assigned based on their position in the enum.
enum Direction {
    Up,     //0
    Down,   //1
    Left,   //2
    Right   //3
}


let currentDirection: Direction = Direction.Up;

if (currentDirection === Direction.Up) {
    console.log("The direction is up.");
}

console.log (Direction.Up); // Output: 0 (the value of the Up enum member )
console.log (Direction.Down); // Output: 1 (the value of the Down enum member )
console.log (Direction.Left); // Output: 2 (the value of the Left enum member )
console.log (Direction.Right); // Output: 3 (the value of the Right enum member )


// this property when you declare value it cannot be changed and it will be assigned to the next value in the enum.
// and will be automatically a read only property.

//heres an example of trying to assign a new value to an enum member, which will result in a type error:
Direction.Left = 5 // Error: Cannot assign to 'Left' because it is a read-only property.

// Enums can also have string values, where you can assign specific string values to each enum member.



enum DirectionString{
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}

//try to assign a new value to an enum member with string values, which will also result in a type error:
DirectionString.Up = "UP"; // Error: Cannot assign to 'Up' because it is a read-only property.

// Enums can also have computed values, where the value of an enum member is determined by a function or an expression. 
// However, computed enum members must be initialized with a constant expression, and they cannot reference other enum members.

enum ComputedEnum {
    A = 1,
    B = A * 2, // Valid: B is computed based on A
    C = Math.random() // Error: C cannot be computed at compile time
}

ComputedEnum.C = 5; // Error: Cannot assign to 'C' because it is a read-only property.

// Enums can also have a mix of numeric and string values, but this is generally not recommended as it can lead to confusion and errors. 
// It's best to stick to one type of value for all enum members to maintain consistency and clarity in your code.


//Application of Enums in a real-world scenario

enum Roles {
    Admin = "admin",
    Author = "author",
    Reader = "reader",
    Editor = "editor"
}


type Person = {
    name:string;
    email:string;
    password:string;
    role: Roles; // Using the Roles "enum" to define the role property
}

const personE : Person = {
    name: "Alice",
    email: "alice.go@gmail.com",
    password: "password123",
    role: Roles.Admin // Assigning a value from the Roles enum
}

console.log(personE.role); // Output: "admin"
console.log(personE.role === Roles.Admin); // Output: true
console.log(personE.name); // Output: "Alice"
console.log(personE.email); // Output: "alice.go@gmail.com"

// In this example, we defined an enum called Roles to represent different user roles in an application.
// We then created a Person type that includes a role property of type Roles.
// Finally, we created an instance of the Person type and assigned a value from the Roles enum to the role property.




