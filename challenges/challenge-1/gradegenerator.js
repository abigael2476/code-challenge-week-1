// studentGrade.js
// This program calculates a student's grade based on marks

// Fixed marks for testing
const marks = 50; // Change this value to test different grades

// First, check if the marks are valid (0–100)
if (marks < 0 || marks > 100) {
  console.log("Invalid score"); // Marks outside 0–100 are invalid
}
// If marks are above 79, the student gets an A
else if (marks > 79) {
  console.log("Grade: A");
}
// Marks between 60 and 79 earn a B
else if (marks >= 60) {
  console.log("Grade: B");
}
// Marks between 49 and 59 earn a C
else if (marks >= 49) {
  console.log("Grade: C"); // 50 falls here
}
// Marks between 40 and 48 earn a D
else if (marks >= 40) {
  console.log("Grade: D");
}
// Marks below 40 earn an E
else {
  console.log("Grade: E");
}
