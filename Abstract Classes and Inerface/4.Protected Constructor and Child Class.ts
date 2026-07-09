//add custom type for holiday 

type Holiday = {
    date: Date;
    reason: string;

}[];


abstract class Department {
    protected abstract holidays: Holiday;
    protected constructor (public name: string) {}


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

    }



class AdminDepartment extends Department {
        protected holidays: Holiday = []

    }


//-- Departments is protected constructor so we cannot create instance of it directly. We can only create instance of child class which is ITDepartment and AdminDepartment
const itDepartment = new ITDepartment('IT Department');
const adminDepartment = new AdminDepartment('Admin Department');



//-- make department to public constructor so we can create instance of it directly --//


abstract class Department1 {
    protected abstract holidays: Holiday;
    //-- from protected to public constructor so we can create instance of it directly --//
    public  constructor (protected name: string) {}


    public addHolidays(holidays : Holiday) {
        if (Array.isArray(holidays)) {
            for(const holiday of holidays) {
                this.holidays.push(holiday);
            }
        }

    }

}

class ITDepartment1 extends Department1 {
    protected holidays: Holiday = []

    }



class AdminDepartment1 extends Department1 {
        protected holidays: Holiday = []

    }


const itDepartment1 = new ITDepartment1('IT Department');
const adminDepartment1 = new AdminDepartment1('Admin Department');




//-- make department to protected constructor again so we can do correct departmentname per department --//



abstract class Department2 {
    protected abstract holidays: Holiday;
    protected constructor (public name: string) {}


    public addHolidays(holidays : Holiday) {
        if (Array.isArray(holidays)) {
            for(const holiday of holidays) {
                this.holidays.push(holiday);
            }
        }

    }

}

class ITDepartment2 extends Department2 {
    protected holidays: Holiday = [];

    constructor() {
        super(name:"IT Department");
    }
}



class AdminDepartment2 extends Department2 {
        protected holidays: Holiday = []

        
        constructor() {
            super(name:'Admin Department');
        }

}



// Copyright (c) 2026 Joy Ng
// Author: Joy Ng
// email: joygng0088@gmail.com





