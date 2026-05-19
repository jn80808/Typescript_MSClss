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





