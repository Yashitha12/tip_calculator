const bill = document.getElementById("amount"); // bill amount
const tipAmountEl = document.getElementById("tipamount"); // total tip amount
const total = document.getElementById("total"); // total bill amount 
const reset = document.getElementById("reset"); // reset button
const buttons = document.querySelectorAll(".tipButton"); // tip buttons

function calcTip(bill, tipAmount) {
  tipAmount = bill * (tipAmount / 100);
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(2);

let totalAmount = tipAmount + bill; 
totalAmount = totalAmount.toFixed(2);

tipAmountEl.innerHTML = `$${tip}`;
total.innerHTML = `$${totalAmount}`;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let tipValue = e.target.innerText;
    tipValue = tipValue.substr(0, tipValue.length - 1);

    if(bill.value === "") return;

    calcTip(
      parseFloat(bill.value),
      parseInt(tipValue)
    )
  })
})

reset.addEventListener('click', (e) => {
  tipAmountEl.innerHTML = '$0.00';
  total.innerHTML = '$0.00';
});
