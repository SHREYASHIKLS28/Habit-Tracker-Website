
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const usernameRegex = /^[A-Z0-9]{1,10}$/;
    if (usernameRegex.test(username) && /\d/.test(password) && /[A-Z]/.test(password) && password.length >= 8) {

        window.location.href = 'tracker html.html';
    } else {
    
        alert('Invalid username or password format. Please make sure your username contains only uppercase letters and numbers (maximum 10 characters), and your password contains at least one uppercase letter, one number, one special character, and is at least 8 characters long.');
    }
}

function track() {
    const isLoggedIn = false;
    if (!isLoggedIn) {
        alert('Please log in first to access the tracking page.');
    } else {
        window.location.href = 'tracker html.html';
    }
}

function getInspired() {
    const email = document.querySelector('#newsletter-signup input[type="email"]').value;
    if (!email || !email.includes('@')) {
        alert('Please enter a valid email address.');
    } else {
        window.location.href = 'motivational_messages.html';
    }
}
