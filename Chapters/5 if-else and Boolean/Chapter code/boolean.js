console.log(typeof(5 > 8));
console.log(typeof 'true');
console.log(typeof true); 
console.log(5 == 5);
console.log(5 == 4);

console.log(5 == 5.0);
console.log(5 == 5);

console.log(5 === 5.0);
console.log(5 === 5);

console.log(5 == '5.0');
console.log(5 == '5');

console.log(5 === '5.0');
console.log(5 === '5');

console.log(5 + 5 === 4 + 6);


console.log('Checking if you can drive');
let age = 19;
if (age > 65){
    console.log('Ask someone else to drive');
} else if(age > 18){
    console.log("you can drive");
} else{
    console.log('Use a Bicycle');
}