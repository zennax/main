// JavaScript to change the rolling text content
const rollingText = document.querySelector('.rolling-text');
const newText = "This is the updated rolling text!";

setInterval(() => {
    rollingText.innerText = newText;
}, 7000);