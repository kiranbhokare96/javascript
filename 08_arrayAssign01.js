
console.log(`<<========Step 01===>>LOG THE FIRST & LAST ELEMENT=======>>`);
console.log(`* Orriginal array :: ["Banana","Orange","Apple","Mango","Water Melon"]`);
const fruits_seasonal =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`==> First Element is  :: "Banana"`);
console.log(`==> Last  Element Is  :: "Water Melon"`);


console.log(`<<========Step 02===>>ADD ELEMENT "PAPAYA" BEFORE THE ELEMENT "BANANA"=======>>`);
console.log(`* Orriginal array :: ["Banana","Orange","Apple","Mango","Water Melon"]`);
let array=["Banana","Orange","Apple","Mango","Water Melon"];
array.unshift("Papaya");
console.log(array);


console.log(`<<========Step 03===>>REMOVE 'MANGO'FROM THE ARRAY=======>>`);
console.log(`* Orriginal array :: ["Banana","Orange","Apple","Mango","Water Melon"]`);
const arraySeasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
const removed =arraySeasonal.splice(3,1);
console.log(arraySeasonal);


console.log(`<<========Step 04===>>ADD ELEMENT"PINEAPPLE"AT THE LAST POSITION=======>>`);
console.log(`* Orriginal array :: ["Banana","Orange","Apple","Mango","Water Melon"]`);
const arr_fruits = ["Banana","Orange","Apple","Mango","Water Melon"];
arr_fruits.push("Pineapple")
console.log(arr_fruits);


console.log(`<<========Step 05===>>INSERT AN ELEMENT"DRAGON FRUIT"BEFORE"WATER MELON"=======>>`);
console.log(`* Orriginal array :: ["Banana","Orange","Apple","Mango","Water Melon"]`);
const fruits_season = ["Banana","Orange","Apple","Mango","Water Melon"];
fruits_season.splice(4,0,"Dragon Fruit");
console.log(fruits_season);


console.log(`<<========Step 06===>>REPLACE AN ELEMENT"ORANGE"WITH "KIWI"=======>>`);
console.log(`* Orriginal array :: ["Banana","Orange","Apple","Mango","Water Melon"]`);
const array_fruits = ["Banana","Orange","Apple","Mango","Water Melon"];
array_fruits.splice(1,1,"Kiwi");
console.log(array_fruits);


console.log(`<<========Step 07===>>LOG THE ELEMENT STARTING FROM INDEX 1 TO 4=======>>`);
console.log(`* Orriginal array :: ["Banana","Orange","Apple","Mango","Water Melon"]`);
const fruits = ["Banana","Orange","Apple","Mango","Water Melon"];
const fruits_log = array.slice(2);
console.log(fruits_log);

console.log(`<<========Step 08===>>ONLY SELECT LAST 3 ELEMENT=======>>`);
console.log(`* Orriginal array :: ["Banana","Orange","Apple","Mango","Water Melon"]`);
const fruteis = ["Banana","Orange","Apple","Mango","Water Melon"];
const fruti_season = array.slice(3);
console.log(fruti_season);


