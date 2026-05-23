enum ShapeKind {
    Circle = "circle",
    Square = "square",
    Rectangle = "rectangle"
}

type Circle = {
    kind: ShapeKind.Circle; //Here enum is acting as a type and we are using it to define the kind property of the Circle type.
    radius: number;
}

type Square = {
    kind: ShapeKind.Square; //Here enum is acting as a type and we are using it to define the kind property of the Square type.
    sideLength: number;
}

type Rectangle = {
    kind: ShapeKind.Rectangle; //Here enum is acting as a type and we are using it to define the kind property of the Rectangle type.
    width: number;
    height: number;
}

type Shape = Circle | Square | Rectangle;

let rectangle1: Shape = {
    kind: ShapeKind.Rectangle, //Here enum is acting as a type and we are using it to define the kind property of the rectangle1 variable.
    width: 10,
    height: 5,
}

console.log(rectangle1.kind); // Output: "rectangle"
console.log(rectangle1.width); // Output: 10
console.log(rectangle1.height); // Output: 5

console.log(rectangle1.height * rectangle1.width); // Output: 50 (calculating the area of the rectangle)


// In this example, we have defined an enum called ShapeKind that represents different types of shapes.

//example of error when we try to assign a value that is not part of the enum

let circle1 : Circle = {
    kind: ShapeKind.Square, // as you can see kind is getting an error so we need to assign the value of kind property to the corresponding enum member which is ShapeKind.Circle
    radius: 5
}

//using function to calculate the area of a shape based on its kind

function printShapeArea(shape: Shape) {
    switch (shape.kind) {
        case ShapeKind.Circle:
            console.log(`Area of the circle: ${Math.PI * shape.radius * shape.radius}`);
            break;
        case ShapeKind.Square:
            console.log(`Area of the square: ${shape.sideLength * shape.sideLength}`);
            break;
        case ShapeKind.Rectangle:
            console.log(`Area of the rectangle: ${shape.width * shape.height}`);
            break;
        default:
            console.log("Unknown shape");
    }
}

printShapeArea(rectangle1); // Output: Area of the rectangle: 50

printShapeArea({
    kind: ShapeKind.Circle,
    radius: 5
}); // Output: Area of the circle: 78.53981633974483

printShapeArea({
    kind: ShapeKind.Square,
    sideLength: 4
}); // Output: Area of the square: 16

// In this example, we have defined a function called printShapeArea that takes a Shape as an argument and calculates its area based on its kind.


