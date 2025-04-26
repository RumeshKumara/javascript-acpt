const person = {
    firstName: "Rumesh",
    lastName: "Kumara",
    age: 22,
    isEmployed: true,
    hobbies: ["reading", "traveling", "sports"],
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    },
    greet: function () {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    },
    run: function () {
        console.log(`${this.firstName} can run`);

    }
};

// Accessing properties
person.firstName = "Mahesh"
console.log(person.firstName);
console.log(person.hobbies[1]);

// Calling a method
person.greet();
person.run();