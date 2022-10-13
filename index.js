let totalEl = document.getElementById("total-el")
let countEl = document.getElementById("count-el")
let count = 0
let sum = 0

totalEl.textContent = "Cookies Eaten: " + sum;

function oneMore() {
    count += 1;
    countEl.textContent = count;
}

function addCookies() {
    countEl.textContent = 0
    sum += count;
    totalEl.textContent = "Cookies Eaten: " + sum;
    count = 0
}

function clearCookies() {
    sum = 0;
    totalEl.textContent = "Cookies Eaten: " + sum;
}
