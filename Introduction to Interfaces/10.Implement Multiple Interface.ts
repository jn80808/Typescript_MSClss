
enum AutomobileTypes {
    car = "car",
    bus = "bus",
    van = "van",
    truck ="truck",
    bike = "bike",
}



enum AutomobileBrands {
    ferrari = "ferrari",
    honda = "honda",
    bmw ="bmw",
    toyota = "toyota",

}


enum AutomobileColors {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver",
}


//Generic : <Type, Brand, Colors>
interface Automobile<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;

}


//EX.1 Create Truck Car that Implement Automobile Interface 
class Truck implements Automobile<string, AutomobileBrands, AutomobileColors> {
    public type: string = "truck";

    constructor(
        public brand: AutomobileBrands,
        public colors: AutomobileColors[],
        public description: string
    ) {}
}


//Create an intance of Truck Class 

const toyotaTruck: Truck = new Truck(
    AutomobileBrands.toyota,
    [AutomobileColors.black, AutomobileColors.silver],
    "This is a Toyota Truck"
);


console.log(toyotaTruck);

// OUTPUT :
// Truck {
//   type: "truck",
//   brand: "toyota",
//   colors: ["black", "silver"],
//   description: "This is a Toyota Truck"
// }





