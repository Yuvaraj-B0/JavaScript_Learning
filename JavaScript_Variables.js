/**A variable is like a container that holds data that can be reused or updated later in the program.
 *  In JavaScript, variables are declared using the keywords var, let, or const.
 */

/*1. var Keyword
The var keyword is used to declare a variable. It has a function-scoped or globally-scoped behaviour.*/
var n = 5;
console.log(n);

var n = 20; // reassigning is allowed
console.log(n);

/* Variables defined with var are hoisted to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared: */
carName = "Volvo";
var carName;
console.log(carName);

/*2. let keyword
Variables declared with let have Block Scope

Variables declared with let must be Declared before use

Variables declared with let cannot be Redeclared in the same scope
*/

let message;
message = 'Hello'; // store the string 'Hello' in the variable named message
//let message = 'JS'; //let cannot be Redeclared
console.log(message);
{
    let a=5; //Variables declared with let have Block Scope
    console.log(a);
    a=55; //Reassign the value
    console.log(a);
}
//console.log(a); //// a can NOT be used here

/*1. const Keyword
Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope
*/

const PI = 3.141592653589793;
//PI = 3.14;      // This will give an error
//PI = PI + 10;  // This will also give an error
console.log(PI);

//JavaScript const variables must be assigned a value when they are declared
/*
const PI;
PI = 3.14159265359; // This will also give an error
*/

