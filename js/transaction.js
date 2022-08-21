document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-amount');
    const depositValue = depositField.value;
    const depositAmount = parseFloat(depositValue)
    depositField.value = '';

    if (typeof depositAmount != 'number') {
        alert('Insert a number')

    }
    else {
        const deposit = document.getElementById('deposit-value');
        const previousDeposit = parseFloat(deposit.innerText);
        const newDeposit = previousDeposit + depositAmount;
        deposit.innerText = `${newDeposit}`;
        const balanceField = document.getElementById('balance-value');
        const balance = balanceField.innerText;
        const balanceAmount = parseFloat(balance);
        const totalBalance = depositAmount + balanceAmount;
        balanceField.innerText = totalBalance;
    }


})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawValue = document.getElementById('withdraw-amount');
    const withdrawAmount = withdrawValue.value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);
    withdrawValue.value = '';
    const previousWithdraw = document.getElementById('withdraw-value');
    const previousWithdrawNumber = parseFloat(previousWithdraw.innerText);
    const withdrawTotal = previousWithdrawNumber + withdrawAmountNumber;
    console.log(withdrawTotal);
    previousWithdraw.innerText = withdrawTotal;
    const balanceField = document.getElementById('balance-value');
    const balance = balanceField.innerText;
    const balanceAmount = parseInt(balance);
    const totalBalance = balanceAmount - withdrawAmount;
    balanceField.innerText = totalBalance;




})