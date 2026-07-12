

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




//--- EX.1
const ferrari: Automobile<AutomobileTypes,AutomobileBrands, AutomobileColors>={
        type: AutomobileTypes.car,
        brand: AutomobileBrands.ferrari,
        colors: [AutomobileColors.black, AutomobileColors.red],
        description: "This is a Ferrari",

}


//--- EX.2
//<string, string, string> - generic type (generic data type )
const honda: Automobile<string, string, string> = {
    type: "car",
    brand: "Honda",
    colors: ["silver", "black"],
    description: "This is a Honda",
}


//--- EX.3
//<string, AutomobileBrands, number> - generic type (generic data type )
const toyota : Automobile<string, AutomobileBrands, number> = {
    type: "car",
    brand: AutomobileBrands.toyota,
    colors: [6676, 97897],
    description: "This is a Honda",
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





