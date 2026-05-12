// so here we will learn how we will strictly our nested object 
type Post = {
    title: string ;
    description: string;
    content: string;
    date: Date;
    author: { //nested object type
        name: string;
        email: string;
    }
}


let post: Post ={
    title: "Type Alias for objects",
    description: "Type Alias for objects in TypeScript",
    content:"Type aliases provide a way to create a new name for an existing type. This can make your code more readable and maintainable.",
    date: new Date(),
    author: { //this is nested object and we need to define its type as well in our Post type alias
        name: "John Doe",
        email: "john.doe@example.com"
    }
}



