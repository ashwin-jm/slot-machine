// Deposit an amount
// Determine number of lines to bet on
// Collect a bet amount
// Spin the slot machine
// Check if the user won or not
// If won, give the user their price money
// Play again

const prompt = require('prompt-sync')();

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

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Not a valid number of lines. Please try again")
        }
        else {
            return numberOfLines;
        }
    } 
};

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet amount per line: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || balance < numberBet * lines) {
            console.log("Not a valid bet amount. Please try again")
        }
        else {
            return numberBet;
        }
    } 
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);