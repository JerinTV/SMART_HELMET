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

// Form submission (for now, accepts any input)
verificationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate successful verification (for now, all inputs are accepted)
    verificationSection.style.display = 'none'; // Hide verification section
    monitoringSection.style.display = 'block'; // Show speed monitoring section
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
