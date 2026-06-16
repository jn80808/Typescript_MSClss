//--- build a introduction for the accessors and mutators 
// will create a scenario to see what is accessors and mutators 


class Person {
    constructor (
        public firtsName : string,
        public lastName: string ,
        public age : number 
    ){
        //--Inside of the constructor we can add logic here 
        if (age>200 || age<0){
            throw new Error ("the age must be within the age range 0-200")
        }
        //--running logic inside of the constructor is not recommended 
    }

    public fullName(){
        return `${this.firtsName} ${this.lastName}`
    }
}


const jhon : Person = new Person("jhon","Ng",888); //-- here Age dont have validation 
const joy : Person = new Person ("Joy", "Ng",-10); //-- here Age dont have validation 


console.log(joy.fullName());

//-------- alternative 


class Person1 {
    public fullname: string;
    constructor (
        public firtsName : string,
        public lastName: string ,
        public age : number 
    ){
        //--Inside of the constructor we can add logic here 
        if (age>200 || age<0){
            throw new Error ("the age must be within the age range 0-200")
        }
        //--running logic inside of the constructor is not recommended 
        this.fullname = `${this.firtsName} ${this.lastName}`
    }

    // public fullName(){
    //     return `${this.firtsName} ${this.lastName}`
    // }
}


const jhon1 : Person1 = new Person1("jhon","Ng",888); //-- here Age dont have validation 
const joy1 : Person1 = new Person1 ("Joy", "Ng",-10); //-- here Age dont have validation 


console.log(joy1.fullname);






