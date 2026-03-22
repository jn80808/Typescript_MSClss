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
    protected abstract holidays: Holidays ;
    protected constructor (protected name: string) {
    }
}

class ITDepartment extends Department3 {// error because holidays is not implemented, 
                                        // in abstract class we have to implement all the abstract properties and methods in the child class
}

class AccountingDepartment extends Department3 {// error because holidays is not implemented, in abstract class we have to implement all the abstract properties and methods in the child class
}


class ITDepartment3 extends Department3 {
    protected holidays: Holidays = []; // now it is implemented, so no error
}

class AccountingDepartment3 extends Department3 {
    protected holidays: Holidays = []; // now it is implemented, so no error
}


//----------------------------------------------//
// 105.Shared Methods in Abstract Classes 
//---------------------------------------------//


type Holidays2 = {
    name: string;
    date: Date;
} [];

abstract class Department4 {
    protected abstract holidays: Holidays ;
    protected constructor (protected name: string) {
    }
        public addHoliday(holidays: Holidays[number]) {
            if (Array.isArray(this.holidays)) {
                for (const holiday of this.holidays) {
                this.holidays.push(holiday);
            }   
            
        }
    }
}


class ITDepartment4 extends Department4 {
    protected holidays: Holidays = []; // now it is implemented, so no error
}

class AccountingDepartment4 extends Department4 {
    protected holidays: Holidays = []; // now it is implemented, so no error
}



//--------------------------------------------------//
// 106. Protected Constructors in Abstract Classes
//-------------------------------------------------//


type Holidays3 = {
    name: string;
    date: Date;
} [];

abstract class Department5 {
    protected abstract holidays: Holidays ;
    protected  constructor (protected name: string) { 
    }
        public addHoliday(holidays: Holidays[number]) {
            if (Array.isArray(this.holidays)) {
                for (const holiday of this.holidays) {
                this.holidays.push(holiday);
            }   
            
        }
    }
}


class ITDepartment5 extends Department5 {
    protected holidays: Holidays = []; // now it is implemented, so no error
}

class AccountingDepartment5 extends Department5 {
    protected holidays: Holidays = []; // now it is implemented, so no error
}


const itDepartment5 = new ITDepartment5();
const itDepartment6 = new ITDepartment5('IT'); // error because constructor is protected, so it cannot be instantiated outside the class or its subclasses  


const itDepartment7 = new ITDepartment5(name: 'IT'); 




//-------------Makes Constructor Public and back again to protected--------------------------//
type Holidays4 = {
    reason: string;
    date: Date;
} [];

abstract class Department6 {
    protected abstract holidays: Holidays ;
    protected constructor (protected name: string) { //update constructor to public, because protected constructor cannot be instantiated outside the class or its subclasses, so we need to make it public to allow instantiation
    }
        public addHoliday(holidays: Holidays4) {
            if (Array.isArray(holidays)) {
                for (const holiday of this.holidays) {
                this.holidays.push(holiday);
            }   
            
        }
    }
}


class ITDepartment8 extends Department6 {
    protected holidays: Holidays = [];
    
    constructor() {
        super("IT Department"); // call the constructor of the parent class to initialize the name property
    }
    
}

class AccountingDepartment8 extends Department6 {
    protected holidays: Holidays = []; 

        constructor() {
        super("Accounting Department"); // call the constructor of the parent class to initialize the name property
    }
    
}

const itDepartment9 = new ITDepartment8();

const itDepartment11: ITDepartment8 = new ITDepartment8();

const accountingDepartment9: AccountingDepartment8 =
    new AccountingDepartment8();

const accountingDepartment10: ITDepartment8 =
    new ITDepartment8();



//--------------------------------------------------//
// 107. Adding Holiday to the Department
//-------------------------------------------------//

type Holidays5 = {
    reason: string;
    date: Date;
}[];

abstract class Department7 {
    protected abstract holidays: Holidays5;

    protected constructor(protected name: string) {}

    // accept an ARRAY of holidays
    // public addHoliday(holidays: Holidays5) {
    //     this.holidays.push(...holidays);
    // }
        public addHoliday(holidays: Holidays5) {
            if (Array.isArray(holidays)) {
                for (const holiday of this.holidays) {
                this.holidays.push(holiday);
                }   
            }
        }
    
}


//-- Child classes implementing the abstract class --//
class ITDepartment9 extends Department7 {
    protected holidays: Holidays5 = [];

    constructor() {
        super("IT Department");
    }
}

class AccountingDepartment9 extends Department7 {
    protected holidays: Holidays5 = [];

    constructor() {
        super("Accounting Department");
    }
}


//-- 107 adding holidays to Classes --//
// -- List of holidays --//
const ITDepartmentHolidays: Holidays5 = [
    {
        date: new Date(2025, 11, 25),
        reason: "Christmas"
    },
    {
        date: new Date(2026, 0, 1),
        reason: "New Year's Day"
    }
];

const AccountingDepartmentHolidays: Holidays5 = [
    {
        date: new Date(2025, 10, 25),
        reason: "Accounting Team Building Day"
    },
    {
        date: new Date(2026, 0, 1),
        reason: "New Year's Day"
    }
];


// Create departments
const ITDepartment10 = new ITDepartment9();
const AccountingDepartment10 = new AccountingDepartment9();


// Add holidays (ARRAY now works)
ITDepartment10.addHoliday(ITDepartmentHolidays);
AccountingDepartment10.addHoliday(AccountingDepartmentHolidays);


// Print result
console.log(ITDepartment10);
console.log(AccountingDepartment10);



//--------------------------------------------------//
// 108. Print Holidays Method 
//-------------------------------------------------//

type Holidays6 = {
    reason: string;
    date: Date;
}[];

abstract class Department8 {
    protected abstract holidays: Holidays6;

    protected constructor(protected name: string) {}

        // -- add holidays method --//
        public addHoliday(holidays: Holidays6) {
            if (Array.isArray(holidays)) {
                for (const holiday of this.holidays) {
                this.holidays.push(holiday);
                }   
            }
        }

        //--- 108 Print holidays method ---//
        public printHolidays() {
            if (this.holidays.length === 0) {
                return "No holidays added yet.";
            }
            console.log("Here is the list of holidays:");

            this.holidays.forEach((holiday : {reason: string; date: Date}, index: number) => {
                console.log(
                    `${index + 1}. ${holiday.reason} on ${holiday.date.toDateString()}`
                );

            });       
        }
    }
            
    

//-- Child classes implementing the abstract class --//
class ITDepartment12 extends Department8 {
    protected holidays: Holidays6 = [];

    constructor() {
        super("IT Department");
    }
}

class AccountingDepartment12 extends Department8 {
    protected holidays: Holidays6 = [];

    constructor() {
        super("Accounting Department");
    }
}


//-- 107 adding holidays to Classes --//
// -- List of holidays --//
const ITDepartmentHolidays1: Holidays6 = [
    {
        date: new Date(2025, 11, 25),
        reason: "Christmas"
    },
    {
        date: new Date(2026, 0, 1),
        reason: "New Year's Day"
    }
];

const AccountingDepartmentHolidays1: Holidays6 = [
    {
        date: new Date(2025, 10, 25),
        reason: "Accounting Team Building Day"
    },
    {
        date: new Date(2026, 0, 1),
        reason: "New Year's Day"
    }
];


// Create departments
const ITDepartment13 = new ITDepartment12();
const AccountingDepartment13 = new AccountingDepartment12();


// Add holidays (ARRAY now works)
ITDepartment13.addHoliday(ITDepartmentHolidays1);
AccountingDepartment13.addHoliday(AccountingDepartmentHolidays1);


// Print result
console.log(ITDepartment13);
console.log(AccountingDepartment13);


//use printHolidays method to print the holidays for each department
ITDepartment13.printHolidays();
AccountingDepartment13.printHolidays();




//--------------------------------------------------//
// 109. Method Overriding in child class
//-------------------------------------------------//

type Holidays7 = {
    reason: string;
    date: Date;
}[];

abstract class Department9 {
    protected abstract holidays: Holidays7;

    protected constructor(protected name: string) {}

        // -- add holidays method --//
        public addHoliday(holidays: Holidays7) {
            if (Array.isArray(holidays)) {
                for (const holiday of this.holidays) {
                this.holidays.push(holiday);
                }   
            }
        }

        //--- 108 Print holidays method ---//
        public printHolidays() {
            if (this.holidays.length === 0) {
                return "No holidays added yet.";
            }
            console.log("Here is the list of holidays:");

            this.holidays.forEach((holiday : {reason: string; date: Date}, index: number) => {
                console.log(
                    `${index + 1}. ${holiday.reason} on ${holiday.date.toDateString()}`
                );

            });       
        }
    }
            
    

//-- Child classes implementing the abstract class --//
class ITDepartment14 extends Department9 {
    protected holidays: Holidays7 = [];

    constructor() {
        super("IT Department");
    }

        //--- 109.over ride the print holiday : adding name as department name 108 Print holidays method ---//
        public printHolidays() {
            if (this.holidays.length === 0) {
                return "No holidays added yet.";
            }
            console.log(`Here is the list of holidays for ${this.name}:`);

            this.holidays.forEach((holiday : {reason: string; date: Date}, index: number) => {
                console.log(
                    `${index + 1}. ${holiday.reason} on ${holiday.date.toDateString()}`
                );

            });       
        }
    }
            

class AccountingDepartment14 extends Department9 {
    protected holidays: Holidays7 = [];

    constructor() {
        super("Accounting Department");
    }
        //--- 109. over ride the print holiday : adding name as department name 108 Print holidays method ---//
        public printHolidays() {
            if (this.holidays.length === 0) {
                return "No holidays added yet.";
            }
            console.log(`Here is the list of holidays for ${this.name}:`);

            this.holidays.forEach((holiday : {reason: string; date: Date}, index: number) => {
                console.log(
                    `${index + 1}. ${holiday.reason} on ${holiday.date.toDateString()}`
                );

            });       
        }
        
}


//-- 107 adding holidays to Classes --//
// -- List of holidays --//
const ITDepartmentHolidays2: Holidays7 = [
    {
        date: new Date(2025, 11, 25),
        reason: "Christmas"
    },
    {
        date: new Date(2026, 0, 1),
        reason: "New Year's Day"
    }
];

const AccountingDepartmentHolidays2: Holidays7 = [
    {
        date: new Date(2025, 10, 25),
        reason: "Accounting Team Building Day"
    },
    {
        date: new Date(2026, 0, 1),
        reason: "New Year's Day"
    }
];


// Create departments
const ITDepartment15 = new ITDepartment14();
const AccountingDepartment15 = new AccountingDepartment14();

//use printHolidays method to print the holidays for each department
ITDepartment13.printHolidays();
AccountingDepartment13.printHolidays();


//--------------------------------------------------//
// 110. Introduction to Abstract Methods 
//-------------------------------------------------//

type Holidays8 = {
    reason: string;
    date: Date;
}[];

abstract class Department10 {
    protected abstract holidays: Holidays8;

    protected constructor(protected name: string) {}

        // -- add holidays method --//
        public addHoliday(holidays: Holidays8) {
            if (Array.isArray(holidays)) {
                for (const holiday of this.holidays) {
                this.holidays.push(holiday);
                }   
            }
        }

        //--- 108 Print holidays method ---//
        public abstract printHolidays() : void;


    }
            
    

//-- Child classes implementing the abstract class --//
class ITDepartment16 extends Department10 {
    protected holidays: Holidays8 = [];

    constructor() {
        super("IT Department");
    }

        //--- 109.over ride the print holiday : adding name as department name 108 Print holidays method ---//
        public printHolidays() {
            if (this.holidays.length === 0) {
                return "No holidays added yet.";
            }
            console.log(`Here is the list of holidays for ${this.name}:`);

            this.holidays.forEach((holiday : {reason: string; date: Date}, index: number) => {
                console.log(
                    `${index + 1}. ${holiday.reason} on ${holiday.date.toDateString()}`
                );

            });       
        }
    }
            

class AccountingDepartment16 extends Department10 {
    protected holidays: Holidays8 = [];

    constructor() {
        super("Accounting Department");
    }
        //--- 109. over ride the print holiday : adding name as department name 108 Print holidays method ---//
        public printHolidays() {
            if (this.holidays.length === 0) {
                return "No holidays added yet.";
            }
            console.log(`Here is the list of holidays for ${this.name}:`);

            this.holidays.forEach((holiday : {reason: string; date: Date}, index: number) => {
                console.log(
                    `${index + 1}. ${holiday.reason} on ${holiday.date.toDateString()}`
                );

            });       
        }
        
}


//-- 107 adding holidays to Classes --//
// -- List of holidays --//
const ITDepartmentHolidays3: Holidays8 = [
    {
        date: new Date(2025, 11, 25),
        reason: "Christmas"
    },
    {
        date: new Date(2026, 0, 1),
        reason: "New Year's Day"
    }
];

const AccountingDepartmentHolidays3: Holidays8 = [
    {
        date: new Date(2025, 10, 25),
        reason: "Accounting Team Building Day"
    },
    {
        date: new Date(2026, 0, 1),
        reason: "New Year's Day"
    }
];


// Create departments
const ITDepartment17 = new ITDepartment16();
const AccountingDepartment17 = new AccountingDepartment16();

//use printHolidays method to print the holidays for each department
ITDepartment17.printHolidays();
AccountingDepartment17.printHolidays();


















