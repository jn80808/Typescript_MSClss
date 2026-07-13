
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




class Car implements Automobile<string, AutomobileBrands, AutomobileColors> {
    public type: string = "car"; 

    constructor(
        public brand: AutomobileBrands, 
        public colors: AutomobileColors[], 
        public description: string      
    ) {}
}

const ferrariCar: Car = new Car(
    AutomobileBrands.ferrari,
    [AutomobileColors.red, AutomobileColors.black],
    "This is a Ferrari"
);

console.log(ferrariCar);


// output : 
// Car {
//   type: "car",
//   brand: "ferrari",
//   colors: ["red", "black"],
//   description: "This is a Ferrari"
// }




