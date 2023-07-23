// Deposit an amount
// Collect a bet amount
// Spin the slot machine
// Check if the user won or not
// If won, give the user their price money
// Play again

const prompt = require('prompt-sync')();

const slotMachineValues = [1,2,3];

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Not a valid deposit. Please try again")
        }
        else {
            return numberDepositAmount;
        }
    }  
};


const getBet = (balance) => {
    while (true) {
        const bet = prompt("Enter the bet amount: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || balance < numberBet) {
            console.log("Not a valid bet amount. Please try again")
        }
        else {
            return numberBet;
        }
    } 
};

const spin = () => {
    boxValues = [];
    for (let i=0; i<3; i++) {
        const randomIndex = Math.floor(Math.random() * slotMachineValues.length);
        let boxValue = slotMachineValues[randomIndex];
        boxValues.push(boxValue);
    }
    return boxValues
};

const check = (spinValues) => {
    const firstValue = spinValues[0];
    for (let i=1; i<spinValues.length; i++) {
        if (spinValues[i] != firstValue) {
            return false;
        }
    }
    return true;
};

const winnings = (checkWinner, bet) => {
    if (checkWinner) {
        winningsAmount = bet * 2;
        console.log("Congratulations! You won Rs"+ winningsAmount);
    }
    else {
        console.log("Better luck next time");
        winningsAmount = 0;
    }
    return winningsAmount;
};

const game = () => {
    let balance = deposit();

    while (true){
        console.log("Balance: " + balance);
        const bet = getBet(balance);
        const spinValues = spin();
        console.log(spinValues);
        const checkWinner = check(spinValues);
        const winningsAmount = winnings(checkWinner, bet);
        if (winningsAmount > 0) {
            balance += winningsAmount;
        }
        else {
            balance -= bet;
        }

        if (balance <= 0){
            console.log("Your ran out of money!");
            break;
        }

        const playAgain = prompt("Do you want to play again (y/n)?");
        if (playAgain != 'y'){
            break;
        }
    }
};

game();


