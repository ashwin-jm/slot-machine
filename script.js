const aboutBtn = document.getElementById('aboutButton');
const aboutMessage = document.getElementById('modal');
const closeAboutBtn = document.getElementById('closeButton');
const addBalance = document.getElementById('addBalanceButton');
const balanceDisplay = document.getElementById('balance-amount');
const spinBtn = document.getElementById('spinButton');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

let balance = 0;

const openModal = () => {
    aboutMessage.style.display = 'block';
};

const closeModal = () => {
    aboutMessage.style.display = 'none';
};

const getBalance = () => {
    const inputAmount = prompt('Please enter your amount');
    const intAmount = parseFloat(inputAmount);

    if (isNaN(intAmount) || intAmount <= 0) {
        alert('Please enter a valid amount');
    }
    else {
        return intAmount;
    }
};

const getRandomValue = () => {
    const randomValues = [1,2,3];
    const randomIndex = Math.floor(Math.random() * randomValues.length);
    return randomValues[randomIndex];
};

const spin = (balance) => {
    const betAmount = prompt('Please enter a bet');
    const intBetAmount = parseFloat(betAmount);

    if (isNaN(intBetAmount) || intBetAmount <= 0 || intBetAmount>=balance) {
        alert('Please enter a valid bet amount or check your balance');
    }

    else {
        balance -= intBetAmount;
        balanceDisplay.textContent = balance;

        const valueBox1 = getRandomValue();
        const valueBox2 = getRandomValue();
        const valueBox3 = getRandomValue();

        box1.textContent = valueBox1;
        box2.textContent = valueBox2;
        box3.textContent = valueBox3;

        const hasWon = (valueBox1 == valueBox2 == valueBox3);
        if (hasWon) {
            const winnings = intBetAmount * 2;
            return winnings;
        }
        else {
            return 0;
        }
    }
};

aboutBtn.addEventListener("click", openModal);
closeAboutBtn.addEventListener("click",closeModal);
addBalance.addEventListener("click", () => {
    const balanceAmount = getBalance();
    balance += balanceAmount;
    balanceDisplay.textContent = balance;
});
spinBtn.addEventListener("click", () => {
    const winnings = spin(balance);
});