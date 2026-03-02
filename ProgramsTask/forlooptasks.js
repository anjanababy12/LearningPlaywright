//1️⃣ Print "Hello" 5 times

for (i = 0; i < 5; i++) {
    console.log("Hello");

}
console.log("...................................................................");

//2️⃣  Print numbers from 1 to 10

for (x = 1; x < 11; x++) {
    console.log(x);

}
console.log("...................................................................");

//3️⃣ Print even numbers from 1 to 20

for (j = 0; j <= 20; j++) {
    if (j % 2 == 0) {
        console.log(j)
    }

}

console.log("...................................................................");


//4️⃣ Print the sum of first 10 natural numbers

let sum = 0;

for (a = 1; a <= 10; a++) {
    sum = sum + a; // add each number to sum
}

console.log("Sum of first 10 natural numbers:", sum);



console.log("...................................................................");


//5️⃣ Print the multiplication table of 5

for (b = 1; b <= 10; b++) {
    console.log("5 * " + b + " = " + 5 * b)
}
console.log("...................................................................");