//1️⃣ Print "Playwright" 5 times

let n = 1;

while (n <= 5) {
    console.log("Playwright");
    n++;

}
console.log("...................................................................");

//2️⃣ Print numbers from 1 to 10

let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}
console.log("...................................................................");

//3️⃣ Print even numbers from 1 to 20

let even = 0;
while (even <= 20) {
    if (even % 2 == 0) {
        console.log(even);
    }
    even++;
}
console.log("...................................................................");


//4️⃣ Calculate sum of first 10 natural numbers

let sum = 0;
let i = 1;
while (i <= 10) {
    sum = sum + i;
    i++;

}
console.log("sum of first 10 natural numbers is: " + sum);

console.log("...................................................................");


//5️⃣ Print the multiplication table of 7

let j = 1;
while (j <= 10) {
    console.log("7 * " + j + " = " + 7 * j);
    j++;
}