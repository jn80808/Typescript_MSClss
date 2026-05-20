type Dog = {
    name: string;
    breed: string;
    barks: boolean;
}


type Cat = {
    name: string;
    breed: string;
    purrs: boolean;
}

type DogandCatUnion = Dog | Cat; //union type for Dog and Cat

let pet1: DogandCatUnion = {
    name: "Buddy",
    breed: "Golden Retriever",
    barks: true
}

let pet2: DogandCatUnion = {
    name: "Whiskers",
    breed: "Siamese",
    purrs: true
}


let hybridPet: DogandCatUnion = {
    name: "Hybrid",
    breed: "Mixed",
    barks: true,
    purrs: true
} 


let partialDog : DogandCatUnion = {
    name: "PartialDog",
    breed: "Unknown",
    //barks: true // so here since we will mean to use dog need ideclare lahat ng properties ni dog pero since na wawala na yung isang property mag kakaerror sya 
    // purrs is missing but it's allowed because it's a union type and this object can be treated as a Dog
}



