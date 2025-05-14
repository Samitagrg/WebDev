let opening= "What's up, Doc?";


console.log(opening);


let x= 5
let y= 10

let sum= x+y

console.log("sum = ", sum)

let product= x*y
console.log("product = ", product)

let difference= x-y
console.log("difference", difference)

if (x>y) {
    console.log(x + 'is greater than '+ y)
} else {
    console.log(y + 'is greater than '+ x)
}


let year = 2085
if (year == 2082) {
    console.log("This is current year: ", year)
}
else if (year < 2082) {
    console.log("This is passed year: ", year)
}
else {
    console.log("This is upcoming year: ", year)
}

let a = "5"
let b = 5;

if (a == b) {
    console.log('double equals to')
    console.log('data type of a', typeof a)
    console.log('data type of b', typeof b)
}

if (a === b) {
    console.log('triple equals to')
}

let num = 10
if (num % 2 == 0) {
    console.log(`${num} is even number`);  //using template literals by typing ` (tab ko mathi ko) and ${} for variable or js operation
}
else {
    console.log(`${num} is odd number`);
}

// Loops

// for (let i = 1; i <= 10; i++) {
//     console.log(`2 x ${i} = ${2 * i}`);    // let product = 2 * i garera ni print 
// }

// let numb = prompt("Enter a number: ")
// console.log(numb)

// let n = prompt("which multiplication table you want to see? ")
// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`);
// }

for (let i = 1; i <= 10; ++i) {
    if (i%2 == 0) {
        continue;
    }

    if (i == 9) {
        break;
    }
    console.log('The number is ', +i);
}

