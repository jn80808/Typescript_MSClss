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
}

