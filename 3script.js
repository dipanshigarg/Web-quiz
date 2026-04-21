let count = 1;

let countText = document.getElementById("count");
let incBtn = document.getElementById("inc");
let decBtn = document.getElementById("dec");

function updateUI() {
    countText.innerText = count;

    incBtn.disabled = (count === 10);
    decBtn.disabled = (count === 0);
}

function increase() {
    if (count < 10) {
        count++;
        updateUI();
    }
}

function decrease() {
    if (count > 0) {
        count--;
        updateUI();
    }
}

updateUI();
