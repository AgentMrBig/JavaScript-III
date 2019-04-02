/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding. When in the global scope, the value of 'this'
will be the window/console object. 
* 2. Implicit Binding. Like in object.method(args). 'This' is the object.
* 3. New binding. New binding is when a constructor function is used to create 
a new object with the new keyword. 
* 4. Explicit binding. When call or apply method is used. You can set the context
of functions this way.
*
* write out a code example of each explanation above
*/
function test(){
    console.log('imma test');
}

const dude = {
    name: 'that dude',
    age: 'old enough',
    hobby: () => {
        console.log("I make clowns cry");
    }
}

function plane(){
    this.fuel = 100,
    this.passengers = 2,
    this.engines = 2, 
    this.takeOff = (pilot) => {
        console.log("Buckle Up... they let " + pilot + " fly the plane!");
    },
    this.fly = function(){
        console.log("Dont fly so high");
    },
    this.land = () => {
        console.log("Get ready for rough landing");
    }
}

// Principle 1

// code example for Window Binding
test(); 


// Principle 2

// code example for Implicit Binding
dude.hobby();

// Principle 3

// code example for New Binding
var f16 = new plane();
f16.fly();

// Principle 4

// code example for Explicit Binding
f16.takeOff.call(dude, dude.name); 
