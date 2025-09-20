// // Authentication functions
// let currentUser = null;

// function showLogin() {
//     document.getElementById('login-form').style.display = 'block';
//     document.getElementById('signup-form').style.display = 'none';
//     document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
//     event.target.classList.add('active');
    
//     // Clear signup form fields
//     document.getElementById('signup-email').value = '';
//     document.getElementById('signup-password').value = '';
//     document.getElementById('confirm-password').value = '';
// }

// function showSignup() {
//     document.getElementById('login-form').style.display = 'none';
//     document.getElementById('signup-form').style.display = 'block';
//     document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
//     event.target.classList.add('active');
    
//     // Clear login form fields
//     document.getElementById('login-email').value = '';
//     document.getElementById('login-password').value = '';
// }

// async function signup() {
//     const email = document.getElementById('signup-email').value;
//     const password = document.getElementById('signup-password').value;
//     const confirmPassword = document.getElementById('confirm-password').value;
    
//     if (!email || !password || !confirmPassword) {
//         alert('Please fill all fields');
//         return;
//     }
    
//     if (password !== confirmPassword) {
//         alert('Passwords do not match');
//         return;
//     }
    
//     if (password.length < 6) {
//         alert('Password must be at least 6 characters');
//         return;
//     }
    
//     // Check if user already exists
//     const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
//     const userExists = registeredUsers.find(user => user.email === email);
    
//     if (userExists) {
//         alert('Account already exists. Please login instead.');
//         showLogin();
//         return;
//     }
    
//     try {
//         const userCredential = await window.auth.createUserWithEmailAndPassword(email, password);
//         currentUser = userCredential.user;
        
//         // Save user to localStorage for demo mode
//         registeredUsers.push({
//             uid: currentUser.uid,
//             email: email,
//             password: password,
//             signupDate: new Date().toISOString()
//         });
//         localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        
//         showNameInput();
//     } catch (error) {
//         console.error('Signup error:', error);
        
//         // For demo purposes, create a mock user if Firebase fails
//         const mockUid = 'demo-' + Date.now();
//         currentUser = { uid: mockUid, email: email };
        
//         // Save user to localStorage for demo mode
//         registeredUsers.push({
//             uid: mockUid,
//             email: email,
//             password: password,
//             signupDate: new Date().toISOString()
//         });
//         localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        
//         showNameInput();
//     }
// }

// async function login() {
//     const email = document.getElementById('login-email').value;
//     const password = document.getElementById('login-password').value;
    
//     if (!email || !password) {
//         alert('Please fill all fields');
//         return;
//     }
    
//     try {
//         const userCredential = await window.auth.signInWithEmailAndPassword(email, password);
//         currentUser = userCredential.user;
        
//         // Check localStorage for saved name
//         const savedName = localStorage.getItem(`userName_${currentUser.uid}`);
//         if (savedName) {
//             userData.name = savedName;
//             userData.email = currentUser.email;
//             showClassSelection();
//         } else {
//             showNameInput();
//         }
//     } catch (error) {
//         console.error('Login error:', error);
        
//         // Check if user exists in localStorage (signed up before)
//         const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
//         const userExists = registeredUsers.find(user => user.email === email);
        
//         if (!userExists) {
//             alert('Account not found. Please sign up first.');
//             showSignup();
//             return;
//         }
        
//         // Verify password for demo mode
//         if (userExists.password !== password) {
//             alert('Invalid password. Please try again.');
//             return;
//         }
        
//         // Create mock user for demo
//         currentUser = { uid: userExists.uid, email: email };
        
//         // Check localStorage for saved name
//         const savedName = localStorage.getItem(`userName_${currentUser.uid}`);
//         if (savedName) {
//             userData.name = savedName;
//             userData.email = currentUser.email;
//             showClassSelection();
//         } else {
//             showNameInput();
//         }
//     }
// }

// function showNameInput() {
//     document.getElementById('auth-container').style.display = 'none';
//     document.getElementById('name-container').style.display = 'block';
// }

// function saveName() {
//     const name = document.getElementById('user-name').value.trim();
    
//     if (!name) {
//         alert('Please enter your name');
//         return;
//     }
    
//     if (!currentUser) {
//         alert('Please log in first');
//         return;
//     }
    
//     userData.name = name;
//     userData.email = currentUser.email;
    
//     // Save to localStorage
//     localStorage.setItem(`userName_${currentUser.uid}`, name);
    
//     console.log('Name saved:', name);
//     showClassSelection();
// }

// function showClassSelection() {
//     document.getElementById('name-container').style.display = 'none';
//     document.getElementById('class-container').style.display = 'block';
//     updateUserDisplay();
// }

// function updateUserDisplay() {
//     if (!userData.email || !userData.name) {
//         console.log('User data not ready for display');
//         return;
//     }
    
//     const emailPrefix = userData.email.split('@')[0];
//     const emailSuffix = emailPrefix.slice(-4);
//     const displayName = `${userData.name}${emailSuffix}`;
    
//     // Update all user display elements
//     const elements = [
//         'user-display-name', 'user-display-name-2', 'user-display-name-3',
//         'user-display-name-4', 'user-display-name-5', 'user-display-name-6'
//     ];
    
//     elements.forEach(id => {
//         const element = document.getElementById(id);
//         if (element) {
//             element.textContent = `Welcome, ${displayName}!`;
//         }
//     });
    
//     console.log('User display updated:', displayName);
// }

// function logout() {
//     window.auth.signOut().then(() => {
//         // Clear user data
//         currentUser = null;
//         userData = { name: '', email: '', selectedClass: null, selectedChapter: null, currentPage: 1, totalPages: 4, testQuestions: [], currentTestQuestion: 0, testAnswers: [], testStartTime: null };
        
//         // Hide all screens and show auth
//         document.querySelectorAll('.container > div').forEach(div => {
//             div.style.display = 'none';
//         });
//         document.getElementById('auth-container').style.display = 'block';
        
//         // Reset forms
//         document.getElementById('login-email').value = '';
//         document.getElementById('login-password').value = '';
//         document.getElementById('signup-email').value = '';
//         document.getElementById('signup-password').value = '';
//         document.getElementById('confirm-password').value = '';
//         document.getElementById('user-name').value = '';
        
//         // Reset to login tab
//         showLogin();
//     }).catch((error) => {
//         console.error('Logout error:', error);
//         // Force logout even if Firebase fails
//         currentUser = null;
//         userData = { name: '', email: '', selectedClass: null, selectedChapter: null, currentPage: 1, totalPages: 4, testQuestions: [], currentTestQuestion: 0, testAnswers: [], testStartTime: null };
//         document.querySelectorAll('.container > div').forEach(div => {
//             div.style.display = 'none';
//         });
//         document.getElementById('auth-container').style.display = 'block';
//     });
// }

// // Feedback system functions
// function showFeedbackModal() {
//     document.getElementById('feedback-modal').style.display = 'flex';
// }

// function closeFeedbackModal() {
//     document.getElementById('feedback-modal').style.display = 'none';
//     document.getElementById('feedback-message').value = '';
//     document.getElementById('feedback-email').value = '';
// }

// async function sendFeedback() {
//     const message = document.getElementById('feedback-message').value.trim();
//     const email = document.getElementById('feedback-email').value.trim();
    
//     if (!message) {
//         alert('Please enter your message or request');
//         return;
//     }
    
//     if (!email) {
//         alert('Please enter your email address');
//         return;
//     }
    
//     try {
//         const feedbackData = {
//             message: message,
//             email: email,
//             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//             dateTime: new Date().toLocaleString('en-IN'),
//             type: 'password_reset_request'
//         };
        
//         await window.db.collection('feedback').add(feedbackData);
//         alert('Your request has been sent successfully! We will contact you soon.');
//         closeFeedbackModal();
//     } catch (error) {
//         console.error('Error sending feedback:', error);
//         alert('Error sending request. Please try again later.');
//     }
// }




// // Check if user is already logged in
// window.auth.onAuthStateChanged((user) => {
//     if (user) {
//         currentUser = user;
//         // Hide auth container when user is logged in
//         document.getElementById('auth-container').style.display = 'none';
        
//         const savedName = localStorage.getItem(`userName_${user.uid}`);
//         if (savedName) {
//             userData.name = savedName;
//             userData.email = user.email;
//             showClassSelection();
//         } else {
//             showNameInput();
//         }
//     } else {
//         // Show auth container when user is not logged in
//         document.getElementById('auth-container').style.display = 'block';
//         // Hide all other containers
//         const containers = ['name-container', 'class-container', 'chapter-container', 'type-container', 'reading-container', 'test-container', 'result-container'];
//         containers.forEach(id => {
//             document.getElementById(id).style.display = 'none';
//         });
//     }
// });


// Global user data object (assuming 'userData' is defined elsewhere, like in app.js or globally)
// Initialize if it doesn't exist to prevent errors
if (typeof userData === 'undefined') {
    var userData = {
        name: '', email: '', selectedClass: null, selectedChapter: null, 
        currentPage: 1, totalPages: 4, testQuestions: [], 
        currentTestQuestion: 0, testAnswers: [], testStartTime: null
    };
}


// Authentication functions
let currentUser = null;

// Helper to hide all main content containers
function hideAllMainContainers() {
    // Select all direct children of the main 'container' div that are also divs,
    // assuming they are your main screen containers like auth-container, name-container etc.
    document.querySelectorAll('.container > div').forEach(div => {
        div.style.display = 'none';
    });
}


// Function to show the login form
function showLogin(event) {
    if (event) event.preventDefault(); // Prevent default link behavior if called from a link
    
    hideAllMainContainers(); // Hide all other content areas first
    document.getElementById('auth-container').style.display = 'block'; // Show the main auth container
    
    // Ensure only the login form is visible within auth-container
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('password-reset-container').style.display = 'none'; // Hide the password reset form
    
    // Manage tab button active state
    document.querySelectorAll('.auth-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    const loginTabBtn = document.querySelector('.auth-tabs .tab-btn[onclick*="showLogin"]');
    if (loginTabBtn) loginTabBtn.classList.add('active');
    
    // Clear signup form fields for a clean state
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';
    document.getElementById('confirm-password').value = '';
    
    // Clear messages from password reset form
    const passwordResetMessage = document.getElementById('password-reset-message');
    const passwordResetError = document.getElementById('password-reset-error');
    if (passwordResetMessage) passwordResetMessage.textContent = '';
    if (passwordResetError) passwordResetError.textContent = '';
}


// Function to show the signup form
function showSignup(event) {
    if (event) event.preventDefault(); // Prevent default link behavior
    
    hideAllMainContainers(); // Hide all other content areas first
    document.getElementById('auth-container').style.display = 'block'; // Show the main auth container
    
    // Ensure only the signup form is visible within auth-container
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('password-reset-container').style.display = 'none'; // Hide the password reset form
    
    // Manage tab button active state
    document.querySelectorAll('.auth-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    const signupTabBtn = document.querySelector('.auth-tabs .tab-btn[onclick*="showSignup"]');
    if (signupTabBtn) signupTabBtn.classList.add('active');
    
    // Clear login form fields for a clean state
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';

    // Clear messages from password reset form
    const passwordResetMessage = document.getElementById('password-reset-message');
    const passwordResetError = document.getElementById('password-reset-error');
    if (passwordResetMessage) passwordResetMessage.textContent = '';
    if (passwordResetError) passwordResetError.textContent = '';
}


// NEW FUNCTION: Show the password reset form
function showPasswordResetForm(event) {
    if (event) event.preventDefault(); // Prevent default link behavior
    
    hideAllMainContainers(); // Hide all main content areas
    document.getElementById('auth-container').style.display = 'block'; // Ensure the main auth container is visible
    
    // Hide login/signup and show password reset form
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('password-reset-container').style.display = 'block';
    
    // Clear any previous messages and input in the reset form
    const passwordResetMessage = document.getElementById('password-reset-message');
    const passwordResetError = document.getElementById('password-reset-error');
    const passwordResetEmailInput = document.getElementById('password-reset-email-input');
    
    if (passwordResetMessage) passwordResetMessage.textContent = '';
    if (passwordResetError) passwordResetError.textContent = '';
    if (passwordResetEmailInput) passwordResetEmailInput.value = '';
    
    // Deactivate any active tab buttons as this is a separate flow
    document.querySelectorAll('.auth-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
}


// Function to handle user signup
async function signup() {
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    
    if (!email || !password || !confirmPassword) {
        alert('Please fill all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }
    
    // Your localStorage demo mode user check (runs before Firebase attempt)
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const userExistsInLocalStorage = registeredUsers.find(user => user.email === email);
    
    if (userExistsInLocalStorage && !window.auth.currentUser) { // If user exists in localStorage AND Firebase Auth not active
        alert('Account already exists in demo data. Please login instead.');
        showLogin();
        return;
    }
    
    try {
        const userCredential = await window.auth.createUserWithEmailAndPassword(email, password);
        currentUser = userCredential.user;
        
        // Save user to localStorage for demo mode (if Firebase Auth succeeds or for later demo use)
        registeredUsers.push({
            uid: currentUser.uid,
            email: email,
            password: password,
            signupDate: new Date().toISOString()
        });
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        
        showNameInput(); // Proceed to name input after successful signup
    } catch (error) {
        console.error('Signup error:', error);
        
        // Detailed Firebase error handling
        let errorMessage = 'Signup failed. Please try again.';
        switch(error.code) {
            case 'auth/email-already-in-use':
                errorMessage = 'This email is already in use. Please login or use a different email.';
                break;
            case 'auth/invalid-email':
                errorMessage = 'The email address is not valid.';
                break;
            case 'auth/operation-not-allowed':
                errorMessage = 'Email/password accounts are not enabled. Contact support.';
                break;
            case 'auth/weak-password':
                errorMessage = 'The password is too weak. Please use a stronger password.';
                break;
            default:
                errorMessage += ` (${error.message || error})`; // Ensure message is always shown
        }
        alert(errorMessage);

        // Your existing demo fallback logic:
        // This part runs even if Firebase signup fails. You might want to adjust
        // this behavior in a non-demo app, but keeping it for your current setup.
        const mockUid = 'demo-' + Date.now();
        currentUser = { uid: mockUid, email: email };
        registeredUsers.push({
            uid: mockUid,
            email: email,
            password: password,
            signupDate: new Date().toISOString()
        });
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        showNameInput(); // This will proceed to name input even with a Firebase error due to demo mode
    }
}


// Function to handle user login
async function login() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    
    if (!email || !password) {
        alert('Please fill all fields');
        return;
    }
    
    try {
        const userCredential = await window.auth.signInWithEmailAndPassword(email, password);
        currentUser = userCredential.user;
        
        // Check localStorage for saved name (for personalized welcome)
        const savedName = localStorage.getItem(`userName_${currentUser.uid}`);
        if (savedName) {
            userData.name = savedName;
            userData.email = currentUser.email;
            showClassSelection(); // Proceed to class selection
        } else {
            showNameInput(); // If no name saved, ask for it
        }
    } catch (error) {
        console.error('Login error:', error);
        
        // Detailed Firebase error handling
        let errorMessage = 'Login failed. Please try again.';
        switch(error.code) {
            case 'auth/user-not-found':
            case 'auth/wrong-password':
                errorMessage = 'Invalid email or password.';
                break;
            case 'auth/invalid-email':
                errorMessage = 'The email address is not valid.';
                break;
            case 'auth/user-disabled':
                errorMessage = 'This account has been disabled.';
                break;
            default:
                errorMessage += ` (${error.message || error})`;
        }
        alert(errorMessage);

        // Your existing demo fallback logic:
        // This part runs even if Firebase login fails.
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const userExistsInLocalStorage = registeredUsers.find(user => user.email === email);
        
        if (userExistsInLocalStorage && userExistsInLocalStorage.password === password) { // Verify password for demo mode
            currentUser = { uid: userExistsInLocalStorage.uid, email: email };
            const savedName = localStorage.getItem(`userName_${currentUser.uid}`);
            if (savedName) {
                userData.name = savedName;
                userData.email = currentUser.email;
                showClassSelection();
            } else {
                showNameInput();
            }
        } else if (!userExistsInLocalStorage) {
            alert('Account not found in demo data. Please sign up first.');
            showSignup();
        } else { // Password mismatch for demo user
             alert('Invalid password for demo account. Please try again.');
        }
    }
}


// NEW FUNCTION: Handle sending password reset email
async function handlePasswordResetRequest() {
    const emailInput = document.getElementById('password-reset-email-input');
    const email = emailInput.value.trim();
    const messageDisplay = document.getElementById('password-reset-message');
    const errorDisplay = document.getElementById('password-reset-error');

    // Clear previous messages
    messageDisplay.textContent = '';
    errorDisplay.textContent = '';

    if (!email) {
        errorDisplay.textContent = 'Please enter your email address.';
        return;
    }

    const auth = window.auth; // Access the Firebase Auth instance

    if (!auth) {
        errorDisplay.textContent = 'Firebase Authentication is not initialized. Please refresh the page.';
        console.error('Firebase Auth not available globally.');
        return;
    }

    try {
        await auth.sendPasswordResetEmail(email); // The core call to Firebase Auth
        messageDisplay.textContent = 'A password reset link has been sent to ' + email + '. Please check your inbox (and spam folder)!';
        emailInput.value = ''; // Clear the input field after successful sending
    } catch (error) {
        console.error('Error sending password reset email:', error);
        let errorMessage = 'Failed to send password reset link. Please try again.';

        switch (error.code) {
            case 'auth/user-not-found':
                // For security reasons (email enumeration protection), Firebase often gives a generic success
                // message even if the email isn't registered. This prevents malicious actors from
                // discovering valid user accounts. So, giving a generic "if exists" message is best.
                errorMessage = 'If an account with that email exists, a password reset link has been sent.';
                break;
            case 'auth/invalid-email':
                errorMessage = 'The email address is not valid.';
                break;
            case 'auth/too-many-requests':
                errorMessage = 'Too many requests. Please wait a moment and try again.';
                break;
            default:
                errorMessage += ` (${error.message || error})`;
                break;
        }
        errorDisplay.textContent = errorMessage;
    }
}


// Function to show the name input screen
function showNameInput() {
    hideAllMainContainers(); // Hide everything else
    document.getElementById('name-container').style.display = 'block'; // Show name input screen
}


// Function to save the user's name
function saveName() {
    const name = document.getElementById('user-name').value.trim();
    
    if (!name) {
        alert('Please enter your name');
        return;
    }
    
    if (!currentUser) {
        alert('Please log in first'); // Should not happen if flow is correct
        return;
    }
    
    userData.name = name;
    userData.email = currentUser.email;
    
    // Save to localStorage for persistence
    localStorage.setItem(`userName_${currentUser.uid}`, name);
    
    console.log('Name saved:', name);
    showClassSelection(); // Proceed to class selection
}


// Function to show the class selection screen
function showClassSelection() {
    hideAllMainContainers(); // Hide everything else
    document.getElementById('class-container').style.display = 'block'; // Show class selection screen
    updateUserDisplay(); // Update welcome message
}


// Function to update user display across different screens
function updateUserDisplay() {
    if (!userData.email || !userData.name) {
        console.log('User data not ready for display in updateUserDisplay');
        return;
    }
    
    const emailPrefix = userData.email.split('@')[0];
    const emailSuffix = emailPrefix.slice(-4);
    const displayName = `${userData.name}${emailSuffix}`;
    
    // List of element IDs where user's display name should appear
    const elements = [
        'user-display-name', 'user-display-name-2', 'user-display-name-3',
        'user-display-name-4', 'user-display-name-5', 'user-display-name-6'
    ];
    
    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = `Welcome, ${displayName}!`;
        }
    });
    
    console.log('User display updated:', displayName);
}


// Function to handle user logout
function logout() {
    window.auth.signOut().then(() => {
        // Clear global user data and localStorage
        currentUser = null;
        userData = { name: '', email: '', selectedClass: null, selectedChapter: null, 
                     currentPage: 1, totalPages: 4, testQuestions: [], 
                     currentTestQuestion: 0, testAnswers: [], testStartTime: null };
        localStorage.removeItem('currentClass'); // Example: clear other session data
        localStorage.removeItem('currentChapter');
        // Add more localStorage.removeItem() as needed for other session data

        // Hide all screens and show the authentication screen
        hideAllMainContainers();
        document.getElementById('auth-container').style.display = 'block';
        
        // Reset all authentication-related form fields for a clean state
        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
        document.getElementById('signup-email').value = '';
        document.getElementById('signup-password').value = '';
        document.getElementById('confirm-password').value = '';
        document.getElementById('user-name').value = '';
        // Clear password reset email input as well
        const passwordResetEmailInput = document.getElementById('password-reset-email-input');
        if (passwordResetEmailInput) passwordResetEmailInput.value = '';
        
        showLogin(); // Go back to the login tab by default
    }).catch((error) => {
        console.error('Logout error:', error);
        alert('Logout failed. Please try again or manually clear browser data.');
        // Even if Firebase fails, force client-side logout for UX
        currentUser = null;
        userData = { name: '', email: '', selectedClass: null, selectedChapter: null, 
                     currentPage: 1, totalPages: 4, testQuestions: [], 
                     currentTestQuestion: 0, testAnswers: [], testStartTime: null };
        localStorage.removeItem('currentClass');
        localStorage.removeItem('currentChapter');

        hideAllMainContainers();
        document.getElementById('auth-container').style.display = 'block';
        showLogin(); // Always fall back to showing the login form
    });
}


// Feedback system functions (now purely for general feedback)
function showFeedbackModal() {
    document.getElementById('feedback-modal').style.display = 'flex';
    // Clear fields when showing modal
    document.getElementById('feedback-message').value = '';
    document.getElementById('feedback-email').value = '';
}

function closeFeedbackModal() {
    document.getElementById('feedback-modal').style.display = 'none';
    // Clear fields when closing modal
    document.getElementById('feedback-message').value = '';
    document.getElementById('feedback-email').value = '';
}

async function sendFeedback() {
    const message = document.getElementById('feedback-message').value.trim();
    const email = document.getElementById('feedback-email').value.trim(); // Now clearly just for contact

    if (!message) {
        alert('Please enter your message or suggestion.'); // Updated prompt
        return;
    }
    
    if (!email) {
        alert('Please enter your email address so we can reply if needed.'); // Updated prompt
        return;
    }
    
    try {
        const feedbackData = {
            message: message,
            email: email,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            // No need for client-side dateTime if serverTimestamp is used for ordering/analysis
            type: 'general_feedback' // CLEARLY indicates this is for general feedback
        };
        
        await window.db.collection('feedback').add(feedbackData);
        alert('Your feedback has been sent successfully! Thank you for helping us improve.'); // Updated success message
        closeFeedbackModal();
    } catch (error) {
        console.error('Error sending feedback:', error);
        alert('Error sending feedback. Please try again later.'); // Updated error message
    }
}


// Firebase Authentication state observer
window.auth.onAuthStateChanged((user) => {
    if (user) {
        currentUser = user;
        
        hideAllMainContainers(); // Ensure all other screens are hidden
        
        const savedName = localStorage.getItem(`userName_${user.uid}`);
        if (savedName) {
            userData.name = savedName;
            userData.email = user.email;
            showClassSelection(); // If logged in and name exists, go to class selection
        } else {
            showNameInput(); // If logged in but no name saved, ask for name
        }
    } else {
        // User is not logged in, show authentication screen
        hideAllMainContainers(); // Hide all other screens explicitly
        document.getElementById('auth-container').style.display = 'block';
        showLogin(); // Default to showing the login form
    }
});
