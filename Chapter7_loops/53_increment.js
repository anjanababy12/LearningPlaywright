let a1 = 10;
let b = ++a1; // pre increment --> takes the value of a1, then it increments the value -->10+1=11, then the value is assigned to b. a1 is also increased to 11.
console.log(a1);
console.log(b);


/*
ERD
Expression and result table

line no | Expression             | a1 | b(value)| b(after increment)| a1(after increment)
1       | a1=10                  | 10 | -       | -                 | -
2       | b=++a1                 | 11 | 11      | 11                | 11
3       | console.log(b)         | 11 | 11      | 11                | 11
4       | console.log(a1)        | 11 | 11      | 11                | 11

*/

let a = 10;
console.log(a++ + a);
/*
A+ B
A --- > a++  (ExpA--10 (post increment, so first time the value will be 10); a- 11)
+
B --- > a    ( b- 11)
 
EXPA = 10
EXPB = 11

ERD
Expression and result table

line no | Expression             | ExpA      | a(value)| a(after increment)| a1(after increment)
1       | a=10                   | 10     | -       | -                 | -
2       | console.log(a++ + a)   | 10     | 11      | 11                | 11

*/