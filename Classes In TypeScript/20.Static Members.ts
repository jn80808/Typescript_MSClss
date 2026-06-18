// introduction of  special type of members of a class that is static members.

// Till now we've seen access modifiers.

// We've also seen properties and methods inside a class.

// But static keyword is a special keyword using which you declare any member of the class.

// So be it a property or a function or a method.

// And this kind of a method is available to you without instantiating a class.

// Static members, though they belong to the class itself rather than an instance of a class, they can

// be accessed from directly within the class.

// These members belong to the class, so they cannot be accessed in the instance of a class.

// Static members are only available in the class itself.

// that is a static keyword.

// This static keyword makes this property as a property, a field which belongs to the class itself.

// This field is not available in the instance of the class, but is only available inside the class.

class Counter {
    count = 0  //count have default value of 0 

    //static properties 
    static count1 = 0 // that is a static keyword.
                      // This static keyword makes this property as a property, a field which belongs to the class itself.
                      // This field is not available in the instance of the class, but is only available inside the class.

    //will create a static method and the purpose of this increment method is just to add one more value or add one to the count. 
    static increment (){ //Now, as mentioned static members only belong to a class. They do not belong to the instance of the class.
        this.count1++; 
    }


}


// So what if I was supposed to invoke the increment method on the class counter?

// In order to do that, I do not need to create the instance of the class.

// I can simply use the class itself because static methods or members are available on the class.

//I can use the dot notation on counter class, and I can use or invoke the increment 


Counter.increment();

console.log (Counter.count1);


const counter: Counter = new Counter();
counter.count;


// TypeScript is shouting at me and throwing this error.

// That property count does not exist on type counter.

// Did you mean to access the static member counter dot count so it understands that this member is the

// member of the class?

// The static member is not the member of the instance of the class.

// That's the reason these members are available directly on the class.

// By using the class name, and then followed by a dot notation and accessing the member over here as well.


// "Static members" are useful when you want to have certain methods where you don't want to access or create

// an instance of a class before you can use that particular method or a property.

// These types of "static methods" are usually created to be used globally within your application, where

// you do not have to go through the trouble of instantiating a class before you can actually use the method

// on a class.

// These methods are usually utility methods that are available inside your application.

// But having said that, that's not the only use case for static members of the class.


