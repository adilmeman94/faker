#!/usr/bin/env node

var faker = require("../../index");
faker.locale = "en";

//console.log(faker.lorem.sentences())

console.log(faker.name.findName());
console.log("favorite indoor game");
console.log(faker.sport.indoor());
console.log("favorite outdoor game");
console.log(faker.sport.outdoor());
console.log(faker.mobile.manufacturer());
console.log(faker.mobile.model());
console.log(faker.mobile.mobile());
