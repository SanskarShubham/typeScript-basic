const userName: string = "Shubham";

// console.log(userName);
const numElement1 = document.getElementById('num1') as HTMLInputElement;
const numElement2 = document.getElementById('num2') as HTMLInputElement;
const btnElement = document.querySelector('button');
type numberOrString = number | string;
type result = { val: number, timeStamp?: Date }

interface resultObj {
    val: number,
    timeStamp?: Date
}

function add(num1: numberOrString, num2: numberOrString) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        console.log(num1 + num2);
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        console.log(num1 + num2);
    }
}

function printObject(obj: result) {
    console.log(obj.val, obj.timeStamp);
}

const arr: number[] = [3, 2, 4, 5, 7];
// generic method
const arr1: Array<number> = [3, 2, 4, 5, 7];

printObject({ val: 23, timeStamp: new Date() })
btnElement?.addEventListener('click', () => {
    const num1 = numElement1.value;
    const num2 = numElement2.value;
    add(+num1, +num2);
})
// creating promise
const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("promise resolved")
    }, 1000);
})

promise.then(res => console.log(res));

add('1', '2');