
console.log(`<<===STEP--> 01===>> Find the total elements available or length & log on console`);
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11]; 
console.log(arrayNumbers);
console.log(`Total elements available or length: ${arrayNumbers.length}`);

console.log(`===========================================================================================`);
console.log(`<<===STEP--> 02===>> Log the first element & last element in arrayNumbers & log on console`);
console.log("First Element",arrayNumbers[0]);                                                                                                                                                             
console.log("Last Element",arrayNumbers[arrayNumbers.length-1]);

console.log(`===========================================================================================`);
console.log(`<<===STEP--> 03===>> Log the third last element using length property & log on console`);
console.log("Third last Element is ==>",arrayNumbers[arrayNumbers.length-3]);

console.log(`===========================================================================================`);
console.log(`<<===STEP--> 04===>> Find the all even numbers using for of loop & log on console`);
for (const iterator of arrayNumbers) {
    if (iterator%2==0){
        console.log(iterator);
  
    }
    }
    console.log(`===========================================================================================`);
    console.log(`<<===STEP--> 05===>> Find the odd numbers for of loop & log on console`);
    for (const iterator of arrayNumbers) {
        if(iterator%2!=0) {
            console.log(iterator);
        }
    }
    console.log(`===========================================================================================`);
    console.log(`<<===STEP--> 06===>> Find the all even positioned element from arrayNumbers,sum it & log on console`);
let sum=0;
for (const key in arrayNumbers) {
    if (key%2==0) {
        sum=sum+arrayNumbers[key];
        
    }
}
console.log("Sum of all even positioned element:",sum);

console.log(`===========================================================================================`);
console.log(`<<===STEP--> 07===>> Find the all odd positioned element from arrayNumbers,Sum it & log on console`);
let sum1 =0;
for (const key in arrayNumbers) {
    if (key%2!=0) {
        sum1=sum1+arrayNumbers[key];
    }
}
console.log("Sum of all odd Positioned element::",sum1);


console.log(`===========================================================================================`);
console.log(`<<===STEP--> 08===>> Find the  sum of all elements from arrayNumbers, & log on console`);
let sum2=0;
for (const key in arrayNumbers) {

    sum2=sum2+arrayNumbers[key]
}
console.log("sum of all elements from arrayNumbers ::",sum2);

console.log(`===========================================================================================`);
console.log(`<<===STEP--> 09===>> Find the numbers which are multiple of 5 `);
for (const iterator of arrayNumbers) {
    if (iterator%5==0) {
     console.log(iterator);   
    }
}

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










