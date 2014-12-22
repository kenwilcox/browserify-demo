var unique = require('uniq');
var data = [1, 2, 3, 4, 5, 5, 5, 6, 1, 3, 7, 6, 2, 4, 3, 3, 4, 5, 2, 1, 1];
console.log("raw data: " + data);
console.log("unique data: " + unique(data));