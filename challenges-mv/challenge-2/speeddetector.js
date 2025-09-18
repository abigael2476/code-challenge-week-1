// speeddetector.js
// This  checks a car's speed

// Fixed speed for testing
const speed = 80; // You can change this to test different speeds

// Function to detect speed and assign points
function speedDetector(speed) {
  const speedLimit = 70; // Maximum allowed speed
  const kmPerPoint = 5; // 1 demerit point for every 5 km above the speed limit

  // If the speed is below the limit, everything is okay
  if (speed < speedLimit) {
    return "Ok";
  }
  // If the speed is above the limit, calculate points
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);

    // If points exceed 12, license is suspended
    if (points > 12) {
      return "License suspended";
    }
    // Otherwise, show the number of points
    else {
      return `Points: ${points}`;
    }
  }
}

// Run the function and print the result
console.log(speedDetector(speed)); // Output: "Points: 2"
