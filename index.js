"use strict";

// ->console.log can print anything in console

// console.log("hello equitysoft");

//  declare a variable
//  ->we can change value of variable later

// var firstName = "Vinamra";
// console.log(firstName);

// firstName = "Harshish";
// console.log(firstName);

//  rules for naming variable

// note you can use $firsrname as variable name 

// var value1 = 2;
// console.log(value1 ** 3);

//  let VS Var
//  -> you can define value with same variable in let keyword but can not be declare it again
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

// console.log(yourName.toUpperCase());
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

// --------------------- Tamplate string -------------------- //

// let firstName = "viru";
// let age =18;

// let aboutMe = "my name is " + firstName + " my age is " + age;

// print any string inside the variable with backticks ` `
// let aboutMe = `my name is ${firstName} and my age is ${age}`  //  use back ticks for print variable inside the string
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

// let firstName = "1";
// if (firstName) {
//     console.log(firstName);
// } else {
//     console.log("first name is empty");
// }

// --------------------- Ternary Operator -------------------- //

// let age = 4;
// let drink = age >= 5 ? "coffee" : "milk";

// console.log(drink);

// --------------------- And Operator -------------------- //
// let name = "viru";
// age = 15;
// if (name[0] === "v" && age > 18 ) {
//     console.log("your name starts with v and age is more than 18");
// } else {
//     console.log("sorry something went wrong");
// }

// --------------------- OR Operator -------------------- //
// # or operator is check both conditions if any of them is true then it will in if condition

// Nested if

// let winningNumber = 19;
// let userGuess = +prompt("guess a number");

// console.log(typeof userGuess, userGuess);

// if(userGuess === winningNumber){
//     console.log("your guess is right")
// }else{
//     if(userGuess > winningNumber){
//         console.log("your guess is too high")
//     }else{
//         console.log("your guess is too low")
//     }
// }

// if(){
//     execution...
// }else if(){
//     execution...
// }else if(){
//     execution...
// }else{
//     execution...
// }

// --------------------- Switch case -------------------- //

// let day =0;

// switch (day) {
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.lconsole.log(i);og("wednesday");
//         break;
//     case 4:
//         console.log("thrusday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     default:
//         console.log("invalid day");
//         break;
// }

// --------------------- While loop -------------------- //

// let i = 1;

// while(i<=9){
//     console.log(i);
//     i++;
// }
// console.log(`current value of i is ${i}`);

// let number = 10;
// let total = 0;
// let i = 0;

// while(i<=number){
//     total = total+i;
//     i++;
// }
// console.log(total);

// --------------------- for loop -------------------- //

// for(let i=0; i<=9; i++){
//     console.log(i);
// }

// let total = 0;
// let num = 10;

// for(let i=1; i<=num; i++){
//     total = total+i;
// }
// console.log(total);


// ------------------ Break / Continue ----------------- //

// for(let i = 0; i<= 10; i++){
//     if(i==4){
//         continue;
//     }

//     console.log(i);
// }

// #break will stop exicution of code if condition is satisfed
// #continue will skip the condition and then continue to the loop

// --------------------- do whlie loop -------------------- //

// let i = 0;
// do{
//     console.log(i)
// }while(i<=9);

// --------------------- Arrays -------------------- //
// # you can store any data type in array

// let fruits = ["apple","banana","graps"];
// console.log(fruits);

// let fruits = ["apple","banana","graps"];
// fruits[1] = "mango";
// console.log(fruits);

// console.log(typeof fruits);  // data type of array is object

// console.log(Array.isArray(fruits)); //check is array or not

// let fruits = ["apple","banana","graps"];
// fruits.push("elephant");  // element push in array
// console.log(fruits);

// fruits.pop();             // element pop in array
// console.log(fruits);

// fruits.unshift("motto");     // unshift is used for push element from starting
// fruits.unshift("hello");
// fruits.shift();              // shift is used for pop from starting
// console.log(fruits);

//  Primitive vs reference data types

// --> #primtive data type store in stack when refrence data type stor in heap
// --> #in stack every element have seprate values when in a heap a element have same value for an array

// --------------------- How to clone an array -------------------- //

// --> need more practice for this

// --------------------- for loop in array -------------------- //

// let fruits = ["apple","mango","graps","banana"];

// console.log(fruits.length);
// console.log(fruits[fruits.length-1]);

// let fruits2=[];
// for (let i = 0; i<fruits.length; i++){
//     fruits2.push(fruits[i].toUpperCase());
// }
// console.log(fruits2);

// ------------------ Const for creating an array ----------------- //

// #don't forget array is store in heap...so there in specific address for 
// variable and here we can not change the value of the varible

// const fruits = ["apple","mango"]; //0X11
// fruits.push("banana");
// console.log(fruits);

// we can use any arrray methods to change the value of const in array
// use the const while defining an array

// --------------------- while loop in array -------------------- //

// const fruits = ["apple","mango","banana","graps"]; 
// const fruits2 = [];
// let i = 0;
// while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }

// console.log(fruits2);

// --------------------- array destructruing -------------------- //

// const myArr = ["value1","value2","value3","value4"];
// let myvar1 = myArr[0];
// let myvar2 = myArr[1];

// console.log("value of myvar1 is", myvar1);
// console.log("value of myvar2 is", myvar2);

// let [myvar1,myvar2,...myNewArray] = myArr;  // skip for define next value in the array

// let myNewArray = myArr.slice(2);

// console.log("value of myvar1 is", myvar1);
// console.log("value of myvar2 is", myvar2);

// console.log(myNewArray);
// console.log(myArr);

// --------------------- Objects in JS -------------------- //

// -->object don't have index
// -->object store key value pairs
// -->use dot notation for accessing property of the object

// const person = {
//     name:"viru",
//     age:19,
//     hobbies:["play","code"]
// }
// console.log(typeof person);
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);


// Add key value pair in to object

// person.gender = "male";
// console.log(person);

// ------------ Dot and Bracket notation in object ------------ //

// --> in object the key are default in string..

// const key = "email";
// const person = {
//     name:"viru",
//     age:19,
//     hobbies:["play","code"],
//     "my intrest" : ["athlets", "racing"]
// }

// console.log(person["name"]); // you also access property by square brackets
// console.log(person["my intrest"]); 

// email : "vinpatel@gmail.com"

// person[key] = "vinpatel@gmail.com";
// console.log(person);

// ------------ iterate object ------------ //

// const person = {
//     name:"viru",
//     age:19,
//     hobbies:["play","code"]
// }

// for(let key in person){
//     console.log(`${key} :  ${person[key]}`);
// console.log(key ,person[key]);
// }

// console.log(Object.keys(person));

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }

// ------------ computed properties ------------ //

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);

// ------------ spread operator ------------ //

// const array1 = [1,2,3];
// const array2 = [5,6,7];

// const newArr = [...array1,...array2];
// const newArr = [..."abc"];   // string and arrays are iterable

// console.log(newArr);

// --> spread operator in object

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2"
//     // key1 : "value598" // override key1
// }

// const obj2 = {
//     key3 : "value3",
//     key4 : "value4",
// }

// console.log(obj1);

// const newObject = { ...obj1, ...obj2};
// console.log(newObject);

// ------------ Object destuctring ------------ //

// const band = {
//     bandName : "Sanam",
//     famousSomng : "tera nam",
//     year : 2001
// }

// let {bandName:var1,famousSomngm,...restProps} = band;
// console.log(bandName);
// console.log(var1);
// console.log(restProps);

// ------------ Object Inside Array ------------ //

// # it is very usefull in real world application

// const users = [
//     {userId : 1, firstName : "vinamra" , gender : "male"},
//     {userId : 2, firstName : "parth" , gender : "male"},
//     {userId : 3, firstName : "lakhan" , gender : "female"}
// ]

// console.log(users);

// for (let user of users ){
    // console.log(user.firstName);
    // console.log(user);
// }

// ------------ Nested Distucturing ------------ //

// const users = [
//     {userId : 1, firstName : "vinamra" , gender : "male"},
//     {userId : 2, firstName : "parth" , gender : "male"},
//     {userId : 3, firstName : "lakhan" , gender : "female"}
// ]

// const [user1,user2,user3] =  users;

// const [{firstName},,{gender}] =  users;

// console.log(gender);

// console.log(users);
// console.log(user1.userId,user3.gender);

// ------------ Function in Javascript ------------ //

// function demo(){
//     console.log("happy birthday beta.....");
// }
// demo();
// demo();

// function twoplusfour(){
//     // console.log(2+4);
//     return 2+4;
// }
// twoplusfour();

// const returnedValue = twoplusfour();
// console.log(returnedValue);

// function sumTwoNum(n1,n2){
//     return n1+n2   
// }
// const returnedValue = sumTwoNum();
// console.log(returnedValue);

// undefined + undefined = NaN

// function isEven(input){

    // if(input % 2 === 0){
    //     return true;
    // }
    // return false;
    
    // return input % 2 === 0;

// }

// console.log(isEven(10));

// function firstChar(anystring){
//     return anystring[0];  // return first character of string
// }
// console.log(firstChar("abc"));

function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i] === target){
            return i;
        }        
    }
    return -1;
}

const myArr = [1,3,8,25,90]
const ans = findTarget(myArr, 25);
console.log(ans);

// -------------------- Function expresion -------------------- // 

const demo = function (){
    console.log("happy birthday beta.....");
}
demo();

// -------------------- Arrow Function -------------------- // 

// const demo = () => {
//     console.log("happy birthday beta.....");
// }
// demo();

// const isEven = (num) => {
//     return num % 2 === 0;
// }

// const isEven = number => number % 2 === 0;  // you can use it when pass single argument inside the function....
// console.log(isEven(2));


// --------------------- Hoisting ------------------------- //

// demo();    // here we can declare function before execution

// function demo(){
//     console.log("hello there");
// }

// we can use hoisting in case of function declaration only
// in function expression and arrow function hoisting not supported

// -------------------- Function inside function -------------------- // 

function myApp(){

    const myFun = () => {
        console.log("hello from my func");
    }

    const sumTwo = (num1,num2) => {
        return num1 * num2;
    }

    console.log("hello from my app");
    myFun();
    console.log(sumTwo(5,5));

}

myApp();

// Lexical scope 

// Block scope VS Function Scope

// let & const are block scope
// var is function scope

// -------------------------------- rest parameters ----------------------------//

function myFunc(a,b,...c){
    console.log(`the value of a is ${a}`);
    console.log(`the value of b is ${b}`);
    console.log(`the value of c is ${c}`);
    console.log(`the value of c is ` , c);
}
myFunc(4,5,6,7,8,9,10);

function addAll(...numbers){
    console.log(numbers);
    console.log(Array.isArray(numbers));
}

addAll(1,2,3,4,5);

// -------------------------------- Call Back Function ----------------------------//

function myFunc2(name){
    console.log("inside the func2");
    console.log(`my name is ${name}`);
}

function myFunc(callback){
    console.log("hey there i am mr func");
    callback("vinamra");
}

myFunc(myFunc2);