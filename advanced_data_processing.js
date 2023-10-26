/*
Filename: advanced_data_processing.js

Description: This code demonstrates a complex data processing algorithm that calculates the average, sum, and standard deviation of a given set of numbers.

*/

function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
  return sum / numbers.length;
}

function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
  return sum;
}

function calculateStandardDeviation(numbers) {
  const average = calculateAverage(numbers);
  let squaredDifferencesSum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    squaredDifferencesSum += Math.pow(numbers[i] - average, 2);
  }
  
  return Math.sqrt(squaredDifferencesSum / numbers.length);
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Data:", data);
console.log("Average:", calculateAverage(data));
console.log("Sum:", calculateSum(data));
console.log("Standard Deviation:", calculateStandardDeviation(data));

// More complex data processing tasks can be implemented using these functions.