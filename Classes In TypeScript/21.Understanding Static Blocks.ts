// A static block can be considered as a constructor for setting the values, the static values within your class.

// So it is specifically used to set the value of the static members of your class.

// These values can be dependent on an external source or external information, which is available within

// your application whenever you initialize a class which has static members, of course.

// So let's see how these static blocks work.


class Counter {
    count = 0  //count have default value of 0 
    static count1 = 0  


    
    static increment (){ 
        this.count1++; 
    }


}

