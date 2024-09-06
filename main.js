// 1.
// Create a javascript function that takes firstname and lastname as 2 parameters and uses console.log() to output the person's name. Check that it works and is printet correctly.
const person = {
  firstName: "John",
  lastName: "Doe",
};

function fullname(a, b) {
  return a + " " + b;
}

let name = fullname(person.firstName, person.lastName);
console.log(name);

// 2.
// Create a function that calculates the area of a rectangle. The function should return the result. Test that it works.
function getRectangleArea(a, b) {
  return a * b;
}

let rectangle = {
  width: 5,
  height: 10,
};
console.log(getRectangleArea(rectangle.width, rectangle.height));

//3.
// ▪ Create a function that takes speed and time as 2 parameters and calculates and returns the distance. Use the function to test that it works by using the 'log' again. Print out "You have travelled *x* km" where *x* is replaced by the result from the function.
