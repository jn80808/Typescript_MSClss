// A "set" of function helps you set some kind of value within your class, where a value needs to be processed

// before it is set by the user of the class.

// Whenever you have certain values which need this kind of a processing before they can be set inside

// the class, you can use the setter or the mutator.

// This is how you declare a special set of function.

// use the public access modifier and then a special keyword called set.

// public set 

// so here we will use example of age 


class Person {
    private _age?: number;

    constructor (
        public firtsName : string,
        public lastName: string ,
        //public age : number  // should be remove since its getting error in the setter because of duplication
    ){}

    //-- setter 
    public set age(age: number){
        //--from the constructor logic we putting it now inside of the setter  
        if (age>200 || age<0){
            throw new Error ("the age must be within the age range 0-200")
        }
        this._age = age; 
    }

    public fullName(){
        return `${this.firtsName} ${this.lastName}`
    }
}


const jhon : Person = new Person("jhon","Ng"); 
const joy : Person = new Person ("Joy", "Ng"); 

//--how to set age now so heres how we can do it 
jhon.age= 30;  // just accessing it like any other property on my class, which is John.age, and I'm setting it to 30.
joy.age= 28; 

console.log(joy.fullName());






