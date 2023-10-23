/* sophisticated_code.js */

// This code demonstrates a complex and elaborate data structure
// along with various functions to manipulate and process the data.

// Define a class for representing a person
class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create some people
const person1 = new Person("Alice", 25, "Software Engineer");
const person2 = new Person("Bob", 30, "Data Scientist");
const person3 = new Person("Charlie", 35, "Product Manager");

// Define a class for representing a group of people
class Group {
  constructor(name, members) {
    this.name = name;
    this.members = members;
  }

  introduceMembers() {
    console.log(`Members of ${this.name}:`);
    this.members.forEach((person) => {
      person.introduce();
    });
  }

  countMembers() {
    console.log(`Number of members in ${this.name}: ${this.members.length}`);
  }
}

// Create a group of people
const group = new Group("Development Team", [person1, person2, person3]);

// Introduce the group members
group.introduceMembers();

// Count the members
group.countMembers();

// Perform some data processing on the group
const oldestPerson = group.members.reduce((oldest, current) => {
  return current.age > oldest.age ? current : oldest;
});

console.log(`The oldest person in ${group.name} is ${oldestPerson.name}.`);

// Calculate the average age of the group
const totalAge = group.members.reduce((sum, current) => {
  return sum + current.age;
}, 0);
const averageAge = totalAge / group.members.length;

console.log(`The average age of ${group.name} is ${averageAge}.`);

// Generate an HTML table with the group members
const generateHTMLTable = (group) => {
  let tableHTML = "<table>\n";
  tableHTML += "<thead>\n";
  tableHTML += "<tr><th>Name</th><th>Age</th><th>Occupation</th></tr>\n";
  tableHTML += "</thead>\n";
  tableHTML += "<tbody>\n";
  
  group.members.forEach((person) => {
    tableHTML += `<tr><td>${person.name}</td><td>${person.age}</td><td>${person.occupation}</td></tr>\n`;
  });
  
  tableHTML += "</tbody>\n";
  tableHTML += "</table>\n";
  
  return tableHTML;
};

const groupTableHTML = generateHTMLTable(group);
console.log(groupTableHTML);

// Perform a complex operation on the group
const complexOperation = () => {
  console.log("Performing a complex operation...");
  // Simulate a long-running task
  for (let i = 0; i < 1000000; i++) {
    // Some complex computations
    Math.sqrt(Math.log(Math.pow(Math.sin(i), Math.cos(i))));
  }
  console.log("Complex operation completed!");
};

complexOperation();
