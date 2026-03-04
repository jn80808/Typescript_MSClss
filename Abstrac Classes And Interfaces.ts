//----------------------------------------------//
// 104. Introduction to Abstract Classes 
//---------------------------------------------//

class Department {
    constructor(public name: string) {
    }
}

const department1 = new Department('Accounting'); // regular class can be instantiated


//---Abstract Class---//
abstract class Department2 {
    constructor(public name1: string) {
    }
}

const department2 = new Department2('Accounting'); // abstract class cannot be instantiated


//-- Child of abstract Class --//
class ITDepartment2 extends Department2 {
}

class AccountingDepartment2 extends Department2 {
}


//------ apply with type ------//


type Holidays = {
    name: string;
    date: Date;
} [];

abstract class Department3 {
    constructor(public name: string) {
    }

    protected abstract holidays: Holidays ;
    protected constructor (protected name: string) {
    }
}

class ITDepartment extends Department3 {// error because holidays is not implemented, in abstract class we have to implement all the abstract properties and methods in the child class
}

class AccountingDepartment extends Department3 {// error because holidays is not implemented, in abstract class we have to implement all the abstract properties and methods in the child class
}


class ITDepartment3 extends Department3 {
    protected holidays: Holidays = []; // now it is implemented, so no error
}

class AccountingDepartment3 extends Department3 {
    protected holidays: Holidays = []; // now it is implemented, so no error
}













