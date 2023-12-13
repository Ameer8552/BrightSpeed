// let num = 1;
// let n = null;
// let Str = "String";
// let S = Symbol("Dgghshg");
// let b3 = true;
// let big = BigInt("4656");
// let u = undefined;
// console.log(
//   typeof num,
//   typeof n,
//   typeof Str,
//   typeof S,
//   typeof b3,
//   typeof big,
//   typeof u
// );
// //   coercion
// let aa = 10;
// let bb = "1";
// let cc = aa + bb;
// console.log(parseInt(bb) + aa);
// console.log(typeof cc);
// console.log(bb - 10);
// // global-Scope
// var a = 1;
// let b = 2;
// const c = [1, 2, 34];
// function add() {
//   console.log(a);
//   console.log(b);
//   console.log("Addition" + ":" + (a + b));
//   console.log(c);
// }
// add();
// // function-Scope
// function access() {
//   var num = 7;
//   let num1 = 4;
//   const num3 = [4, 5, 6, 7];
//   console.log(num, num1, num3);
// }
// access();
// // console.log(num,num1,num2)    we can not access the variables inside the function from outside
// // block-Scope
// let b1 = 10;
// let c1 = 2;
// console.log(b1);
// console.log(c1);
// function block() {
//   if (1) {
//     var block = 11;
//     let block1 = 12;
//   }
//   console.log(block);
//   console.log(block1);
// }
// block();
// // Examples for objects
// let obj = { name: "Ameer", clg: "SISTK", Fun: "SL" };
// obj.name = "Ameer Basha";
// console.log(obj.name);
// for (let key in obj) {
//   console.log(obj[key]);
// }

// class Person {
//   constructor(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//   }
// }
// const person = new Person("John", 25, "New York");
// for (let key in person) {
//   console.log(person[key]);
// }
// class obj1 {
//   constructor(name, age, college) {
//     this.name = name;
//     this.age = age;
//     this.college = college;
//   }
//   display() {
//     console.log(name, age, college);
//   }
// }
// let m = new obj1("Ameer", 23, "Sistk");
// Function Declaration
// function Add(a,b){
//   console.log(a+b);
// }
// function sub(a,b){
//   console.log(a-b);
// }
// Add(1,2);
// sub(1,2);
// Function Expression
// let Add=function(a,b){
//   console.log(a+b);
// }
// let sup=function(a,b){
//   console.log(a-b);
// }
// Add(1,7);
// sup(1,6);
// // Arrow Function
// let a=parseInt(prompt("Enter a number"));
// let b=parseInt(prompt("Enter a number2"));
// let f=parseInt(prompt("Enter a number for addition 1 or for subtraction enter a number 2"))
// let arr=(a,b)=>{
//   switch(f){
//     case 1:console.log(a+b);
//     break;
//     case 2:console.log(a-b);
//     break;
//     default:console.log("invalid");
//   }
// }
// arr(a,b);
// Exanple for NAN
// let a=1;
// let b=3;
// let c;
// console.log(a+b+c)
// rest operator
// function name(...a) {
//     // a.push(2);
//     // a.pop();
//     console.log(a.shift());
//     console.log(a.pop());
//     a.unshift(1)
//     for(let b of a){
//         console.log(b)
//     }
// }
// name(10,20,20,90,90);
// spread operator
// function ab(a,b,c){
//     console.log(a+b+c);
// }
// let arr=[1,2,3,4];
// console.log(...arr)
// // console.log(...arr)
// ab(...arr)
// console.log(cc);
// let cc=4;
// console.log(cc);
// console.log(f);
// let f=fun();
// console.log(f);
// function fun(){
//     var b=1;
//     return b;
// }
// 
// Array methods
let arr=[2,4,6,8,7,{name:"Ameer"}];
// console.log(arr.push(9));
// console.log(arr.pop());
// console.log(arr.shift())
// console.log(arr.unshift(1))
// console.log(arr.length)
// arr.sort();
// arr.sort((a,b)=>a-b)
// console.log(arr)
// task for today
// console.log(arr.indexOf('3'))
// let arr1=[{name:"A",age:10},{name:"A",age:15},{name:"A",age:20}];
// let a=arr1.filter((ele,index,arr)=>{
//     if(ele.age%2==0){
//         return ele
//     }
// })
// console.log(a)
// console.log(arr.lastIndexOf(2))
// console.log(arr.indexOf(2))
// task 2 for this day
let arr2=[{name:"Apple",
price:15},{name:"Chips",
price:10},,{name:"Mobile",
price:1000}
];
// let m=arr2.map((e)=>{
//     return e.price-5;
// })
// console.log(m);
// reduce function
// let f=arr.reduce((e,r)=>{
//     if(e>r){
//         return e;
//     }
//     else{
//         return e=r;
//     }
// })
// console.log(f)
// let arr1=arr.forEach((e)=>{
//     console.log(e+1)
// })
// let arr2=arr.every((e)=>{
//     if(e%2==0){
//         return e
//     }
// })
// console.log(arr2)
// Slice method in array
// console.log(arr.slice(-2))
// let fin=arr.reduce((acc,e,index,arr)=>{
//       console.log(acc+"acc"+e)
// });
// let s=arr.toString();
// console.log(s)

// console.log();

// let arr3=arr2.reduce((acc,e)=>(

//     console.log(acc.price+" "+e.price)

// ),0)
// let str="hi am ameer";
// let arr4=str.split(" ");
// for(let i=0;i<arr4.length;i++){
//     arr4[i]=arr4[i].charAt(0).toLocaleUpperCase()+arr4[i].slice(1);
// }
// console.log(arr4.join(" "));
// let arr5=[1,1,2];


// delete arr5[1];
// console.log(arr5)
// let arr1=[1,2,3,4];
// let arr3=[4,3,2];
// console.log(arr1.concat(arr3).join(" "))
let arr7=[1,2,3,4,5];
// console.log(arr7.slice(1))
// console.log(arr7)
console.log(arr7.splice(2,2,"A","B"));
console.log(arr7)





