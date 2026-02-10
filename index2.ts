//----------------------------------------------//
// 91.More Control Over Classes 
//---------------------------------------------//

class Person {

    constructor(    
    public firstName: string,
    public lastName: string,
    public age: number
) {
    if (age > 200 || age < 0) {
        throw new Error("Age must be between 0 and 200");
    }
}
}

const person1 = new Person("John", "Doe", 300);
const person2 = new Person("Jane", "Smith", -25);