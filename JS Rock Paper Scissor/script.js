const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result');
const choices = ['rock', 'paper', 'scissors'];
const user_score = document.getElementById('user-score');
const computer_score = document.getElementById('computer-score');

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (playerChoice === computerChoice) {
        result.textContent = `It's a tie! You both chose ${playerChoice}.`;
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        result.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        user_score.textContent = parseInt(user_score.textContent) + 1;
    } else {
        result.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        computer_score.textContent = parseInt(computer_score.textContent) + 1;
    }

    if (parseInt(user_score.textContent) + parseInt(computer_score.textContent) >= 10) {
        if (parseInt(user_score.textContent) > parseInt(computer_score.textContent)) {
            result.textContent += ' Congratulations! You are the overall winner!';
        } else {
            result.textContent += ' Better luck next time! The computer is the overall winner.';
        }

        user_score.textContent = '0';
        computer_score.textContent = '0';
    }
}




rock.addEventListener('click', () => playGame('rock'));
paper.addEventListener('click', () => playGame('paper'));
scissors.addEventListener('click', () => playGame('scissors'));