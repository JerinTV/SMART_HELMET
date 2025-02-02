document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("verification-form").addEventListener("submit", function(event) {
        event.preventDefault();

        // Retrieve the input values
        const helmetId = document.getElementById("helmet-id").value;
        const password = document.getElementById("password").value;

        // Simple validation (example values)
        const validHelmetId = "12345";  // Replace with actual Helmet ID
        const validPassword = "12345";  // Replace with actual Password

        // Check if the entered ID and password match the correct values
        if (helmetId === validHelmetId && password === validPassword) {
            // Show tracking section and map
            document.getElementById("tracking-section").style.display = "block";
            document.getElementById("gps-map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251737.08357424314!2d75.97304777948808!3d10.850515885849996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b5df69d36a1%3A0x42b74854d38b3a12!2sKerala!5e0!3m2!1sen!2sin!4v1706893200000!5m2!1sen!2sin";

            // Success message
            alert("Verification successful! You can now access the GPS tracking.");
        } else {
            // Failure message
            alert("Invalid Helmet ID or Password. Please try again.");
        }
    });
});
