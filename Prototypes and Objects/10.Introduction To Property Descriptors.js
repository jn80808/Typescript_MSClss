
//built-in methods of JavaScript's Object. You're probably seeing them in the browser console when you expand an object.
// getOwnPropertyDescriptor: f get0wnPropertyDesc
// getOwnPropertyDescriptors: f getOwnPropertyDes
// getOwnPropertyNames: f get0wnPropertyNames()
// getOwnPropertySymbols: f getOwnPropertySymbols
// getPrototype0f: f getPrototype0f()

// 1. Object.getOwnPropertyDescriptor()

// Gets detailed information about one property.

// Object.getOwnPropertyDescriptor(book, "title");

// Result looks like:

// {
//   value: "Book2 title",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }


// It tells you things like:

// value → current value
// writable → can the value be changed?
// enumerable → does it appear in things like Object.keys()?
// configurable → can the property be deleted/reconfigured?


// 2. Object.getOwnPropertyDescriptors() -- with "S" at the end

// Gets the descriptors for all properties.

// Object.getOwnPropertyDescriptors(book);

// You might get:

// {
//   title: {
//     value: "Book2 title",
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   pages: {
//     value: 250,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   author: {
//     value: "Mark",
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }

// So:

// getOwnPropertyDescriptor = one property
// getOwnPropertyDescriptors = all properties


// 3. Object.getOwnPropertyNames()

// Gets the names of an object's own properties.

// Object.getOwnPropertyNames(book);

// Result:

// ["title", "pages", "author"]


// 4. Object.getOwnPropertySymbols()

// Gets properties whose keys are Symbols.

// Example:

// const id = Symbol("id");

// const book = {
//   title: "Book2 title",
//   [id]: 123
// };

// Object.getOwnPropertySymbols(book);

// Result:

// [Symbol(id)]

// You won't use this one as often when you're starting JavaScript.

// 5. Object.getPrototypeOf()

// This one is especially important because you're learning about objects.

// It tells you:

// "What object is this object inheriting from?"

// Object.getPrototypeOf(book);

// For a normal object, you'll typically see:

// Object.prototype

// And that's why when you expand an object in the console, you see things like:

// [[Prototype]]: Object
//     constructor
//     assign
//     create
//     defineProperty
//     entries
//     freeze
//     fromEntries
//     getOwnPropertyDescriptor
//     getOwnPropertyDescriptors
//     getOwnPropertyNames
//     getOwnPropertySymbols
//     getPrototypeOf
//     ...
// The important concept

// Think of it like this:

// book
//  │
//  │ inherits from
//  ↓
// Object.prototype
//  │
//  ├── toString()
//  ├── hasOwnProperty()
//  ├── ...

// So these methods you're seeing aren't necessarily properties you created on book.

// They're methods provided through JavaScript's prototype system.

// And one small thing: what you pasted as get0wn / getPrototype0f is likely just the font making the letter O look like zero. The actual names are:

// getOwnPropertyDescriptor()
// getOwnPropertyDescriptors()
// getOwnPropertyNames()
// getOwnPropertySymbols()
// getPrototypeOf()




// value > The value of the property.

// writable (boolean) > Whether this property in question is writable or not.
// If true, you can change the property's value.
// If false, you cannot change the property's value.

// enumerable (boolean) > Whether you can enumerate or loop through this property.
// If true, the property will appear when using things like Object.keys(),
// for...in, etc.
// If false, it will not appear in normal enumeration.

// configurable (boolean) > Whether you can change the property's descriptor.
// If true, you can change or delete the property, and you can change
// descriptor settings such as writable and enumerable.
// If false, you cannot change the property descriptor or delete the property.