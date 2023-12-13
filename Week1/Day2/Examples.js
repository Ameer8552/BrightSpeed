let num = 1;
let n = null;
let Str = "String";
let S = Symbol("Dgghshg");
let b3 = true;
let big = BigInt("4656");
let u = undefined;
console.log(
  typeof num,
  typeof n,
  typeof Str,
  typeof S,
  typeof b3,
  typeof big,
  typeof u
);
//   coercion
let aa = 10;
let bb = "1";
let cc = aa + bb;
console.log(parseInt(bb) + aa);
console.log(typeof cc);
console.log(bb - 10);
// global-Scope
var a = 1;
let b = 2;
const c = [1, 2, 34];
function add() {
  console.log(a);
  console.log(b);
  console.log("Addition" + ":" + (a + b));
  console.log(c);
}
add();
// function-Scope
function access() {
  var num = 7;
  let num1 = 4;
  const num3 = [4, 5, 6, 7];
  console.log(num, num1, num3);
}
access();
// console.log(num,num1,num2)    we can not access the variables inside the function from outside
// block-Scope
let b1 = 10;
let c1 = 2;
console.log(b1);
console.log(c1);
function block() {
  if (1) {
    var block = 11;
    let block1 = 12;
  }
  console.log(block);
  console.log(block1);
}
block();
// Examples for objects
let obj = { name: "Ameer", clg: "SISTK", Fun: "SL" };
obj.name = "Ameer Basha";
console.log(obj.name);
for (let key in obj) {
  console.log(obj[key]);
}

class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}
const person = new Person("John", 25, "New York");
for (let key in person) {
  console.log(person[key]);
}
class obj1 {
  constructor(name, age, college) {
    this.name = name;
    this.age = age;
    this.college = college;
  }
  display() {
    console.log(name, age, college);
  }
}
let m = new obj1("Ameer", 23, "Sistk");
