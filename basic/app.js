"use strict";
const userName = "Shubham";
// console.log(userName);
const numElement1 = document.getElementById('num1');
const numElement2 = document.getElementById('num2');
const btnElement = document.querySelector('button');
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        console.log(num1 + num2);
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        console.log(num1 + num2);
    }
}
function printObject(obj) {
    console.log(obj.val, obj.timeStamp);
}
const arr = [3, 2, 4, 5, 7];
// generic method
const arr1 = [3, 2, 4, 5, 7];
printObject({ val: 23, timeStamp: new Date() });
btnElement === null || btnElement === void 0 ? void 0 : btnElement.addEventListener('click', () => {
    const num1 = numElement1.value;
    const num2 = numElement2.value;
    add(+num1, +num2);
});
// creating promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise resolved");
    }, 1000);
});
promise.then(res => console.log(res));
add('1', '2');
