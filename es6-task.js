// node es6-task.js \\

// Task(1)
/* 
let xmen = 'x-men';
xmen = 'Deadpoon hates X-men';
console.log(xmen);

const avengers = 'Super Heroes';

const heroes = `Avengers ${avengers}`;

console.log(heroes);
 */

// Task(2)
/*

const fish = {
    
    name: 'hilsha',
    weight: '3kg',
    price: '4000',
    color: 'bright-silver',
    availability: 'river',
    speciality: 'very-tasty'
}

const speciality = fish.speciality;
const name = fish.name;

const taste = `${name} fries ${speciality}`;

console.log(taste);
 
*/

// Task(3.1)
/* 
const calulate = number => number /5;

const result = calulate(105);

console.log(result);
 */

// Task(3.2)

/* 
const calulate = (numOne,numTwo) => (numOne + 2) * (numTwo + 2);

const result = calulate(12,14);
console.log(result); 
 */

// Task(3.3)

/* 
const calulate = (firstNum, secondNum, thirdNum) => firstNum*secondNum*thirdNum;

const result = calulate(12,14,24);
console.log(result); 
  */

// Task(3.4)
/* 
const calulate = (numOne,numTwo) => 

{
    const first = numOne + 2;
    const second = numTwo + 2;
    const multiplication = first + second;
    return multiplication;
}


const result = calulate(12,14);
console.log(result); 

 */

// Task(5)

/* 
const numbers = [23, 35, 56, 71, 35, 52];

const newNumbers = numbers.map(number => number * 5);

console.log(newNumbers);
 */

// Task(6)
/* 
const numbers = [23, 35, 56, 71, 35, 52];

const newNumbers = numbers.filter(number => number%2 != 0);

console.log(newNumbers);
 */

// Task(7)

/* 
const products =
[
    {name: 'watch', price: 2500, warrenty: '3years'},

    {name: 'smartphone', price: 5000, warrenty: '2years'},

    {name: 'led-tv', price: 25000, warrenty: '3years'},

    {name: 'vlog-camera', price: 5000, warrenty: '1years'},

    {name: 'usb-drive', price: 400, warrenty: '1years'},

    {name: 'headphone', price: 5000, warrenty: '5years'},

];

const priceSelector = products.find(product => product.price == 5000);
// const priceSelector = products.filter(product => product.price == 5000);

console.log(priceSelector);
 */

// Task(8)

/* 
const product =
{
    productName: 'headphone', 
    price: 5000, 
    warrenty: '5years'
};

const productName = product.productName;

console.log(productName);
 */

// Task(9)

/* 
const products = ['phone', 'camera', 'watch'];

const [three] = [products[1]];

console.log(three); 
*/

/* 
const number = [1, 2, 4, 5]

const [number1, number2, number3] = number; 
console.log(number3);
 */


// Task (10)

/* 
const calulate = (firstNum, secondNum, thirdNum=7) => firstNum + secondNum + thirdNum;

const result = calulate(12,14);
console.log(result);  
*/

// 

// Task(11-12)

const company = 
{
    name: 'addidas',

    //An object property’s value can be another object
    product: 
    {
    shoe:'sports', 
    jersey:'national-teams',
    deodrant: 'players',

    other: //Object under object
    {
        tracksuit: 'winter',
        watch: 'waterproof',
        waterbottle: 'hygienic'
    },

    },

    location: 'USA',
    hr: 'David Beckham',

    //An object property’s value can be another object, another array
    topSellYears: [2018, 2019, 2020, 2021]


}

console.log(company?.product?.other?.watch);

console.log(company.topSellYears);

