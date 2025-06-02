// DOM Elements
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Form Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

// Form Submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset errors
    emailError.textContent = '';
    passwordError.textContent = '';
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const role = document.getElementById('role').value;
    
    let isValid = true;
    
    // Validate email
    if (!email) {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email';
        isValid = false;
    }
    
    // Validate password
    if (!password) {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if (!validatePassword(password)) {
        passwordError.textContent = 'Password must be at least 6 characters';
        isValid = false;
    }
    
    // Validate role
    if (!role) {
        alert('Please select a role');
        isValid = false;
    }
    
    // If valid, simulate login
    if (isValid) {
        // In a real app, you would send this to a server
        alert(`Login successful as ${role}`);
        
        // Redirect based on role
        if (role === 'admin') {
            window.location.href = 'books.html';
        } else {
            window.location.href = 'transactions.html';
        }
    }
});