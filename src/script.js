
(function () {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init({
            publicKey: "JoD9DWqNZB58Sl_u_",  // Replace with your actual public key
        });
    })();

    window.onload = function () {
        document.getElementById('feedbackForm').addEventListener('submit', function (event) {
            event.preventDefault();

            // Show loading animation and disable the submit button
            document.getElementById('submit-btn').style.display = 'none'; // Hide the submit button
            document.getElementById('loading').style.display = 'block'; // Show loading animation

            // Send the form data using EmailJS
            emailjs.sendForm('service_5885yo7', 'template_zfxjigs', this)
                .then(() => {
                    // Hide loading animation and show success message
                    document.getElementById('loading').style.display = 'none';
                    document.getElementById('success-message').style.display = 'block';
                    document.getElementById('feedbackForm').style.display = 'none'; // Hide the form
                }, (error) => {
                    // Hide loading animation and show error message
                    document.getElementById('loading').style.display = 'none';
                    document.getElementById('error-message').style.display = 'block';
                });
        });
    }
