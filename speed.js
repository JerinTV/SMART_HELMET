// Speed simulation for demonstration purposes (replace with actual data in real project)
let speed = 0;
const speedElement = document.getElementById('speed');
const alertElement = document.getElementById('alert');

// Form elements
const verificationForm = document.getElementById('verification-form');
const helmetIdInput = document.getElementById('helmet-id');
const passwordInput = document.getElementById('password');
const verificationSection = document.getElementById('verification-section');
const monitoringSection = document.getElementById('monitoring-section');

// Correct Helmet ID and Password for successful verification
const correctHelmetId = '12345';
const correctPassword = '12345';

// Form submission (check if the entered values match the correct ID and password)
verificationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const enteredHelmetId = helmetIdInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredHelmetId === correctHelmetId && enteredPassword === correctPassword) {
        // Simulate successful verification
        verificationSection.style.display = 'none'; // Hide verification section
        monitoringSection.style.display = 'block'; // Show speed monitoring section
    } else {
        // Show an error message if the ID or password is incorrect
        alert("Incorrect Helmet ID or Password! Please try again.");
    }
});

// Simulate speed change
setInterval(() => {
    speed = Math.floor(Math.random() * 120);  // Simulating speed between 0 and 120 km/h
    speedElement.textContent = speed;

    // Check if speed exceeds the limit
    if (speed > 80) {
        alertElement.style.display = 'block';
    } else {
        alertElement.style.display = 'none';
    }
}, 1000);  // Update every second

