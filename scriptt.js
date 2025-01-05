const revealText = "The Phantom was none other than your best friend...the one who always sits beside you";
const revealTextElement = document.getElementById("revealText");
const finalMessageElement = document.getElementById("finalMessage");

let index = 0;

// Function to display the text one letter at a time
function typeText() {
    if (index < revealText.length) {
        revealTextElement.textContent += revealText[index];
        index++;
        setTimeout(typeText, 100); // Adjust the speed here
    } else {
        setTimeout(() => {
            finalMessageElement.style.display = "block"; // Show the final message
        }, 1000);
    }
}

// Start typing animation
typeText();