/*
   Filename: ComplexCode.js
   Description: This code demonstrates a sophisticated and elaborate JavaScript program that showcases various advanced concepts and techniques.
*/

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Function to calculate the factorial of a number
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Arrow function to check if a number is prime
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// Array of persons
const people = [
  new Person("Alice", 25),
  new Person("Bob", 30),
  new Person("Charlie", 35),
];

// Higher-order function to filter prime ages
const getPrimeAges = (people) => {
  return people.filter((person) => isPrime(person.age));
};

// Initialize a map
const myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");

// Asynchronous function that adds a delay
const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Asynchronous function to fetch data from an API
const fetchData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Promise.all to fetch data from multiple APIs simultaneously
const fetchDataFromMultipleAPIs = async () => {
  try {
    const promise1 = fetchData();
    const promise2 = fetchData();
    const [data1, data2] = await Promise.all([promise1, promise2]);
    return [data1, data2];
  } catch (error) {
    console.error("Error fetching data from multiple APIs:", error);
    throw error;
  }
};

// Recursive function to calculate Fibonacci series
const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Generate a random number between min (inclusive) and max (exclusive)
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// Event listener for button click
document.getElementById("myButton").addEventListener("click", () => {
  console.log("Button clicked!");
});

// Main execution
(async () => {
  console.log("Welcome to the complex code example!");
  console.log("Factorial of 5:", factorial(5));
  console.log("Is 17 prime?", isPrime(17));
  people.forEach((person) => person.introduce());
  console.log("People with prime ages:", getPrimeAges(people));
  console.log("Value for key 'key1' in map:", myMap.get("key1"));
  await delay(2000);
  const fetchedData = await fetchData();
  console.log("Fetched data:", fetchedData);
  const [fetchedData1, fetchedData2] = await fetchDataFromMultipleAPIs();
  console.log("Fetched data from multiple APIs:", fetchedData1, fetchedData2);
  console.log("Fibonacci number at index 10:", fibonacci(10));
  console.log("Random number between 1 and 100:", getRandomNumber(1, 100));
})();

// ... More complex code ...
// ...
// ... (Continuation of code, exceeding 200 lines) ...
// ...