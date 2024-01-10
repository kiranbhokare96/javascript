
console.log(`<<===STEP--> 01===>> Find the total elements available or length & log on console`);
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11]; 
console.log(arrayNumbers);
console.log(`Total elements available or length: ${arrayNumbers.length}`);

console.log(`===========================================================================================`);
console.log(`<<===STEP--> 02===>> Log the first element & last element in arrayNumbers & log on console`);
console.log(`First Element :: 20`);                                                                                                                                                             
console.log(`Last Element :: 11`);

console.log(`===========================================================================================`);
console.log(`<<===STEP--> 03===>> Log the third last element using length property & log on console`);
const arrayNumb = [20,31,40,25,23,11,29,9,60,2,11]; 

console.log(`===========================================================================================`);
console.log(`<<===STEP--> 04===>> Find the all even numbers using for of loop & log on console`);
const arrayNu = [20,31,40,25,23,11,29,9,60,2,11]; 


console.log(`===========================================================================================`);
console.log(`<<===STEP--> 08===>> Find the  sum of all elements from arrayNumbers, & log on console`);
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    sum = sum + arrayNumbers[index];

}
console.log(`sum of all elements from arrayNumbers ::${sum}`);

console.log(`===========================================================================================`);
console.log(`<<===STEP--> 09===>> Find the numbers which are multiple of 5 `);



console.log(`===========================================================================================`);
console.log(`<<===STEP--> 10===>> is number 115 available in arrayNumbers ? `);
var greet = [20,31,40,25,23,11,29,9,60,2,11]; 
var isAvailable = greet.includes("115");
console.log(` Is 115 is available in arrayNumbers => ${isAvailable}`);


console.log(`===========================================================================================`);
console.log(`<<===STEP--> 11===>> is number 23 available in arrayNumbers ? `);
var greet = [20,31,40,25,23,11,29,9,60,2,11]; 
var isAvailable = greet.includes(23);
console.log(` Is 23 is available in arrayNumbers => ${isAvailable}`);

console.log(`===========================================================================================`);
console.log(`<<===STEP--> 12===>> Insert numbers-->55,66 at index 3 & log array on console `);
let arrayNo = [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNo);
arrayNo.splice(3, 0, 55, 66 );
console.log(arrayNo);


console.log(`===========================================================================================`);
console.log(`<<===STEP--> 13===>> Delete 3 elements starting from index 4 & log arrayNumbers on console `);
const arrayN = [20,31,40,25,23,11,29,9,60,2,11];
const removed =arrayN.splice(4,3);
console.log(arrayN);










