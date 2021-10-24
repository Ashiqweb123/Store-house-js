document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmount = depositInput.value;
    console.log(newDepositAmount);
    const oldDeposit = document.getElementById('deposit');
    const currentDeposit = oldDeposit.innerText;
    const totalNewDeposit = parseFloat(currentDeposit) + parseFloat(newDepositAmount);
    oldDeposit.innerText = (totalNewDeposit);


    const balance = document.getElementById('current-balance');
    const newBalance = balance.innerText;
    const newBalanceTotal = parseFloat(newBalance) + parseFloat(newDepositAmount);
    balance.innerText = newBalanceTotal;

    depositInput.value = '';

})


//handle withdraw button//


document.getElementById('withdraw-btn').addEventListener('click', function() {
    const withDraw = document.getElementById('withdraw-amount');
    const newWithdraw = withDraw.value;
    console.log(newWithdraw);
    const oldWithdraw = document.getElementById('withdraw-old');
    const previousWithDraw = oldWithdraw.innerText;
    const newAmountWithdraw = parseFloat(previousWithDraw) + parseFloat(newWithdraw);

    oldWithdraw.innerText = newAmountWithdraw;

    const balancePrevious = document.getElementById('current-balance');
    const balanceInput = balancePrevious.innerText;
    const newCurrentBalance = parseFloat(balanceInput) - parseFloat(newAmountWithdraw);
    balancePrevious.innerText = newCurrentBalance;


    withDraw.value = '';


})