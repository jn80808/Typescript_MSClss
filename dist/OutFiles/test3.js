"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Admin1 {
    constructor(username, email, adminLevel) {
        this.username = username;
        this.email = email;
        this.adminLevel = adminLevel;
    }
    login() {
        console.log("Admin logged in");
    }
}
class Customer1 {
    constructor(username, email, purchaseHistory, purchaseHistory1) {
        this.username = username;
        this.email = email;
        this.purchaseHistory = purchaseHistory;
        this.purchaseHistory1 = purchaseHistory1;
    }
    login() {
        console.log("Customer logged in");
    }
}
class Auth {
    static login(user) {
        user.login();
    }
}
const admin = new Admin1("joy", "joy@gmail.com", 1);
const customer = new Customer1("mike", "mike@gmail.com", "laptop, phone", ["laptop", "phone"]);
Auth.login(admin);
Auth.login(customer);
