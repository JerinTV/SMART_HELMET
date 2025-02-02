document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("verification-form").addEventListener("submit", function(event) {
        event.preventDefault();

        // Show IoT Features after verification
        document.getElementById("iot-section").style.display = "block";
        
        // Simulate IoT feature data (you can replace this with real-time data from your helmet)
        document.getElementById("battery-level").textContent = "75%";  // Helmet battery level
        document.getElementById("device-battery").textContent = "85%";  // Connected device battery level
        document.getElementById("charging-status").textContent = "Not Charging";  // Charging status
        
        document.getElementById("low-battery-alert").textContent = "Off";  // Low battery alert
        document.getElementById("sensor-alert").textContent = "None";  // Sensor alert
        document.getElementById("connection-status").textContent = "Connected";  // Connection status
        
        document.getElementById("sos-status").textContent = "Inactive";  // SOS mode status
    });

    // Activate SOS mode
    document.getElementById("activate-sos").addEventListener("click", function() {
        document.getElementById("sos-status").textContent = "Active";  // Change SOS status
        alert("SOS Mode Activated! Emergency services have been notified.");
    });
});
