console.log("hello from sixth day of javascript");


// switch case
day = 6;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wedenesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
}

// while loop

// let i = 0;
// console.log(i);
// i++
// console.log(i);

let i = 1;
while (i <= 9) {
    console.log(i);
    i++
}

let sum = 0, val = 1;
while (val <= 10) {
    sum += val;
    val++
}
console.log(`The sum of first 10 natural numbers: ${sum}`);


for (let i = 1; i <= 9; i++) {
    console.log(i);
}

console.log('another one')

let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 9)


// array

let fruits = ["apple","banana","graps","mango"]
console.log(fruits[1]);

// console.log(fruits[0]);

let mix = [1,2,2.35,"my Name",null,undefined]
console.log(mix);