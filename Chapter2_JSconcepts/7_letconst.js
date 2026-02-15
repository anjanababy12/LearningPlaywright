//var, let, const
//let and const -- block scoped
//var -- function scoped
//let is the best one to use



// var -- function scoped
// var allows redeclaration 

var a = 10;  //global scope
/**function -- block of code which can be used multiple times
2 parts - definition of function 
        - calling of function

**/
//definition part of function
function test() {
    console.log("hello");
    var a = 20;  //Local scope
    console.log(a);

    if (true) {
        var a = 30; // var always allow redeclaration

    }

    console.log(a); // outside the if block while printing a, the latest value will be printed if using var
}

//calling of function
test();


//let-- block scoped
// let doesnot allow redeclaration
console.log("trying let ")
let b = 50;
console.log(b); // global scope

function test2() {
    console.log("hi");
    let b = 60;  // local scope
    console.log(b);
    if (true) {
        let b = 90;
        console.log(b);
    }
    console.log("new value of b is ", b); // outside the if block while printing  b, the local value will be printed while using let even if there is another local value inside if block.
}

test2();
console.log(b)