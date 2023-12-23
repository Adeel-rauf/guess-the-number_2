let input;
let n = Math.round(Math.random() * 20);
let score = 100;
let x = document.body.getElementsByClassName('ans')[0];
let y = document.body.getElementsByClassName('score')[0];
let z = document.body.getElementsByClassName('pic')[0]

function showMessage(message:string) {
    x.innerHTML = message;
}
function showMessage2(score:string) {
    y.innerHTML = score;
}
function showpic() {
        z.style.display = "flex" ;
    }


function updateScore() {
    let attempts = 100 - score;
    showMessage2(`Score: ${score}, Attempts: ${attempts}`);
}

function guessNumber() {
    input = parseInt(prompt('Guess the right number between 0 & 20')!);
    score--;

    if (input === n) {
        showMessage('Congratulations! You have entered the right number');
        updateScore();
        showpic()
    } else if (input > n && input < 20) {
        showMessage('The entered number is greater than the actual number');
        updateScore();
    } else if (input < n && input > 0) {
        showMessage('The entered number is less than the actual number');
        updateScore();
    }

    if (input !== n) {
        setTimeout(guessNumber, 100); // Wait for 100 milliseconds before
    }}
    guessNumber();
