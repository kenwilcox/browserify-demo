var unique = require('uniq');
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
console.log("raw data: " + data);
console.log("unique data: " + unique(data));