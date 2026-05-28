enum AgeUnit {
    Years = "years",
    Months = "months",
    Days = "days"
}

type PersonWithAgeUnit = {
    name: string;
    age: number;
    ageUnit: AgeUnit;
    greet: (greeting:string )=> string;      /** we will use a function signature here , a function signature is looks like a arrow function and tell typescript that this is going to be a function */
}                                           /** ()=> : this is the function signature that looks like a arrow function and inside of the () you can put the parameter => where we will put the output or what type of the output so here we put a string so the output it will gonna be string*/
                                            //(greeting:string )=> string;  now this is the function call signature 
                                            /** */

function intro8_custom_parameter_type (person: PersonWithAgeUnit): string {
    return `My name is ${person.name}, I am ${person.age} ${person.ageUnit} old.`;
}

const person2: PersonWithAgeUnit = {
    name: "David",
    age: 30,
    ageUnit: AgeUnit.Years,
    greet: function (greeting: string): string {
        throw new Error("Function not implemented.");
    }
};


console.log(intro8_custom_parameter_type(person2));    //output: My name is David, I am 30 years old.

const person3: PersonWithAgeUnit = {
    name: "David",
    age: 30,
    ageUnit: AgeUnit.Years,
    greet: function (greeting: string): string {
        return `${greeting}${person3.name}`;
    }
};


//ex.3 converting years to months 

function convertAgeToMonths(person: PersonWithAgeUnit): PersonWithAgeUnit {
    if (person.ageUnit === AgeUnit.Years) {
       person.age = person.age * 12;
         person.ageUnit = AgeUnit.Months;
    }
    return person;
}

console.log(convertAgeToMonths(person2));   //output: 360
console.log (person2) //output: 


