let dataImport = require("./data.js");
let citys = dataImport.data;
let functionsImport = require("./function.js");
let moreThan100000 = functionsImport.moreThan100000;

let bigCity = moreThan100000(citys);
let lessThan100000 = functionsImport.lessThan100000;
let smallCity = functionsImport.lessThan100000(citys);

console.log(bigCity);

console.log(smallCity);
