class User {
  constructor({ name, age, follofers }) {
    this.name = name;
    this.age = age;
    this.follofers = follofers;
  }
  getInfo() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.follofers} followers`);
  }
}

const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers