
function billCalculate() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tippercentage').value);

    if(isNaN(billAmount) || isNaN(tipPercentage)) {
        throw new Error('Both bill and tip percentage must be numbers');
    }

    const tipAmount = billAmount * (tipPercentage/100)
    document.querySelector('.total').textContent = `Total: $${(billAmount + tipAmount).toFixed(2)}`;
    console.log(`Tip Amount: ${tipAmount}`)
    // return tipAmount
}

document.getElementById('caclButton').addEventListener('click', (e) => {
    e.preventDefault()
    billCalculate()
})