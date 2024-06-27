document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        const userData = {
            username: username,
            email: email,
            password: password
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Registration successful!');

        // Clear the form
        document.getElementById('registrationForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
