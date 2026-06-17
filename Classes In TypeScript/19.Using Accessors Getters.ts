// In the previous 18. Setter , we declared a set method, which is this mutator over here, and we were setting

// the age underscore age property within the class.

// And the problem we faced with this kind of a setter is that when we tried to access age like this,

// that is John dot age, we got undefined.

// We have set the age, but we also need a method in order to get the age from the instance of this class.

// Now it turns out it just like Mutators.

// We have accessors or getters which help us get the value of this underscore age property that we defined

// using this kind of a set method.

// This method is called the get method.


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

        // "get Methods" cannot have any parameters because they are only used in order to fetch a value from within the class.

        // So you do not pass any parameters to such functions.

        // Set methods can also only have one parameter, which is the value that you are about to set, and same

        // applies for get.

        // Get cannot have any parameters because here you're trying to get that value from within the instance of the class.

    public get age(){
        if(this.age === undefined){
            throw new Error("The age property is not defined")
        }
        return this._age;
    }


    public fullName(){
        return `${this.firtsName} ${this.lastName}`
    }

    //fullname with get method 
    public get fullName1(){
        return `${this.firtsName} ${this.lastName}`
    }

}


const jhon : Person = new Person("jhon","Ng"); 
const joy : Person = new Person ("Joy", "Ng"); 

//--how to set age now so heres how we can do it 
jhon.age= 30;  // just accessing it like any other property on my class, which is John.age, and I'm setting it to 30.
joy.age= 28; 



console.log(joy.fullName());

//no need to add () if you use get method as if this method now is properties in the class 
console.log(joy.fullName1);



console.log(jhon.age) // output : from undefinde now its show 30  


// one last thing over here is that get and set methods are not

// necessarily used with private properties.

// So it highly depends on what you're trying to do.

// But whenever you have this kind of a conditional logic before setting a value or getting a value, you

// can always use getters and setters.



