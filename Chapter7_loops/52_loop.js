// For loop - ICU (Initialization , Condition , Updation)

/*Increment Operator
 -ore and post increment
  -- pre increment -- increment me first, then assign the value
  -- post increment -- assign the value first, then increment

*/
let a1 = 10;
let b = ++a1; // pre increment --> takes the value of a1, then it increments the value -->10+1=11, then the value is assigned to b. a1 is also increased to 11.
console.log(b);


//post increment

let c = 10;
let d = c++; // post increment --> takes the value of c, then it increments the value -->10+1=11, then the value is assigned to d. c is also increased to 11. Atfirst the c value will be 10 and d value will be 11, once increment in next loop it will become 11.
console.log(d);
console.log(c);

