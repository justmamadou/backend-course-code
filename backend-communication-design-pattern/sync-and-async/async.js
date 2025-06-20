import { readFile } from 'node:fs';

console.log("1")
readFile("text.txt", (err, data) => {console.log(data.toString());})
console.log("2")