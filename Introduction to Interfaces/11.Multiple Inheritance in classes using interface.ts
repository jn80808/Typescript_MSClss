class User {

    constructor(public name: string) {}
}

class Password {

    constructor(public password: string) {}
}


class RegisteredUser extends User, Password {}

// This is what I said previously as well.

// You can only inherit a single class in TypeScript.

// You cannot inherit from multiple classes.

// This problem is, however, solved by interfaces.

// If you have a look at our truck class over here.

// Again, in TypeScript, you can inherit from only one parent class, but classes can implement as many

// interfaces as it wants to, and there is no limitation on that.
