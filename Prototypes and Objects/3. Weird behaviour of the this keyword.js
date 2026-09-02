// method -> object 
// function -> window , global 


//#2 original code snippet
const book ={ //-> object
    title: "The Title",
    //method 1
    read (){    //-> function method  
    console.log(this) // Whenever a function is using a "this" keyword, and this function is a method that is a part of an object that this keyword refers to the object itself.

    }
}

book.read();



//#3
// with additional properties with array 
const book1 ={ //-> object
    title: "The Title",
    authors: ["Author 1", "Author 2"],

    //method 1
    read (){   
        console.log(this)  // console log for the whole object
    },


    //method 2
    printAuthors(){
       // console.log(this.authors)
       this.authors.forEach(function(author : string ){
        console.log(author) // specific console log only for author 
        
       })
    }    
}


book1.read();
// output :
// {
//   title: "The Title",
//   authors: [ "Author 1", "Author 2" ],
//   read: [Function: read],
//   printAuthors: [Function: printAuthors]
// }


book1.printAuthors();
// output :
// Author 1
// Author 2




// what if I want to add the title of the book as well, along with the author's name, so that we

// know we are talking about the authors of which book?

// Well, we can simply refer to the book title in our console log statement and print the title of the

// book as well.

// So let's change our print authors method a bit.



//#3.1
// with additional properties with array 
const book2 ={ //-> object
    title: "The Title",
    authors: ["Author 1", "Author 2"],

    //method 1
    read (){   
        console.log(this)  // console log for the whole object
    },


    //method 2
    printAuthors(){
       // console.log(this.authors)
       this.authors.forEach(function(author : string ){
        //console.log(author) // specific console log only for author 
        console.log(this.title + " - " + author) // console log for the title of the book along with the author name
        
       })
    }    
}


book2.printAuthors();
// output :
// underined '-' Author 1
// underined '-' Author 2

//TypeError: Cannot read properties of undefined (reading 'title')






//#3.3
// with additional properties with array 
const book3 ={ //-> object
    title: "The Title",
    authors: ["Author 1", "Author 2"],

    //method 1
    read (){   
        console.log(this)  // console log for the whole object
    },


    //method 2
    printAuthors(){
       // console.log(this.authors)
       this.authors.forEach(function(author : string ){
       
        console.log(this) 
        
       })
    }    
}


book3.printAuthors();


// Output :

// 2 authors:
// authors: ["Author 1", "Author 2"]

// So forEach() executes the function twice:
// Author 1 → console.log(this) → Window
// Author 2 → console.log(this) → Window

// Window {window: Window, self: Window, document: document, name: "", location: Location, ...}
// Window {window: Window, self: Window, document: document, name: "", location: Location, ...}


// So you'll see that we print the window object, which means that this particular function that is nested

// inside the for each loop inside our print authors method actually refers to the global scope and not

// to the local scope of print authors.

// That is the reason why we are printing the window object to the console.

// Now, there are two ways to solve this problem.

// One of the way is to define the value of this for our for each loop.

// If we pass a second argument to our for each loop.



//sol1 : add 2nd argument to forEach() method



//#3.4
// 1st argument and 2nd argument to forEach() method
const book4 ={ //-> object
    title: "The Title",
    authors: ["Author 1", "Author 2"],

    //method 1
    read (){   
        console.log(this)  // console log for the whole object
    },


    //method 2
    printAuthors(){
       // console.log(this.authors)
       this.authors.forEach(function(author : string ){
       
        console.log(this) //1st argument function {1st argument} 
        
       }, this)  //OUTER THIS : 2nd this is not inside of the function {1st argument}  so this is 2nd argument to forEach() method
    }    
}


book4.printAuthors();




// 1st argument → function(author) { console.log(this); }
// 2nd argument → this
//                   ↑
//                 book4


// book4.printAuthors()
//         ↓
// outer this = book4
//         ↓
// forEach(..., this)
//         ↓
// callback this = book4


// Author 1 → this = book4
// Author 2 → this = book4

// The second this tells forEach:

// "Use this value as this inside the callback function."

// Since the outer this is book4, the callback's this will also be book4.

// Because there are 2 authors, it prints the book4 object twice:


// {
//     title: "The Title",
//     authors: ["Author 1", "Author 2"],
//     read: ƒ,
//     printAuthors: ƒ
// }

// {
//     title: "The Title",
//     authors: ["Author 1", "Author 2"],
//     read: ƒ,
//     printAuthors: ƒ
// }






//#3.5
// 1st argument and 2nd argument to forEach() method we can now add our title of the book along with the author name in the console log statement because now we have access to the outer this which is book4 object and we can access the title property of that object.
const book5 ={ //-> object
    title: "The Title",
    authors: ["Author 1", "Author 2"],

    //method 1
    read (){   
        console.log(this)  // console log for the whole object
    },


    //method 2
    printAuthors(){
       // console.log(this.authors)
       this.authors.forEach(function(author : string ){
       
        console.log(this.title, '- ' , author) //1st argument function {1st argument} 
        
       }, this)  //OUTER THIS : 2nd this is not inside of the function {1st argument}  so this is 2nd argument to forEach() method
    }    
}


book5.printAuthors();


// OUTPUT :

// The Title -  Author 1
// The Title -  Author 2


// outer this
//     ↓
//   book5
//     ↓
// this.title
//     ↓
// "The Title"



// And author comes from the array:

// ["Author 1", "Author 2"]

// First iteration:

// this.title → "The Title"
// author     → "Author 1"

// Output:

// The Title -  Author 1

// Second iteration:

// this.title → "The Title"
// author     → "Author 2"



// The Title -  Author 2


// FINAL Output :

// The Title - Author 1
// The Title - Author 2




//#3.6
// with arrow function we can also use arrow function to solve this problem because arrow function does not have its own this keyword, so it will refer to the outer this which is book5 object and we can access the title property of that object.


const book6 ={ //-> object
    title: "The Title",
    authors: ["Author 1", "Author 2"],

    //method 1
    read (){   
        console.log(this)  // console log for the whole object
    },


    //method 2
    printAuthors(){
       // console.log(this.authors)
       this.authors.forEach((author : string ) => {
       
        console.log(this.title, '- ' , author) //1st argument function {1st argument} 
        
       }) //we remover the this on here because we are using arrow function and arrow function does not have its own this keyword, so it will refer to the outer this which is book6 object and we can access the title property of that object.
    }    
}


book6.printAuthors();



//  Output :

// The Title - Author 1
// The Title - Author 2




// This is a major difference between functions declared using arrow functions and the function keyword.


//author : string  = So over here the arrow function binds itself to the scope of the book object.

// Because print authors method also binds to the book object itself.

// These are the basics of the this keyword in JavaScript.



// We will keep discussing the this keyword in context to the constructor functions and classes, as well

// as we build upon some other crucial concepts through this section of the course.