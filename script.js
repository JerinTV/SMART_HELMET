document.addEventListener("DOMContentLoaded", () => {
    // Typing Animation for Heading
    const headingText = "WHY SMART HELMET?";
    const typingElement = document.getElementById("typing-text");
    let charIndex = 0;

    function typeHeading() {
        if (charIndex < headingText.length) {
            typingElement.textContent += headingText.charAt(charIndex);
            charIndex++;
            setTimeout(typeHeading, 70); // Speed of typing
        }
    }

    typeHeading(); // Start typing animation

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
});
