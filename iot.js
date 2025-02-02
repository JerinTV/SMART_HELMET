document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("verification-form").addEventListener("submit", function(event) {
        event.preventDefault();

        // Get the values from the ID and password input fields
        let helmetId = document.getElementById("helmet-id").value;
        let password = document.getElementById("password").value;

        // Check if ID and password are correct
        if (helmetId === "12345" && password === "12345") {
            // Show IoT Features after successful verification
            alert("Verification Successful! You can now access the IoT features.");

            // Replace the ID and password inputs with IoT details
            document.getElementById("verification-section").style.display = "none";  // Hide ID/password inputs
            document.getElementById("iot-section").style.display = "block";  // Show IoT details

            // Simulate IoT feature data (replace with real-time data from your helmet)
            document.getElementById("battery-level").textContent = "75%";  // Helmet battery level
            document.getElementById("device-battery").textContent = "85%";  // Connected device battery level
            document.getElementById("charging-status").textContent = "Not Charging";  // Charging status

            document.getElementById("low-battery-alert").textContent = "Off";  // Low battery alert
            document.getElementById("sensor-alert").textContent = "None";  // Sensor alert
            document.getElementById("connection-status").textContent = "Connected";  // Connection status

            document.getElementById("sos-status").textContent = "Inactive";  // SOS mode status
        } else {
            alert("Verification Failed! Please check your ID and password.");
        }
    });

    // Activate SOS mode
    document.getElementById("activate-sos").addEventListener("click", function() {
        document.getElementById("sos-status").textContent = "Active";  // Change SOS status
        alert("SOS Mode Activated! Emergency services have been notified.");
    });
});
