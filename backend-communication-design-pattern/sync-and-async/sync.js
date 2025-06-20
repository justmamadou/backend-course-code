import { readFileSync } from 'node:fs';

console.log("1")
const res = readFileSync("text.txt")
console.log(res.toString())
console.log("2")