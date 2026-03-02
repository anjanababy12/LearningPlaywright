let a = 10;

console.log(a++ + ++a);
console.log(a);

/*
A + B

ExpA -->10, a --> 11 (first we will assign the value, then increment the value)
+
ExpB -->11,a -->12 (first we will increment the value, then assign the value)

ExpA + ExpB--> 10 + 12 = 22

ERD
Expression and result table

line no | Expression             | ExpA      | a(value)| a(after increment)| a1(after increment)
1       | a=10                   | 10        | -       | -                 | -
2       | console.log(a++ + ++a) | 10        | 11      | 11                | 12
3       | console.log(a)         | 12        | 12      | 12                | 12

*/

let g = 10;
console.log(++g + ++g);
console.log(g);

/*
++g --> 11,12
++g -->12,13

11+ 12 --> 23
*/
/*
A + B

ExpA -->11, g --> 12 (first we will increment the value, then assign the value)
+
ExpB -->12,g -->13 (first we will increment the value, then assign the value)

ExpA + ExpB--> 11 + 12 = 23

ERD
Expression and result table

line no | Expression             | ExpA      | a(value)| a(after increment)| a1(after increment)
1       | a=10                   | 10        | -       | -                 | -
2       | console.log(a++ + ++a) | 10        | 11      | 11                | 12
3       | console.log(a)         | 12        | 12      | 12                | 12

*/
