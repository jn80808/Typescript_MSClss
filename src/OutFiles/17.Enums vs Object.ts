enum Direction {
    Up,     //0
    Down,   //1
    Left,   //2
    Right   //3
}

//Whenever you use an enum with this kind of a "const" keyword, this enum is not compiled to JavaScript
const enum EDirection {
    Up,     //0
    Down,   //1
    Left,   //2
    Right   //3
}


let eDirection: EDirection = EDirection.Up;
let direction: Direction = Direction.Up;

// Enums with the const modifier are inlined at compile time, meaning that the enum values are replaced with their corresponding numeric values in the generated JavaScript code. 
// This can lead to more efficient code, as it eliminates the need for an additional object to hold the enum values at runtime. 
// However, it also means that you cannot use features like reverse mapping or dynamic access to enum members when using const enums.

//when this compile in javascript it will be like this

/*
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
}
)(Direction || (Direction = {}));

let eDirection = 0 /* Up */;
//let direction = 0 /* Up */;



// In contrast, regular enums are compiled to JavaScript as an object that contains the enum members and their corresponding values.
// only without const is compiled to JavaScript as an object that contains the enum members and their corresponding values.
// where the one with const is not compiled to JavaScript and the values are inlined at compile time.


//example of just using const without enum
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
} as const; // using 'as const' to make the object properties readonly

// In this case, ODirection is just a regular object with properties that represent the directions and their corresponding values. 
// The 'as const' assertion is used to make the properties of the object readonly, which means that they cannot be modified 
// after they are defined.


// In this case, ODirection is just a regular object with properties that represent the directions and their corresponding values.

ODirection.Up = 5; // Error: Cannot assign to 'Up' because it is a read-only property.

// In summary, enums are a powerful feature in TypeScript that allow you to define a set of named constants that can be used throughout your code. 
// They provide a way to represent a fixed set of related values and can help improve code readability and maintainability. 
// However, it's important to use them appropriately and consider the trade-offs between regular enums, const enums, and plain objects when deciding how to represent your data.



///---------- Computed Enums ----------

// Enums can also have computed values, where the value of an enum member is determined by a function or an expression. 
// However, computed enum members must be initialized with a constant expression, and they cannot reference other enum members.

enum AccessPermissions {
    None = 0,
    Read = 1, 
    Write = 2,
    ReadWrite = Read + Write, // typescript will be compute the value of ReadWrite as 3 (1 + 2) 
    Admin = ReadWrite + 4, // Admin will be computed as 7 (3 + 4)
    Delete = 8, // Delete will be assigned the value of 8
    all = ReadWrite + Delete // all will be computed as 11 (3 + 8)
}

console.log(AccessPermissions.None); // Output: 0
console.log(AccessPermissions.Read); // Output: 1
console.log(AccessPermissions.Write); // Output: 2
console.log(AccessPermissions.ReadWrite); // Output: 3
console.log(AccessPermissions.Admin); // Output: 7
console.log(AccessPermissions.Delete); // Output: 8
console.log(AccessPermissions.all); // Output: 11






