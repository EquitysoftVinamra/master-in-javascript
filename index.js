"use strict";

// ->console.log can print anything in console

// console.log("hello equitysoft");

//  declare a variable
//  ->we can change value of variable

// var firstName = "Vinamra";
// console.log(firstName);

// firstName = "Harshish";
// console.log(firstName);

//  rules for naming variable

// note you can use $firsrname as variable name 

// var value1 = 2;
// console.log(value1 ** 3);

//  let VS Var
//  -> you can define value with same variable in let keyword
// let Fname = "viru";
// console.log(Fname);

// let Fname = "pratik";
// console.log(Fname);

// Const in javascript

//  -> We can not change the value of const

// const pi = 3.14;
// console.log(pi);

// <------------------ String Indexing -------------------->

// let myName = "Vinamra";
// console.log(myName[5]);
// console.log(myName.length); // find length of string

// let yourName = "veer"; 
// console.log(yourName.length)

// yourName = yourName.trim();
// console.log(yourName);
// console.log(yourName.length);

// yourName = yourName.toUpperCase();
// yourName = yourName.toLowerCase();
// console.log(yourName);

// let demo = yourName.slice(0,3);
// console.log(demo);

// let age = 22;
// let myname = "partth";
// console.log(typeof myname);

// Convert number to string

// age = age + "";
// console.log(typeof(age));

// Convert  string to number
//-> make + sign for convert a string to number

// let myStr = +"34";
// console.log(typeof myStr);

// let age = 15;
// console.log(typeof age);

// String Concatination

// let string1 = "viru";
// let string2 = "patel";

// let fullName = string1+ " " +string2
// console.log(fullName);

// let num1 = "128";
// let num2 = "120";

// let newNum = +num1+ + +num2   // add + sign to convert string into the number 
// console.log(newNum);
// console.log(typeof newNum);

// --------------------- tamplate string -------------------- //

// let firstName = "viru";
// let age =18;

// let aboutMe = "my name is " + firstName + " my age is " + age;

// print any string inside the variable with backticks ` `
// let aboutMe = `my name is ${firstName} and my age is ${age}`
// console.log(aboutMe);

// --------------------- Undefine / String -------------------- //

// let firstName;
// console.log(typeof firstName);

// let lastName = "patel";
// console.log(typeof lastName);

// let variable = null;  // #it will return object in console //
// console.log(typeof variable); 

// // --> Check Max length of int 
// console.log(Number.MAX_SAFE_INTEGER);

// --------------------- Boolean -------------------- //
// --> boolean return only true and false values

// let num1 = 10;
// let num2 = 50;
// console.log(num1>num2);

// --------------------- Boolean -------------------- //

// let num1 = 10;
// let num2 = 12;

// console.log(num1==num2); 

// // == will check only values not data type
// // === will check data type also
// console.log(num1!=num2); // not equal to sign 

// --------------------- truthy / falsy -------------------- //

// let age = 15;

// if(age >= 18){
//     console.log("you are eligible for voting");
// }else{
//     console.log("you are not eligible for voting");
// }

// try with 0,null,undefine all are falsy values

let firstName = "1";
if (firstName) {
    console.log(firstName);
} else {
    console.log("first name is empty");
}

// --------------------- Ternary Operator -------------------- //

let age = 4;
let drink = age >= 5 ? "coffee" : "milk";

console.log(drink);

// --------------------- And Operator -------------------- //
let name = "viru";
age = 15;
if (name[0] === "v" && age > 18 ) {
    console.log("your name starts with v and age is more than 18");
} else {
    console.log("sorry something went wrong");
}

// --------------------- OR Operator -------------------- //
// # or operator is check both conditions if any of them is true then it will in if condition