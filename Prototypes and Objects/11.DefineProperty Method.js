

const book = new Object(); //will create empty object 

Object.defineProperty(book, 'title', {
  value: 'This is the title of the book',
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(book);

// Output :

// {title: 'This is the title of the book'}
// title: "This is the title of the book"
// [[Prototype]]: Object



const book = new Object(); //will create empty object 

Object.defineProperty(book, 'author', {
  value: 'This is the author of the book',
  writable: false,
  enumerable: true,
  configurable: true
});

console.log(book);


// {
//   title: 'This is the title of the book',
//   author: 'This is the author of the book'
// }
// author: "This is the author of the book"
// title: "This is the title of the book"
// [[Prototype]]: Object



const book = new Object(); //will create empty object 

Object.defineProperty(book, 'author', {
  value: 'jhon',
  writable: false,
  enumerable: true,
  configurable: true
});

book.author = 'Mark'

console.log(book);


// output 
// {author: 'John'} // still be john since the writable is being false 




```javascript
/*
KEY TAKEAWAYS: PROPERTY DESCRIPTORS & INHERITANCE

1. READ-ONLY PROPERTIES
-----------------------
JavaScript allows us to create read-only properties using
property descriptors.

Example:
    Object.defineProperty(book, 'author', {
        value: 'John',
        writable: false
    });

When writable is false, the property value cannot be changed.

TypeScript's readonly properties are also implemented using
JavaScript's built-in property mechanisms.

Property descriptors are part of JavaScript itself and are
not specifically an ES6 feature.


2. PROTOTYPAL INHERITANCE
-------------------------
JavaScript uses prototypes for inheritance.

There are two ways we can think about inheritance:

    - Class-based inheritance
      Using classes, which provides cleaner and easier syntax.

    - Prototypal inheritance
      Using constructor functions and prototypes directly.

TypeScript commonly uses classes because they provide cleaner
syntax and additional features such as strict typing.

However, when TypeScript is compiled to JavaScript, the resulting
JavaScript still uses JavaScript's prototype-based inheritance
behind the scenes.


KEY TAKEAWAY
------------
Classes provide a cleaner syntax for inheritance, but JavaScript
ultimately uses constructors and prototypes behind the scenes.

Understanding:
    Property Descriptors
    -> Read-only Properties
    -> Constructors
    -> Prototypes
    -> Decorators

will be useful when learning TypeScript decorators.
*/
```

//------------- TypeScript
class UserTypeScript {

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.points = 0;
    }

    login() {
        console.log(this.name, 'has logged in');
    }

    logout() {
        console.log(this.name, 'has logged out');
    }
}


//------------- JavaScript 
function UserJavaScript(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;
}

User.prototype.login = function () {
    console.log(this.name, 'has logged in');
};

User.prototype.logout = function () {
    console.log(this.name, 'has logged out');
};


