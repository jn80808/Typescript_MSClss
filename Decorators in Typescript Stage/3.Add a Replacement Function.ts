// In the previous lecture, we created two simple decorators: the method decorator and the class decorator.

// At the moment, these decorators don't do much. They simply print the original target and the context to the console.

// In this video, we'll take things a step further and learn how to use these decorators to actually modify the existing target or perform some useful operations with it.

// Let's start with the method decorator. Once we understand how to modify an existing method, it will be much easier to understand what decorators can really do, including how they can modify a class and its different members.

// And let's focus on this method logger, which is a method decorator used along with the greet method

// of our class.

//pre
function methodLogger(originalMethod: any, context: any) {
  console.log(originalMethod);
  console.log(context);
}


class Person {
  constructor(public name: string) {}

  @methodLogger
  greet() {
    console.log(`Hello my name is ${this.name}`);
  }
}

