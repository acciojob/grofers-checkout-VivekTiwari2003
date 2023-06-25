// const getSumBtn = document.createElement("button");
// getSumBtn.append("Get Total Price");
// document.body.appendChild(getSumBtn);

// const getSum = () => {
// //Add your code here
  
// };

// getSumBtn.addEventListener("click", getSum);
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
// Step 1: Get all the prices from the table
const prices = document.querySelectorAll('.price');
// Step 2: Calculate the total price
let totalPrice = 0;
prices.forEach((price) => {
totalPrice += parseInt(price.textContent);
});
// Step 3: Create a new row for the total price
const table = document.querySelector('table');
const newRow = document.createElement('tr');
const newCell = document.createElement('td');
newCell.setAttribute('id', 'ans');
newCell.textContent = totalPrice
newRow.appendChild(newCell);
table.appendChild(newRow);

};

getSumBtn.addEventListener("click", getSum);



