import Book from "./Book.js";
import Car from "./Car.js";
import { Cat } from "./Cat.js";

// FUNCTIONS & OBJECTS

// Create a javascript function that takes firstname and lastname as 2 parameters and uses console.log() to output the
// person's name. Check that it works and is printet correctly.
const person = {
  firstName: "John",
  lastName: "Doe",
};

function fullname(a, b) {
  return a + " " + b;
}

let name = fullname(person.firstName, person.lastName);
console.log(name);

// Create a function that calculates the area of a rectangle. The function should return the result. Test that it works.
function getRectangleArea(a, b) {
  return a * b;
}

let rectangle = {
  width: 5,
  height: 10,
};
console.log(getRectangleArea(rectangle.width, rectangle.height));

// Create a function that takes speed and time as 2 parameters and calculates and returns the distance.
// Use the function to test that it works by using the 'log' again.
// Print out "You have travelled *x* km" where *x* is replaced by the result from the function.

function calculateDistance(speed, time) {
  return speed * time;
}

const speed = 60;
const time = 2;

const distance = calculateDistance(speed, time);
console.log(`You have travelled ${calculateDistance(speed, time)} km`);

// Create an object called calculator with the name of the owner (eg. Your name)
// and modify your code so the 3 previousfunctions are attached to the object.
// Adjust your code so that you can call the functions and test that they still work.

let calculator = {
  owner: "John",
  a: fullname(person.firstName, person.lastName),
  b: getRectangleArea(rectangle.width, rectangle.height),
  c: calculateDistance(speed, time),
};

console.log(calculator);

// CLASSES

// Create a Cat class with name, color, breed.
// Create a constructor that takes 3 parameters to create an object with name, color, breed.
// Create a function/method that returns the cat's data.
// Create a function that can change the cat's name.

let myCat = new Cat("Charls", "Grey", "Persian");

console.log(myCat);
console.log(myCat.getCat());

myCat.setName("Sony");
console.log(myCat);

// ▪ Define the Car class:
// ▪ Create a class namedCar.
// ▪ Adda constructor that accepts make, model, and year as parameters and initializes these properties.
// ▪ AddMethods: ▪ getCarInfo method:This methodshould return a string containing the car's make, model, and year.
// ▪ start method:This method should set a propertycalled isRunning to trueand return a string indicating the car has started.
// ▪ stopmethod:This methodshould set the isRunning propertyto false and return a string indicating the car has stopped.
// ▪ Create Instances and Test Methods:
// ▪ Create twoinstances of the Car class with different make, model, and year values.
// ▪ Call the getCarInfo, start, and stop methods on these instances and print the results to verify that everything works as
// expected.

let car1 = new Car("Toyota", "Camry", 2015);
let car2 = new Car("Honda", "Civic", 2018);
console.log(car1.getCarInfo());
car2.startCar();
console.log(car2.getCarInfo());

// ARRAYS

// ▪ Create an array with 5 names. Print out the first element (name) using console.log()
// ▪ Use the indexOf function to get the index of a name that exists in your array.
// ▪ Try the indexOf function with a name that does not exist. What is returned?
// ▪ Use the push function to add a new name to the array of names, so you have 6 names in the array. 'log' the array to verify.
// ▪ Use the slice function on the array, to create a new array with the first 3 names. 'log' the array to verify.
// ▪ Create 2 objects with firstname, lastname, email– values. Add the two objects to a new array. 'log' the array to verify.
// Also 'log' the first objects' email in a separate 'log'.

const names = ["John", "Mary", "David", "Emily", "Michael"];
console.log(names);
console.log(names[0]);
console.log(names.indexOf("David"));
console.log(names.indexOf("Tony"));
names.push("Tony");
console.log(names);
console.log(names.slice(0, 3));

const user1 = {
  firstname: "John",
  lastname: "Doe",
  email: "john.doe@example.com",
};

const user2 = {
  firstname: "Hans",
  lastname: "Landa",
  email: "hans.landa@example.com",
};

let users = [];
users.push(user1, user2);
console.log(users);
console.log(users[0].email);
users.map((user) => {
  console.log(`First name: ${user.firstname} Lastname: ${user.lastname} email: ${user.email}`);
});

// ▪ Exercise: Student Grades Management
// ▪ Create a Student Object:
// ▪ Define a Student object with properties: name, id, and grades (an array of numbers).
// ▪ AddGrades:
// ▪ Write a function named addGrade that takes a Student object and a grade (number) as parameters, and adds the grade to the
//   student's grades array.
// ▪ Update Student Name:
// ▪ Write a function named updateStudentName that takes a Student object and a new nameas parameters and updates the student's
//   name.
// ▪ Test the Functions:
// ▪ Create a student object.
// ▪ Adda fewgrades to the student.
// ▪ Update the student's name and print the updated object.

const student1 = {
  name: "John",
  id: 1,
  grades: [7, 10],
};
// console.log(student1);

function addGrade(student, grade) {
  student.grades.push(grade);
}

addGrade(student1, 12);
// console.log(student1);

function updateStudentName(student, name) {
  student.name = name;
}
updateStudentName(student1, "Jane");

console.log(student1);

// LOOPS
const numbers = [4, 7, 9, 1.2, 5, 7];
let sum = 0;
for (let x of numbers) {
  sum = sum + x;
}

console.log("The result is " + sum);

// Create an array of with the following values:
// 'Peter', 7, 'Marianne', true, 'Helle' and 8.
// Notice it is a mix of strings, numbers and a boolean.
// Usea loop to iterate over the array and generate the following in the console:
// Peter is a string 7 is a number Marianne is a string true is a boolean Helle is a string 8 is a number
// Hint: You can use typeof to determine the type of a value
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

const arr = ["Peter", 7, "Marianne", true, "Helle", 8];
arr.forEach((item) => {
  console.log(`${item} is ${typeof item}`);
});

// ▪ Create an array of book objects, with title and author (where both are strings). Create 5 objects in the array.
// ▪ Create an HTML page with a <ul>.
// ▪ Write javascript that loops over the array of book objects and create a new <li> for each book object and add
//   the title and author to the <li> and insert it into the <ul>.
// ▪ Verify that it works with any number of objects by removing 2 of the 5 objects from the array and run it again.

const books = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Who Whateversen",
  },
];

const books2 = [
  new Book("Harry Potter", "J.K. Rowling"),
  new Book("The Lord of the Rings", "J.R.R. Tolkien"),
  new Book("The Hunger Games", "Suzanne Collins"),
  new Book("The Girl with the Dragon Tattoo", "Who Whateversen"),
];

let bookList = document.querySelector("#bookList");
books2.forEach((book) => {
  const li = document.createElement("li");
  li.textContent = `${book.title} by ${book.author}`;
  bookList.appendChild(li);
});

//
//

const email = "kirs@cphbusiness.dk";
const firstName = "Christian";
const lastName = "Kirschnerg";

if (email === "kirs@cphbusiness.dk" || (firstName === "Christian" && lastName === "Kirschnerg")) {
  console.log(`Welcome ${firstName}`);
}

const number = 4;

if (number > 2 && number < 10) {
  console.log("Hello");
}

// ▪ Create a function, findLargest, that takes 4 numbers as 4 parameters and returns the largest of the 4 numbers.
// ▪ Create a function that takes 3 numbers as 3 parameters. The first parameter is the numberto check. The 2nd and
//   3rd parameter is a range (from and to). If the first parameter is within the range of the range it should return
//   true and false if not.

const largest = (number1, number2, number3, number4) => {
  if (number1 > number2 && number1 > number3 && number1 > number4) {
    return number1;
  } else if (number2 > number1 && number2 > number3 && number2 > number4) {
    return number2;
  } else if (number3 > number1 && number3 > number2 && number3 > number4) {
    return number3;
  } else {
    return number4;
  }
};

console.log(largest(21, 3, 6, 13));

//
//

const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
// const numberX = prompt("Enter a number between 1 and 100");
// console.log(numberX);
