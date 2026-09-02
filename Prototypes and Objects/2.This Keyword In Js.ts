// this keyword - One thing you need to remember about this keyword is that it always refers to the object that is executing

// the current function.

// So this leads us to a rule of thumb that we can always use.

// So here is the rule of thumb.


rule of thumb: If you are inside a function, this keyword will refer to the object that is executing the function.
 If you are inside a method, this keyword will refer to the object that owns the method. 
 If you are inside a constructor, this keyword will refer to the object that is being created.


// method -> object 
// function -> window , global 


// rule of thumb 1 : We know that all functions that are part of an object are called methods.

// So if this keyword is being used by a method, then this keyword would always refer to the object.

// That's the rule number one.


// rule 1 : method -> object 
const book ={ //-> object
    title: "The Title",

    read (){    //-> function method  
    console.log(this) // Whenever a function is using a "this" keyword, and this function is a method that is a part of an object that this keyword refers to the object itself.

    }
}

book.read();

// Even if we add more methods to this object at a later stage, still our rule of thumb will hold true.

// Let's go ahead and add another method


book.stopreading = function(){ //-> function method
    console.log(this) // Whenever a function is using a "this" keyword, and this function is a method that is a part of an object that this keyword refers to the object itself.
}


book.stopreading(); 

// You'll see that we still get the same object printed to the console, because even stop reading is a

// method inside the book object, and since it's a method inside an object, the this keyword will always

// refer to the object itself.



// ------- Now let's look at a case of a regular function.



function watchmovie() {
    console. log(this)
}

watchmovie();




