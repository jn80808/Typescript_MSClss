"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee1 {
    constructor(name, //TODO 2: Constructor Shorthand
    age, _salary, id) {
        this.name = name;
        this.age = age;
        this._salary = _salary;
        this.id = id;
    }
    //TODO 3: Accessors (Getters/Setters)
    get salary() {
        return this._salary;
    }
    set salary(newSalary) {
        if (newSalary <= 0) {
            this._salary = newSalary;
        }
        else {
            throw new Error("Salary must be a positive number.");
        }
    }
    static getCompanyName() {
        return Employee1.companyName;
    }
    //TODO 6: 
    get getDetailsParent() {
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}, ID: ${this.id}`;
    }
}
//TODO 4: Static Members
Employee1.companyName = "Tech Solutions Inc.";
//TODO 5 
class Manager3 extends Employee1 {
    constructor(name, age, salary, id, department) {
        super(name, age, salary, id);
        this.department = department;
    }
    //TODO 6: 
    get getDetails() {
        return `${super.getDetailsParent}, Department: ${this.department}`;
    }
}
const employee = new Employee1("Alice", 30, 50000, 1);
console.log(employee.getDetailsParent); // Output: Name: Alice, Age: 30, Salary: 50000, ID: 1
//console.log(employee.getDetails); // Error: Property 'getDetails' does not exist on type 'Employee3 only on the Manager'.
const manager = new Manager3("Bob", 40, 80000, 2, "IT");
console.log(manager.getDetails); // Output: Name: Bob, Age: 40, Salary: 80000, ID: 2, Department: IT
