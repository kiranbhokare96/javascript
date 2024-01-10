
console.log(`==================================Step 01==============================================`);  
let professor = {
    name : "Gajanan Kharat",
    age : 35,
    designation : "Software Developer",
    Subject : "Full Stack Web Devlopment",
    address : "Pune",
}
console.log(professor);

console.log(`==================================Step 02==============================================`);  
let user = {
        Engineering: "CSC",
        PHD: "Adv Computing",
        MBA: "Marketing",
        Masters: "Computer",
    }
console.log(user);

console.log(`==================================Step 03==============================================`);  
let array = {
    Certificates: ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming", ]
}
    console.log(array.Certificates);
    array.Certificates
    
console.log(`==================================Step 04==============================================`);  
totalExperiance="14 years";
console.log(`Add New Property Total Experiance is :: 14 Years`);


console.log(`==================================Step 05==============================================`);  
professor.designation = "UI & web Devlopment"; // Update
console.log(professor);

console.log(`==================================Step 06==============================================`);  
const array_certificates = ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming", ];
array_certificates.splice(2,0,"Oracle Certified");
console.log(array_certificates);

console.log(`==================================Step 07==============================================`);  
const arrayN_certificates = ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming", ];
let lastElement = arrayN_certificates[arrayN_certificates.length-1]
console.log(`Last Element is ::, ${lastElement}`);

console.log(`==================================Step 08==============================================`);  
console.log(professor);

console.log(`==================================Step 09==============================================`);  
for (const key in arrayN_certificates) {
    if (Object.hasOwnProperty.call(arrayN_certificates, key)) {
        const element = arrayN_certificates[key];
        console.log(` ${element}`);
    }
}
