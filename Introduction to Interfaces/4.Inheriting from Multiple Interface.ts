//here we will have multiple interfaces and we will inherit from multiple interfaces

// Using an enum for the permissions list ensures that only a predefined set of permissions can be assigned to users. This keeps the permissions consistent throughout the application.

// A user's permission can only be one of the following:

// * `read`
// * `write`
// * `execute`

// No other permission values are allowed.

// Now that we have a fixed list of permissions, we can create an interface to represent the permissions assigned to each user.


enum Roles {
  admin = "admin",
  author = "author",
  editor = "editor",
}

interface Role {
  role: Roles;
}

enum PermissionsList {
  read = "read",
  write = "write",
  execute = "execute",
}

// Now that we have a list of available permissions, we can create an interface for user permissions.

// We'll call this interface `UserPermissions`.

// It will contain one property named `permissions`, which is an array of `PermissionsList`.

// This means the `permissions` property can store one or more values from the `PermissionsList` enum, such as `read`, `write`, and `execute`.

// With separate interfaces for roles and permissions, we can combine them to create an `AdminUser` interface. By inheriting from multiple interfaces, the admin user will have both a role and a list of permissions.

// This makes it easy to assign the appropriate role and permissions to an admin user. Let's see how this works by creating the `AdminUser` interface.



interface UserPermissions {
    permissions: PermissionsList[];
}





interface User {
  name: string;
  email: string;
  phone: number;
  gender: string;
}


//so here we have multiple interfaces and we will inherit from multiple interfaces
interface AdminUser extends User, Role, UserPermissions {
    //adding own property to the AdminUser interface
    numberOfUsersReporting: number;
}


interface UserWithAddress {
  name: string;
  email: string;
  phone: number;
  gender: string;
  address: string;
}


interface UserWithAddress extends User {
  address: string;
}

//multiple interface inheritance allows us to create a new interface that combines properties from multiple existing interfaces. In this case, the AdminUser interface inherits properties from User, Role, and UserPermissions interfaces. This means that an AdminUser object will have all the properties defined in those interfaces, as well as its own unique property numberOfUsersReporting.
const rob: AdminUser = {
  name: "rob",
  email: "rob@email.com",
  phone: 99876787,
  gender: "male",

  role: Roles.admin,

  permissions: [
    PermissionsList.execute,
    PermissionsList.read,
    PermissionsList.write,
  ],

  numberOfUsersReporting: 5,
};


const user: User = {
  name: "John",
  email: "john@email.com",
  phone: 9876543,
  gender: "Male",
};

const userWithAddress: UserWithAddress = {
  name: "John",
  email: "john@email.com",
  phone: 9876543,
  gender: "Male",
  address: "This is an address",
};












