
//----------------original 

type Identifiable ={
    id: number
}

class RepositorywithGenericType<T extends Identifiable> { 


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


const userRepositorywithTypeCastUser = new RepositorywithGenericType<User>();

userRepositorywithTypeCastUser.add({
    id:1,
    name: "Joy",
    email: "joyng@gmail.com"
})


//--------------------------for user 

// So in the previous, we created this users repository and also a repository class, which is kind

// of a generic class that can be used along with different types of repositories that you want to declare.

// So we already have a users repository.

// We are going to check a few methods on users repository.

// And I'm also going to create another repository in this video and show it to you.

// That repository class can be used along with different types of repositories and not just one type.

// So let's go ahead and do this.

type Identifiable1 ={
    id: number
}

class RepositorywithGenericType1<T extends Identifiable1> { 


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

type User1 ={
    id: number;
    name: string;
    email: string;
}

// So where we have this user type we can say that this user type is extension of the identifiable type (Identifiable1) at line 63

// that we have declared here, because it also has the ID which is of the type number.

// So we are repeating our code over here.

// So instead of repeating our code, we can say that the user type extends the identifiable type 

// by like this User = Identifiable1 &

type User2 = Identifiable1 & {
    id: number;
    name: string;
    email: string;
}

//And now id can be removed from the user because identifiable already has the id property.

type User3 = Identifiable1 & {
    name: string;
    email: string;
}

const userRepositorywithTypeCastUser2 = new RepositorywithGenericType1<User3>();

userRepositorywithTypeCastUser2.add({
    id:1,
    name: "Joy",
    email: "joyng@gmail.com"
})



// So user will now have three properties.

// It will extend identifiable and it will have name and email.

// Similarly, I can create another type and let's call this type as books.

// Again this is going to extend the identifiable type and then have certain properties which are unique

// to the book.


type Book = Identifiable1 & {
    title : string;
    ISBN: number;
}


// Now, just like we created user repository, I can go ahead and create a book repository.

// So let's go ahead and create a books repository


const booksRepository = new RepositorywithGenericType1<Book>();



// That is the repository class that we created.

// And this time only with the type of a book.

// Books repository is only a books repository.

// It cannot accept users.

// This will not work.

const UserRepository1 = new RepositorywithGenericType1<User3>();

const booksRepository1 = new RepositorywithGenericType1<Book>();

UserRepository1.add({
    id:1,
    name: "Joy",
    email: "joyng@gmail.com"
})


booksRepository1.add({
    id: 1,
    title: "The Joy Life ",
    ISBN: 1234,
});


console.log(booksRepository1.getAll)




