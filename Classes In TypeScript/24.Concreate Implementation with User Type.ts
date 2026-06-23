
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


const userRepositorywithTypeCastUser1 = new RepositorywithGenericType1<User1>();

userRepositorywithTypeCastUser1.add({
    id:1,
    name: "Joy",
    email: "joyng@gmail.com"
})

