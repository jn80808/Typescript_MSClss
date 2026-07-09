
//------------------------------interface with hardcoded types -----------------------------
// interface with hardcoded types 
interface Automobile {
    type: string;
    brand: string;
    colors: string[];
    description: string;

}


//------------------------------interface with generic types -----------------------------
//Generic : <Type, Brand, Colors>
interface Automobile1<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;

}


//------------------------------interface with generic types with enum and brands  ----------------------------- 

// We can use a generic type for the `colors` property to make the `Automobile` interface more flexible.

// With generics, different users can provide their own types when using the `Automobile` interface. This allows the same interface to create many different kinds of automobile objects without changing its definition.

// Since the `Automobile` interface does not have a fixed implementation, it is reusable and can work with a variety of data types.

// To make the interface more structured, let's create some enums for the automobile's type, brand, and colors.

// First, we'll create an enum called `AutomobileTypes`. This enum defines the different types of automobiles that our interface can represent.

// The available types are:

// * `car`
// * `bus`
// * `van`
// * `truck`
// * `bike`

// Now that we have an enum for automobile types, the next step is to create an enum for automobile brands.

enum AutomobileTypes {
    car = "car",
    bus = "bus",
    van = "van",
    truck ="truck",
    bike = "bike",
}


// Let's add some brands to this particular enum.

// So you can see my automobile brand enum has now a few brands that we can work with.


enum AutomobileBrands {
    ferrari = "ferrari",
    honda = "honda",
    bmw ="bmw",
    toyota = "toyota",

}

// And finally, let's go ahead and create an enum for available colors as well, and add some available

// colors to automobile colors.

// Enum I'm going to create a new enum called Automobile Colors.

// And I will add some colors to it.


enum AutomobileColors {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver",
}


// Now, since we have our enums in place, we would go ahead and create interfaces from these enums.

// Finally, we are also going to create objects using those interfaces using generics for automobiles for next topic 


