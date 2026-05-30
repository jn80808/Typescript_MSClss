const str ="Hello World"

const part1 = str.slice(7);
console.log(part1);


const part2 = str.slice(7,10);
console.log(part2);



// Now what if we were supposed to define this kind of a dynamic function in TypeScript?

// A function which can be invoked with multiple arguments and depending upon how many arguments you are

// passing to a specific function, the result output of that function would be different.

// That's where we use function overloading in TypeScript.

// Let's try to understand function loading.


type Reservation = {
    departureDate : Date;
    returnDate? : Date;
    departingFrom : string;
    destination: string;

}

// I want to create a function that is responsible for creating this kind of a reservation.
// So imagine a form being input by the user where he fills in all the details and clicks on create reservation.
// That is the reserve function that I want to create, which is responsible for reserving the ticket of
// the user and in the end creating an object like this, which is the final reservation for the user.


// Let's annotate this with a call signature.

type Reserve = () => Reservation;


//So the purpose of this function is to create a reservation which the propeties looks like type Reservation 

type Reserve1 = (
    departureDate : Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
) => Reservation;       //Reservation type is calling here means this function  reservation 


// so reservation can include the return date as well as not include the return date.
// So it's possible that a user does a one way reservation doesn't do a two sided reservation.
// In that case, this call signature has to be declared in such a way that this accepts three arguments
// as well as four arguments.


// It turns out that we can change the syntax of this call signature in such a way that we can declare
// multiple types of argument combinations that this function can accept.
// In order to do that, this call signature is first converted into an object like structure.
// So instead of starting the call signature with brackets, we started with curly brackets like so.


type Reserve2 = { //so here the properties now is inside of curly bracket {}
    ( 
        departureDate : Date,
        returnDate: Date,
        departingFrom: string,
        destination: string
    ):Reservation  // and from arrow => we use now :  and still this function returns a reservation
};   


//so here we can add the 2nd possiblity 


//so this Reserve3 have 2 possibility that one have return date and other one without returndate 
type Reserve3 = { 
    ( 
        departureDate : Date,
        returnDate: Date,
        departingFrom: string,
        destination: string
    ):Reservation  
    ( 
        departureDate : Date, //so here the 2nd posibility that the return date is can not included
        departingFrom: string,
        destination: string
    ):Reservation  

};   


//Reserve3 This is function overloading.
// We are creating an overlap between two possible scenarios, where this same reserve function can be
// invoked with the return date, as well as without the return date.


// Now it's possible that this function is either invoked with the first possibility, or is invoked with
// the second possibility, since it is certain that one of these options would only be invoked when you
// invoke the reserve function.
// The other option would never be used in that case.
// for this we can add never 

type Reserve4 = { 
    ( 
        departureDate : Date,
        returnDate: Date,
        departingFrom: string,
        destination: string
    ):Reservation  | never ;  //so here we added never so if the 2nd option is the return ,so this 1st option will never return 
    ( 
        departureDate : Date, 
        departingFrom: string,
        destination: string
    ):Reservation | never ; //so here we added never so if the 1st option is the return, so this 1st option will never return

};   


//lets create a const now 

const reserve: Reserve4 =() => {};

//now we will add parameter ()
// we will add paramter that both option 1 and option 2 have same firts 

const reserve2: Reserve4 =(  
                            departureDate : Date, 
                            returnDateOrdepartingFrom: Date | string, /**this is the union of 1st option and 2nd option 2nd properties   */ 
                            departingFromOrdestination: string,     /**this is the union of 1st option and 2nd option 3nd properties   */ 
                            destination?: string                     /**the last propeties form the 1st option */

) => {
    if (returnDateOrdepartingFrom instanceof Date && destination !== undefined) {
        return {
            departureDate: departureDate,
            returnDate : returnDateOrdepartingFrom,
            departingFrom : departingFromOrdestination,
            destination: destination
        };
    } else if (typeof returnDateOrdepartingFrom === "string" && destination !== undefined) {
        return {
            departureDate: departureDate,
            departingFrom : departingFromOrdestination,
            destination: destination
        };
    }
    throw new Error("Please provide valid details to reserve a ticket");

};

console.log(reserve2 (new Date(), new Date (), "Switzerland","Austrilia")) //with return date 
console.log(reserve2 (new Date(), "Switzerland","Austrilia")) //with no return date 


