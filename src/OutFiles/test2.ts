
class Employee3 {

    //TODO 4: Static Members
    static companyName: string = "Tech Solutions Inc.";
    
    constructor(
        public name: string, //TODO 2: Constructor Shorthand
        public age: number,
        private _salary: number,
        protected id: number

    ){}

//TODO 3: Accessors (Getters/Setters)
    get salary(): number {
        return this._salary;
    }

    set salary(newSalary: number) {
        if (newSalary <= 0) {
            this._salary = newSalary;
        } else {
            throw new Error("Salary must be a positive number.");
        }
    }
    
    static getCompanyName(): string {
        return Employee1.companyName;
    }

    //TODO 6: 
    get getDetailsParent(): string {
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}, ID: ${this.id}`;
    }

}
    
    //TODO 5 
    class Manager3 extends Employee3 {
        constructor(
            name: string,
            age: number,
            salary: number,
            id: number,
            public department: string
        ) {
            super(name, age, salary, id);
        }

            //TODO 6: 
            get getDetails(): string {
                return `${super.getDetailsParent}, Department: ${this.department}`;
            }


    }


const employee = new Employee3("Alice", 30, 50000, 1);
console.log(employee.getDetailsParent); // Output: Name: Alice, Age: 30, Salary: 50000, ID: 1
console.log(employee.getDetails); // Error: Property 'getDetails' does not exist on type 'Employee3 only on the Manager'.

const manager = new Manager3("Bob", 40, 80000, 2, "IT");
console.log(manager.getDetails); // Output: Name: Bob, Age: 40, Salary: 80000, ID: 2, Department: IT





