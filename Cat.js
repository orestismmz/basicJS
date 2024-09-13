export class Cat {
  constructor(name, color, breed) {
    this.name = name;
    this.color = color;
    this.breed = breed;
  }
  getCat() {
    return `This is ${this.name}, he is ${this.color}, and he is a ${this.breed}.`;
  }
  setName(newName) {
    this.name = newName;
  }
}

// ▪ export class Person {
//  ▪ constructor(firstname, lastname) {
//  ▪ this.firstname = firstname; ▪ this.lastname = lastname; ▪
// }
//  ▪ getName() { ▪ return this.firstname + ' ' + this.lastname; ▪ } ▪ }
