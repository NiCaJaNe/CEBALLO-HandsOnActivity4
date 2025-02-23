const numberInput = document.getElementById("numberInput");
const checkBtn = document.getElementById("checkBtn");
const resultDiv = document.getElementById("result");

// Check if a number is even or odd when the button is clicked
checkBtn.addEventListener("click", () => {
    const num = parseInt(numberInput.value);

    if (isNaN(num)) {
        resultDiv.textContent = "Please enter a valid number!";
        resultDiv.style.color = "red";
        setTimeout(() => {
            resultDiv.textContent = "Result will appear here.";
            resultDiv.style.color = "black";
        }, 4000);
        return;
    }

    if (num % 2 === 0) {
        resultDiv.textContent = `The number ${num} is Even!`;
        resultDiv.style.color = "blue";
    } else {
        resultDiv.textContent = `The number ${num} is Odd!`;
        resultDiv.style.color = "green";
    }
});

// Print numbers from 1 to 10 with even/odd status in the console
console.log("Numbers from 1 to 10 with Even/Odd Status:");
for (let i = 1; i <= 10; i++) {
    const status = (i % 2 === 0) ? "Even" : "Odd";
    console.log(`${i} - ${status}`);
}
