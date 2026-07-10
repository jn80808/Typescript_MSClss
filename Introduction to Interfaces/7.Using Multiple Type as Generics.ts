
//------------------------------interface with generic types -----------------------------
//Generic : <Type, Brand, Colors>
interface Automobile1<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;

}



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
