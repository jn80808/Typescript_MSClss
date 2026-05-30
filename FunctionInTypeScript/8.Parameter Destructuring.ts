type Numbers ={
    a:number;
    b:number;
    c:number;

}

let numbers : Numbers ={
    a:2,
    b:3,
    c:4,
};


function sum (numbers: Numbers){
    return numbers.a + numbers.b + numbers.c 
}



// This you see is a very lengthy way of grabbing each of these properties.

// And that's the reason JavaScript provides you with something known as parameter destructuring.

// What you can do is since you need access to A, B, and C properties, instead of having a parameter

// called numbers like this, we can have an object literal instead

//{}: object literal 

// from numbers we replace it {}

function sum1 ({}: Numbers){
    return numbers.a + numbers.b + numbers.c 
}


// {} This object literal syntax signifies that we want to destructure or remove the properties inside this

// object as parameters to this function.

// So now we can grab a b as well as C using destructuring.


function sum2 ({a,b,c}: Numbers){
    return numbers.a + numbers.b + numbers.c 
}


//and from the return now we can directly just calling the properties 
function sum3 ({a,b,c}: Numbers ){
    return a + b +c 
}

// added advantage since you already assigned

// numbers type to this particular object over here.

// TypeScript goes ahead and infers the type of each of these.

// TypeScript knows that A, b, and C are of the type of numbers.

console.log(sum(numbersObject));

//so here if we put a string it shows an error 
console.log(sum({a:3,b:5,c:"string"}));



