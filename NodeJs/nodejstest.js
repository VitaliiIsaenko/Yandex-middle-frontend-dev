const fs = require('fs');

const text = fs.readFileSync('nodejstest.js', 'utf8');
console.log(text);