//so here we have multiple number here number 1 and 2 and so on..
function multiplyBy(by:number,number1 : number,number2 : number){} 


//so instead na manually declare parameter number 1 and so on 
//we can solve this by use Rest Parameter 


//....parameterName : this is the syntax for RestParameter 
function multiplybyRestParameter (by:number, ...number){} //number is the parameter here 

//so next what will be the type of this parameter 
//so when you use like this rest parameter this is expected to be a array 
//so it will be like rest parameter array 

function multiplybyRestParameter1 (by:number, ...numbers:number[]){
    return numbers.map((number)=>by*number );
}

// so we can put more number as we can 
console.log(multiplybyRestParameter1(2,3,4,5,6,7)); 
console.log(multiplybyRestParameter1(2,3)); 


//so lets try to add string 
console.log(multiplybyRestParameter1(2,3,4,5,6,7,"string")); //as you can see its getting an error 



//here another example that function does require only 2 numbers 

const args =[8,5]; //this is like x and y 
const angle = Math.atan2(...args) // typescript showing an error because this know this should only require 2 number 
                                  // We getting error becuase we put strictly type over in the cosnt args only need 2 argument s

//so to solve the problem we will convert it to tuple
// adding as make this will become a tuple 
const args1 =[8,5] as const; 
const angle1 = Math.atan2(...args1) //You will see TypeScript doesn't have a problem with this, because now TypeScript understands that you
                                    //are passing args as read only, which is two numbers, and that's what this function expects


//alternative if you dont want to use const  "as const"
//we can use annotate 
const args2 : [number,number]=[8,5]; 
const angle2 = Math.atan2(...args2) 


