const pizza = document.getElementById("pizza");
const number = document.getElementById("number");
const countdownSpan = document.getElementById("countdown");
const millisecondsSpan = document.getElementById("milliseconds");

let num = parseInt(localStorage.getItem("pizzaCount")) || 0;
number.textContent = num;

let canClick = true;
let millisecondsLeft = 0;

document.addEventListener("DOMContentLoaded", function() {
    pizza.addEventListener("click", function() {
        if (canClick) {
            num = num + tomatocount;
            number.textContent = num;
            localStorage.setItem("pizzaCount", num);
            
            // Disable clicking for 1 second
            canClick = false;
            millisecondsLeft = 1000; // 1000 milliseconds = 1 second
            countdownSpan.textContent = "1";
            millisecondsSpan.textContent = "000";
            
            const countdownInterval = setInterval(function() {
                millisecondsLeft -= 10; // Update every 10 milliseconds for better accuracy
                if (millisecondsLeft <= 0) {
                    canClick = true;
                    clearInterval(countdownInterval);
                } else {
                    countdownSpan.textContent = Math.floor(millisecondsLeft / 1000); // Calculate seconds
                    millisecondsSpan.textContent = String(millisecondsLeft % 1000).padStart(3, "0"); // Calculate milliseconds
                }
            }, 10); // Update every 10 milliseconds
        }
    });
});
