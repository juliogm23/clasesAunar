const faker = require("faker");

class HelloWorldServices {
  constructor() {
    this.greets = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.greets.push({
        id: faker.datatype.uuid(),
        messaje: "hello " + faker.commerce.productName(),
      });
    }
  }

  create() {}

  find() {
    return this.greets;
  }

  findOne(id) {
    return this.greets.find(item => item.id === id);
  }

  update() {}

  delete() {}
}

module.exports = HelloWorldServices;
