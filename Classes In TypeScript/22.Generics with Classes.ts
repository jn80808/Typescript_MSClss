// generics with classes just like generics can be used with functions, objects, etc. in TypeScript.

// Similarly, they can be used with classes as well and have a utility when it comes to using generics with classes

//ex. abstract class 

//ex.1
class Box {
    private _value : any;


    constructor (value: any){
        this._value = value 
    }

    get value(){
        return this._value;
    }


    set values(newValue: any){
        this._value = newValue;
    }

}
//HOVER THE BOX 
const numberBox = new Box(123);

//-- ex.2 with generic 

class Box1<T>  {
    private _value : T;


    constructor (value: T){
        this._value = value 
    }

    get value():T{
        return this._value;
    }


    set values(newValue: T){
        this._value = newValue;
    }

}
//HOVER THE BOX 
const numberBox1 = new Box1(123);
numberBox1.value = "string"

//HOVER THE BOX
const numberBox2 = new Box1("ONE");
numberBox2.value = "string"


