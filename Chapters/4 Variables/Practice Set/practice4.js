const myName = 'Utkarsh';
document.querySelector('.name-display').innerText = myName;

const GSTPercentage = 18;
let cartValue = Math.round(((15599 - (10/100 * 15599)) - 272 + (2499 - (41/100 * 2499)) - 29 + 25 + 20) * (100 + GSTPercentage)/100);
console.log(cartValue);

console.log(eval('2+3+5*7-9'))