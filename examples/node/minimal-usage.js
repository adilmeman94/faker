#!/usr/bin/env node

var faker = require("../../index");
faker.locale = "en";

//console.log(faker.lorem.sentences())

console.log(faker.name.findName());
console.log("favorite indoor game");
console.log(faker.sport.indoor());
console.log("favorite outdoor game");
console.log(faker.sport.outdoor());
console.log("manufacturer name");
console.log(faker.mobile.manufacturer());
console.log("model name");
console.log(faker.mobile.model());
console.log("manufacturer + model name");
console.log(faker.mobile.mobile());
