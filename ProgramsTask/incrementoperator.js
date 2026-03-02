let a = 5;
let b = a++ + ++a; // 5 + 6 =11
let c = a++ + ++a + ++a + ++a + a++; //5 + 6 +7 + 8 + 9

console.log(b);
console.log(a);
console.log(c);