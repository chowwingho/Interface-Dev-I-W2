/*let balance = 0;
const firstname = `George`;

const doWithdrawl = (bal, amt) => {
    console.log(`Withdrawing: $${amt} `);
    return bal - amt;
}

const doDeposit = (bal, amt) => {
    console.log(`Depositing: $${amt} `);
    return bal + amt;
}

console.log(`Hello, ${firstname}. Your balance is: $${balance}.`);

balance = doDeposit(20)

console.log(`Hello, ${firstname}. Your balance is: $${balance}.`);

balance = doWithdrawl(5)

console.log(`Hello, ${firstname}. Your balance is: $${balance}.`); */



// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

let baseNumber = 2; 

const squareNumber = (baseNumber) => {
    let squareNumber = baseNumber ** 2;
    console.log(`The result of squaring the number ${baseNumber} is ${squareNumber}.`)
    //return squareNumber ;
}


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = (fullNumber) => {
    let halfNumber = fullNumber / 2;
    console.log(`Half of ${fullNumber} is ${halfNumber}.`)
    //return fullNumber / 2;
}

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = (numA, numB) => {
    let numPercent = (numA / numB) * 100; 
    console.log(`${numA} is ${numPercent}% of ${numB}.`)

}

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = (circleRad) => {
    let areaOfCircle = Math.PI * circleRad ** 2;
    console.log(`The area for a circle with radius ${circleRad} is ${areaOfCircle}.`)
}


// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area is of the squared result (#3).

const allResults = (inputNum) => {
    let halfNum = inputNum / 2;
    let squareNum = halfNum ** 2;
    let circleArea = Math.PI * squareNum ** 2;
    let percentNum = (circleArea / circleArea ** 2) * 100; 
    console.log(`You input: ${inputNum}. Half of your input is: ${halfNum}. ${squareNum} is your number squared. ${circleArea} is the area of a circle with that number as the radius. ${percentNum} is the percentage of the area. `)
}