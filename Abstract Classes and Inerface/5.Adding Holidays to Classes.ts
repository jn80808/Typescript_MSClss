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





    