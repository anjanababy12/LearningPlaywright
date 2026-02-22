/*Grade Calculator:

Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:

A: 90-100

B: 80-89

C: 70-79

D: 60-69

F: 0-59

*/


let n = 88;
console.log("The score is :", n);


if (n >= 90 && n <= 100) {
    console.log("Grade : A");
}
else if (n >= 80 && n < 90) {
    console.log("Grade : B");
}
else if (n >= 70 && n < 80) {
    console.log("Grade : C");
}
else if (n >= 60 && n < 70) {
    console.log("Grade : D");
}
else if (n >= 50 && n < 60) {
    console.log("Grade : E");
}
else if (n >= 0 && n < 50) {
    console.log("Grade : F");
}
else {
    console.log("Invalid input");
}

