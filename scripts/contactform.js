document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('successMessage').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validate Name
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById('nameError').textContent = 'Name must contain only letters and spaces.';
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|outlook|icloud)\.com$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email (e.g., xyz@gmail.com).';
        isValid = false;
    }

    // Validate Password
    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and include a number and special character.';
        isValid = false;
    }

    // Validate Phone Number
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be exactly 10 digits.';
        isValid = false;
    }

    // Validate Message Length
    if (message.length > 250) {
        document.getElementById('messageError').textContent = 'Message must not exceed 250 characters.';
        isValid = false;
    }

    // If all validations pass, show success message
    if (isValid) {
        document.getElementById('successMessage').textContent = 'Form submitted successfully!';
    }
});