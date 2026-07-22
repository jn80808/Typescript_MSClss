class User {

    constructor(public name: string) {}
}

class Password {

    constructor(public password: string) {}
}


class RegisteredUser extends User, Password {}