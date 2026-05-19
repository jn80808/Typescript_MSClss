type Author ={
    name: string;
    email: string;
    age?: number; //optional property to allow for cases where age may not be provided
    readonly type : "human" | "ai"; //readonly property to ensure that the type of author cannot be changed after it is set
}

let post = {
    title: "Type Alias for objects",
    description: "Type Alias for objects in TypeScript",
    content:"Type aliases provide a way to create a new name for an existing type. This can make your code more readable and maintainable.",
    date: new Date(),
    author:  {
        name: "John Doe",
        email: "john.doe@example.com",
        age: 30,
        type: "human"
    } as Author
};

post.author.type = "ai"; // This will cause an error because 'type' is a readonly property and cannot be reassigned.


