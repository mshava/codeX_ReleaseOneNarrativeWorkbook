var fs = require("fs");

var data = fs.readFileSync('jcole.txt');

console.log(data.toString());
console.log("Program Ended");
