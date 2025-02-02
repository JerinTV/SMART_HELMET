document.addEventListener("DOMContentLoaded", () => {
    // Typing Animation for Heading
    const headingText = "WHY SMART HELMET?";
    const typingElement = document.getElementById("typing-text");
    let charIndex = 0;
    let typingInterval;

    function typeHeading() {
        typingElement.textContent = ""; // Reset content before starting over
        charIndex = 0;
        typingInterval = setInterval(() => {
            if (charIndex < headingText.length) {
                typingElement.textContent += headingText.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval); // Stop the typing once done
            }
        }, 170); // Speed of typing
    }

    // Start typing animation
    typeHeading();

    // Auto-Fading Info Text
    const sentences = document.querySelectorAll(".info-paragraph");
    const dots = document.querySelectorAll(".dot");
    let index = 0;

    function showNextSentence() {
        sentences.forEach(sentence => sentence.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        sentences[index].classList.add("active");
        dots[index].classList.add("active");

        index = (index + 1) % sentences.length;
    }

    // Show first sentence immediately
    showNextSentence();
    setInterval(showNextSentence, 3500); // Change every 3 sec

    // Continuously restart typing animation after the first one
    setInterval(() => {
        typeHeading(); // Restart typing animation
    }, headingText.length * 70 + 2000); // Ensure restart after the entire text has been typed and a short delay
});
