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

}

class ITDepartment extends Department {
    protected holidays: Holiday = []

    constructor() {
        super("IT Department");
    }
}




class AdminDepartment extends Department {
        protected holidays: Holiday = []

        constructor() {
        super("Admin Department");
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

console.log('IT Department Holidays:', itDepartment);
console.log('Admin Department Holidays:', adminDepartment);

