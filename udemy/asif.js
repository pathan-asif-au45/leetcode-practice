var prompt = require('prompt-sync')();

var n = prompt('How many more times? ');
for (let i = 0; n > i; i++) {
    console.log("hello world")
}