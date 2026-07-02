//add custom type for holiday 

type Holiday = {
    date: Date;
    reason: string;

}[];


// class DepartmentNoramlClass {
//     protected abstract holidays: Holiday;
//     protected constructor (public name: string) {}
// }

abstract class Department {
    protected abstract holidays: Holiday;
    protected constructor (public name: string) {}
}


class ITDepartment extends Department {
    protected holidays: Holiday = []

    }




class AdminDepartment extends Department {
        protected holidays: Holiday = []

    }





