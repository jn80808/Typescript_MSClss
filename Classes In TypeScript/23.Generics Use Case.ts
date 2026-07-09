//Now let's see in real world, how would you use generics along with the class?


// And let's try to declare this class.

// And let's call this class as a repository.

// And this is going to mimic a repository of collection of items.

// So think of a repository as a class that helps you hold certain type of objects.

// So for example user objects product objects within your application.

// And then it also helps you remove these objects from within the collection of objects.

// If you have worked with databases and have used ORMs, you have probably used these kind of repositories

// which help you fetch, remove, add or delete objects from within the database or the collection of

// objects.

// That's what we are trying to mimic over here.

// So I'm going to structure this class by first using any types.

// And then we'll replace those any types with generics.

//---------------------------------------------------------
//----------------using any type not generic type ---------
//---------------------------------------------------------

class Repository {
    private items : any[]= [];

        add (item: any){
        this.items.push(item);
    }

    getByid(id:number): any| undefined{
        return this.items.find((item)=>item.id ===id)
    }

    getAll(): any[]{
        return this.items;
    }

    removebyId(id: number): void {
        this.items = this.items.filter((item) => item.id !== id);
    }
}

//------------------------------------------------
//----------------using generic type -------------
//------------------------------------------------


class RepositorywithGenericType<T> {
    private items : any[]= [];

        add (item: any){
        this.items.push(item);
    }

    getByid(id:number): any| undefined{
        return this.items.find((item)=>item.id ===id)
    }

    getAll(): any[]{
        return this.items;
    }

    removebyId(id: number): void {
        this.items = this.items.filter((item) => item.id !== id);
    }
}

// Now, the unique thing about this generic is that it should always have an ID, because we are highly

// relying on the ID, so it has to be a generic which does have the ID property.

// That's how these databases are structured, where each entry in the database has a unique ID.

// So we want to check whether this generic has an ID or not.

// And in order to do that we can use a specific type and use the extends keyword which we have already

// used in previous lectures on generics.

// So I'm going to declare a new type.

type Identifiable ={
    id: number
}

class RepositorywithGenericType1<T extends Identifiable> { //Now This makes sure that all the generic values or all the types would have an ID property on it, because most of our methods rely on ID property.
                                                           //If any of the class methods is tried to use with a value that does not have an ID property, TypeScript is going to throw an error in that case.
    
    
    private items : T[]= []; //Now what does items become? If T is one single user, then items is an array of users. If T is one single product, items is an array of products. If T is one single book items is an array of books.
                               //Here we are trying to use generics in order to make our class specific. So I will use this generic variable now, and I'll say that items is an array of T.
        
        add (item: T){ //Now, since items are an array of T and whenever you want to add another item to an array of T, you will always add T. So if you're adding a user to an array of users, you're adding a user.
        this.items.push(item); //Now this class is becoming generic class, where once you use this particular repository for users, it becomes a users repository. Once you use this repository with products, it becomes a product repository.
    }



    // Let's look at the next method.
    // This is get item by id where id is a number and it gets one item.
    // And since one item is t itself, I will replace this any with t.
    // Now it will return the item that is present in the array of items, and it will always be aware of the
    // type of item that it is returning to you 


    getByid(id:number): T| undefined{
        return this.items.find((item)=>item.id ===id)
    }


    // get all you will always get the T of array.

    // So here it will be the items array which is defined by the generic t.


    getAll(): T[]{
        return this.items;
    }

    //And to remove by id I do not need to make any change.

    removebyId(id: number): void {
        this.items = this.items.filter((item) => item.id !== id);
    }
}


// Now you will see that we have made this class specific.

// And now this class can be used as a repository of users as a repository of books.

// So let's try this out.

// Let's create a repository of books

class RepositorywithGenericTypesSummart_withGenericType<T extends Identifiable> {
    private items : T[]= [];

        add (item: T){
        this.items.push(item);
    }

    getByid(id:number): T| undefined{
        return this.items.find((item)=>item.id ===id)
    }

    getAll(): T[]{
        return this.items;
    }

    removebyId(id: number): void {
        this.items = this.items.filter((item) => item.id !== id);
    }
}

//----------------Clean version without comments

type Identifiable1 ={
    id: number
}

class RepositorywithGenericType2<T extends Identifiable1> { 


    private items : T[]= []; 
        add (item: T){ 
        this.items.push(item); 
    }


    getByid(id:number): T| undefined{
        return this.items.find((item)=>item.id ===id)
    }


    getAll(): T[]{
        return this.items;
    }

    removebyId(id: number): void {
        this.items = this.items.filter((item) => item.id !== id);
    }
}

type User ={
    id: number;
    name: string;
    email: string;
}

//ex.1
const userRepository = new RepositorywithGenericType2();

//Now, while declaring the user's repository, I can typecast and say that, look, this repository is
//going to be a type of user's repository.

// So now TypeScript is going to go ahead and replace all the generics with specific user .

// and userRepositorywithTypeCastUser is going to be a repository which is only of the type user.

// They would not be any other instance object instance that would be accepted inside this Type User repository.

//ex.2 with typecast 

const userRepositorywithTypeCastUser = new RepositorywithGenericType2<User>();

userRepositorywithTypeCastUser.add({
    id:1,
    name: "Joy",
    email: "joyng@gmail.com"
})

// And now you see that TypeScript is going to comply users repository with a type of a user.

// So if I try to add any other value which is not present in this user type, TypeScript will throw an error.

//ex.3 Error 


userRepositorywithTypeCastUser.add({
    id:1,
    name: "Joy",
    email: "joyng@gmail.com",
    age:28 , //getting errror
})



// Using this generics I can create any type of repository, be it a user repository or the book repository.

// So using generics has made this class, which is very generic in nature, and it can create a repository

// of any type, but yet it is very specific and type aware in the sense that whenever you declare this

// repository, TypeScript is always aware of the kind of repository<User> that it's dealing with.

// Finally, let's just print the value of the user on the console.



console.log(userRepositorywithTypeCastUser.getByid(1)) 






// Copyright (c) 2026 Joy Ng
// Author: Joy Ng