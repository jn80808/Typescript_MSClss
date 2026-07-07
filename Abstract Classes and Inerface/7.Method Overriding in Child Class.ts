//add custom type for holiday 

type Holiday = {
    date: Date;
    reason: string;

}[];


abstract class Department {
    protected abstract holidays: Holiday;
    protected constructor (protected name: string) {}


    public addHolidays(holidays : Holiday) {
        if (Array.isArray(holidays)) {
            for(const holiday of holidays) {
                this.holidays.push(holiday);
            }
        }

    }

    public printHolidays() {
        console.log(`Holidays for ${this.name}:`);

        if (this.holidays.length === 0) {
            console.log("No holidays available.");
        }
        console.log("List of holidays:");

        this.holidays.forEach((holiday, index) => {
            console.log(`${index + 1}. Date: ${holiday.date.toDateString()}, Reason: ${holiday.reason}`);
        });
    }
};


class ITDepartment extends Department {
    protected holidays: Holiday = []

    constructor() {
        super("IT Department");
    }
        //the print method is overridden in the child class to provide specific implementation for ITDepartment
        //it will print the child method printHolidays instead of the parent method printHolidays
        //overriding the parent method printHolidays in the child class ITDepartment

        public printHolidays() {
        console.log(`Holidays for ${this.name}:`);

        if (this.holidays.length === 0) {
            console.log("No holidays available.");
        }

        console.log(`List of holidays for ${this.name}:`);

        this.holidays.forEach((holiday, index) => {
            console.log(`${index + 1}. Date: ${holiday.date.toDateString()}, Reason: ${holiday.reason}`);
        });
    }

}




class AdminDepartment extends Department {
        protected holidays: Holiday = []

        constructor() {
        super("Admin Department");
    }
    
    //the print method is overridden in the child class to provide specific implementation for ITDepartment
    //it will print the child method printHolidays instead of the parent method printHolidays
    //overriding the parent method printHolidays in the child class ITDepartment

    public printHolidays() {
        console.log(`Holidays for ${this.name}:`);

        if (this.holidays.length === 0) {
            console.log("No holidays available.");
        }
        console.log(`List of holidays for ${this.name}:`);

        this.holidays.forEach((holiday, index) => {
            console.log(`${index + 1}. Date: ${holiday.date.toDateString()}, Reason: ${holiday.reason}`);
        });
    }

}

//--create constants for holidays for ITDepartment and AdminDepartment
const itHolidays: Holiday = [
    {
        date: new Date('2024-01-01'),
        reason: 'IT Day'
    },

    {
        date: new Date('2024-01-01'),
        reason: 'New Year\'s Day'
    }


]; 

const adminHolidays: Holiday = [

    {
        date: new Date('2024-01-01'),
        reason: 'Admins Day'
    },
    {
        date: new Date('2024-12-25'),
        reason: 'Christmas Day'
    }


]; 


const itDepartment: ITDepartment = new ITDepartment();
itDepartment.addHolidays(itHolidays);

const adminDepartment: AdminDepartment = new AdminDepartment();
adminDepartment.addHolidays(adminHolidays);



//-- add holidays to ITDepartment and AdminDepartment using addHolidays method
itDepartment.addHolidays([
    {
        date: new Date('2024-07-04'),
        reason: 'Independence Day'
    }
]);


adminDepartment.addHolidays([
    {
        date: new Date('2024-11-28'),
        reason: 'Thanksgiving Day'
    }
]);

// console.log('IT Department Holidays:', itDepartment);
// console.log('Admin Department Holidays:', adminDepartment);

//so instead console.log we can use printHolidays method to print holidays for ITDepartment and AdminDepartment
itDepartment.printHolidays();
adminDepartment.printHolidays();

