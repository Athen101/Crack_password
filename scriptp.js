const text = "The truth is closer than you think.";
const animatedTextElement = document.getElementById("animatedText");

let index = 0;

// Function to display the text one letter at a time
function typeText() {
    if (index < text.length) {
        animatedTextElement.innerHTML += text[index];
        index++;
        setTimeout(typeText, 100); // Adjust the speed of typing here
    }
}

// Start typing animation
typeText();