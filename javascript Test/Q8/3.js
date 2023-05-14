const person1 = {
  name: "Bob",
  age: 25,
  city: "London",
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
  getCity: function () {
    return this.city;
  },
};

const person2 = {
  name: "Charlie",
  age: 26,
  city: "Vancouver",
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
  getCity: function () {
    return this.city;
  },
};

const person3 = {
  name: "David",
  age: 28,
  city: "Dubrovnik",
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
  getCity: function () {
    return this.city;
  },
};


const person4 = {
  name: "Angela",
  age: 20,
  city: "Florida",
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
  getCity: function () {
    return this.city;
  },
};


module.exports = { person1, person2, person3, person4 };