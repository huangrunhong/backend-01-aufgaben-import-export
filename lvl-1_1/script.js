let functionImport = require("./function.js");
let datenImport = require("./allDaten.js");
let cars = datenImport.cars;
let numbers = datenImport.numbers;
let carsOutput = functionImport.daten(cars);
let numbersOutput = functionImport.daten(numbers);

console.log(carsOutput);
console.log(numbersOutput);
