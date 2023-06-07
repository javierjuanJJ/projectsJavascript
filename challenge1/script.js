"use strict";

let myBoolean= true;
let myString= 'Hellow World';
let firstNumber= 20;
let secondNumber= 40;

secondNumber= 80;

let myArray= [
    myBoolean,
    myString
];

let myObject = {
    firstProperty: myArray,
    sumProperty: firstNumber + secondNumber,
};

console.log(myObject);
console.log(myObject.sumProperty);
console.log(myObject.firstProperty[0]);