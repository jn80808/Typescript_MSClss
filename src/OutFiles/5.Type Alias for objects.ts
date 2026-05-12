let post ={
    title: "Type Alias for objects",
    description: "Type Alias for objects in TypeScript",
    content: "kkk",
    date: new Date(),
}


// we how to strictly type this with using inline type 
// so we can use {} this to say this is an object and then we can specify the properties and their types

let post1: {} ={
    title: "Type Alias for objects",
    description: "Type Alias for objects in TypeScript",
    content: "kkk",
    date: new Date(),
}

// and inside object literal {} we can specify the 
// properties and their types like this




let post2: { title: string ;description: string;content: string;date: Date} ={
    title: "Type Alias for objects",
    description: "Type Alias for objects in TypeScript",
    content: "kkk",
    date: new Date(),
}

//so this is how we can strictly type an object in TypeScript using inline type

// so next that what if we have 20 properties in our object and we have to specify all the properties and their types every time we want to use this object type then it will be very tedious and error prone
// so to avoid this we can use type alias to create a new type for our object and then we can use that type alias to type our object
// so we can create a "type alias" for our object like this

type Post = {
    title: string ;
    description: string;
    content: string;
    date: Date;
}

// so here type Post we can use this type alias to type our object like this
let post3: Post ={
    title: "Type Alias for objects",
    description: "Type Alias for objects in TypeScript",
    content:"Type aliases provide a way to create a new name for an existing type. This can make your code more readable and maintainable.",
    date: new Date(),
}

//so here we have use the declared type alias Post to type our object post3 and now we can use this type alias to type any object that has the same structure as Post without having to specify the properties and their types every time.

// so this is how we can use type alias to create a new type for our object and then use that type alias to type our object in TypeScript.

// so if i hover now the post3 variable then we can see that it has the type Post and it has the properties title, description, content and date with their respective types.

//and if you add another property to the post3 object that is not defined in the Post type alias then you will get an error because it does not match the structure of the Post type alias.

// and we can decalare another object and reuse the "type alias Post" to type that object as well like this

let post4: Post ={
    title: "Type Alias for objects",
    description: "Type Alias for objects in TypeScript",
    content:"Type aliases provide a way to create a new name for an existing type. This can make your code more readable and maintainable.",
    date: new Date(),
}

// so here we have declared another object post4 and we have used the same type alias Post to type that object as well and now both post3 and post4 have the same structure and they are both of type Post.

// so this is how we can use type alias to create a new type for our object and then use that type alias to type our object in TypeScript.






