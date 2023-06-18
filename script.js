// const getSumBtn = document.createElement("button");
// getSumBtn.append("Get Total Price");
// document.body.appendChild(getSumBtn);

// const getSum = () => {
// //Add your code here
  
// };

// getSumBtn.addEventListener("click", getSum);

// Get all the prices from the table
const prices = document.querySelectorAll('.prices');

// Calculate the total price
let totalPrice = 0;
prices.forEach((price) => {
  totalPrice += parseFloat(price.textContent);
});

// Create a new row for the total price
const table = document.querySelector('table');
const newRow = document.createElement('tr');
const newCell = document.createElement('td');
newCell.textContent = 'Total Price: ' + totalPrice.toFixed(2); // Assuming prices are in decimal format
newCell.setAttribute('colspan', '2'); // Adjust the colspan according to the number of columns in your table
newRow.appendChild(newCell);
table.appendChild(newRow);
