// A static block can be considered as a constructor for setting the values, the static values within your class.

// So it is specifically used to set the value of the static members of your class.

// These values can be dependent on an external source or external information, which is available within

// your application whenever you initialize a class which has static members, of course.



class Counter {
    count = 0  //count have default value of 0 

    //static properties 
    static count1 = 0  

    //static method 
    static increment (){ 
        this.count1++; 
    }

    //-- static Block 
    //An instance of a class is always created with a new keyword, but initialization happens whenever you
    // try to access the class in any which way within your program.

    static {
        console.log("initializing Counter Class") //A message saying that initializing counter class, you will see that initializing counter class is printed even before we access the count.
                                                    //So at the moment this particular count class is used by any part of your code, the initialization of class happens and this static block runs the moment your class is initialized.
        Counter.count1 = 5 // the value of counter was set to five
    
    }
}


console.log(Counter.count1) //output : 5 - Initial count 
Counter.increment(); //output : 6 - so here since in the static block set count1 = 5 now this will be 6 since it will increment + 1  | 5+1 = 6 

console.log (Counter.count1);

const counter: Counter = new Counter();
counter.count;

// ex.2 using other function 
//--- add new function  

function  loadinitialCount(): number {
    return 10;
}




class Counter1 {
    count = 0  //count have default value of 0 

    //static properties 
    static count1 = 0  

    //static method 
    static increment (){ 
        this.count1++; 
    }

    //-- static Block 
    static {
        console.log("initializing Counter Class")
        Counter1.count1 = loadinitialCount() // calling the function created 
    }
}


console.log(Counter1.count1) //output :10
Counter1.increment();   //output :11

console.log (Counter1.count1);

const counter1: Counter1 = new Counter1();



//-------- constructor vs static block 

//-- 1.

// And the difference over here is that this happens at the time of initialization of the class, and not

// at the time of instantiation of the class.

// So even if you don't use the class with a new keyword, still, wherever the counter class would be

// used within your application, the initialization happens.

// And the moment the initialization of this class happens, this kind of method runs, and the static

// block can set the values of the static members of your class.

// So if I talk about the differences between the constructor functions as well as static blocks, this

// is the first difference.


//--2

// The second difference can also be in the scope of the constructor function, as well as a static block.

// A ""constructor function"" operates at the instance level, so whenever you're using or instantiating a

// class with a new keyword, that's where that's the scope of the constructor function, because you're

// creating a new instance of the class.

// So it operates at the instance level.

// Whereas ""static block"", just like the static members of the class, are scoped within the class.

// So they work at the class level and not at the instance level.

// These would not be accessible inside the instance of the class, but they would only be accessible within

// the class

//-- 3

// There is also a difference in the execution time.

// Static members, even the ""static block""" are executed once when the class is first loaded and defined

// before an instance is created.

// So the moment this class is loaded and defined within your code, this kind of initialization happens,

// whereas ""constructor methods""" are executed each time a new instance of the class is created.

// So these members would be initialized once, whereas the constructor function can be executed multiple

// times in the lifecycle of your application whenever a new instance of the class is created.

// So that's that.

// Static blocks super helpful when you want to initialize the values of the static members of your class.




// Copyright (c) 2026 Joy Ng
// Author: Joy Ng
