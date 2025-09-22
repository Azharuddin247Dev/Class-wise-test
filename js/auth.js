// Authentication functions
let currentUser = null;

function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    
    // Safely handle tab switching
    try {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        if (event && event.target) {
            event.target.classList.add('active');
        } else {
            // Default to first tab when called programmatically
            const firstTab = document.querySelector('.tab-btn');
            if (firstTab) firstTab.classList.add('active');
        }
    } catch (error) {
        // Ignore tab styling errors during logout
    }
    
    // Clear signup form fields
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';
    document.getElementById('confirm-password').value = '';
}

function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Clear login form fields
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
}

async function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
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
    
    // Check if user already exists
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const userExists = registeredUsers.find(user => user.email === email);
    
    if (userExists) {
        alert('Account already exists. Please login instead.');
        showLogin();
        return;
    }
    
    try {
        const userCredential = await window.auth.createUserWithEmailAndPassword(email, password);
        currentUser = userCredential.user;
        
        showNameInput();
    } catch (error) {
        console.error('Signup error:', error);
        
        if (error.code === 'auth/email-already-in-use') {
            alert('This email is already registered. Please use the login form.');
            showLogin();
        } else if (error.code === 'auth/weak-password') {
            alert('Password is too weak. Please use at least 6 characters.');
        } else if (error.code === 'auth/invalid-email') {
            alert('Please enter a valid email address.');
        } else {
            alert('Signup failed. Please check your internet connection and try again.');
        }
    }
}

async function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        alert('Please fill all fields');
        return;
    }
    
    try {
        const userCredential = await window.auth.signInWithEmailAndPassword(email, password);
        currentUser = userCredential.user;
        
        // Check localStorage for saved name
        const savedName = localStorage.getItem(`userName_${currentUser.uid}`);
        if (savedName) {
            userData.name = savedName;
            userData.email = currentUser.email;
            showClassSelection();
            // Log login activity
            logUserActivity('user_login', { loginMethod: 'firebase_auth' });
        } else {
            showNameInput();
        }
    } catch (error) {
        console.error('Login error:', error);
        
        if (error.code === 'auth/user-not-found') {
            alert('No account found with this email. Please sign up first.');
            showSignup();
        } else if (error.code === 'auth/wrong-password') {
            alert('Incorrect password. Please try again.');
        } else if (error.code === 'auth/invalid-email') {
            alert('Please enter a valid email address.');
        } else {
            alert('Login failed. Please check your internet connection and try again.');
        }
    }
}

function showNameInput() {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('name-container').style.display = 'block';
}

function saveName() {
    const name = document.getElementById('user-name').value.trim();
    
    if (!name) {
        alert('Please enter your name');
        return;
    }
    
    if (!currentUser) {
        alert('Please log in first');
        return;
    }
    
    userData.name = name;
    userData.email = currentUser.email;
    
    // Save to localStorage
    localStorage.setItem(`userName_${currentUser.uid}`, name);
    
    console.log('Name saved:', name);
    showClassSelection();
}

function showClassSelection() {
    document.getElementById('name-container').style.display = 'none';
    document.getElementById('class-container').style.display = 'block';
    updateUserDisplay();
    checkUserRole();
}

// Check user role and show admin link if admin
async function checkUserRole() {
    if (!window.db || !currentUser) return;
    
    try {
        const userDoc = await window.db.collection('userPerformance').doc(currentUser.uid).get();
        if (userDoc.exists && userDoc.data().role === 'admin') {
            const adminLink = document.getElementById('admin-nav-link');
            if (adminLink) adminLink.style.display = 'inline-block';
        }
    } catch (error) {
        console.log('Could not check user role:', error.message);
    }
}

function updateUserDisplay() {
    if (!userData.email || !userData.name) {
        console.log('User data not ready for display');
        return;
    }
    
    const emailPrefix = userData.email.split('@')[0];
    const emailSuffix = emailPrefix.slice(-4);
    const displayName = `${userData.name}${emailSuffix}`;
    
    // Update all user display elements
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

function logout() {
    window.auth.signOut().then(() => {
        // Clear user data
        currentUser = null;
        userData = { name: '', email: '', selectedClass: null, selectedChapter: null, currentPage: 1, totalPages: 4, testQuestions: [], currentTestQuestion: 0, testAnswers: [], testStartTime: null };
        
        // Hide all screens and show auth
        document.querySelectorAll('.container > div').forEach(div => {
            div.style.display = 'none';
        });
        document.getElementById('auth-container').style.display = 'block';
        
        // Reset forms
        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
        document.getElementById('signup-email').value = '';
        document.getElementById('signup-password').value = '';
        document.getElementById('confirm-password').value = '';
        document.getElementById('user-name').value = '';
        
        // Reset to login tab
        showLogin();
    }).catch((error) => {
        console.error('Logout error:', error);
        // Force logout even if Firebase fails
        currentUser = null;
        userData = { name: '', email: '', selectedClass: null, selectedChapter: null, currentPage: 1, totalPages: 4, testQuestions: [], currentTestQuestion: 0, testAnswers: [], testStartTime: null };
        document.querySelectorAll('.container > div').forEach(div => {
            div.style.display = 'none';
        });
        document.getElementById('auth-container').style.display = 'block';
    });
}

// Feedback system functions
function showFeedbackModal() {
    document.getElementById('feedback-modal').style.display = 'flex';
}

function closeFeedbackModal() {
    document.getElementById('feedback-modal').style.display = 'none';
    document.getElementById('feedback-message').value = '';
    document.getElementById('feedback-email').value = '';
}

async function sendFeedback() {
    const message = document.getElementById('feedback-message').value.trim();
    const email = document.getElementById('feedback-email').value.trim();
    
    if (!message) {
        alert('Please enter your message or request');
        return;
    }
    
    if (!email) {
        alert('Please enter your email address');
        return;
    }
    
    try {
        if (!window.db) {
            throw new Error('Service temporarily unavailable. Please try again later.');
        }
        
        const feedbackData = {
            message: message,
            email: email,
            timestamp: window.firebase ? window.firebase.firestore.FieldValue.serverTimestamp() : new Date().toISOString(),
            dateTime: new Date().toLocaleString('en-IN'),
            type: 'password_reset_request'
        };
        
        await window.db.collection('feedback').add(feedbackData);
        alert('Your request has been sent successfully! We will contact you soon.');
        closeFeedbackModal();
    } catch (error) {
        console.error('Error sending feedback:', error);
        alert('Unable to send your request. Please check your internet connection and try again.');
        console.error('Feedback submission failed:', error);
    }
}

// Log user activity to Firebase for detailed tracking
async function logUserActivity(action, details = {}) {
    if (!window.db || !currentUser || !userData.name) return;
    
    try {
        const now = new Date();
        const activityData = {
            userId: currentUser.uid,
            userName: userData.name,
            userEmail: userData.email,
            action: action,
            timestamp: now.toISOString(),
            timestampFormatted: now.toLocaleString('en-IN'),
            date: now.toISOString().split('T')[0],
            time: now.toTimeString().split(' ')[0],
            details: details,
            sessionId: 'session_' + Date.now(),
            deviceInfo: {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                language: navigator.language
            }
        };
        
        // Save to userActivity collection
        await window.db.collection('userActivity').add(activityData);
        console.log('User activity logged:', action);
        
    } catch (error) {
        if (error.code === 'permission-denied') {
            console.log('Firebase permissions not configured for activity logging');
        } else {
            console.log('Could not log user activity:', error.message);
        }
    }
}

// Check if user is already logged in
window.auth.onAuthStateChanged((user) => {
    if (user) {
        currentUser = user;
        // Hide auth container when user is logged in
        document.getElementById('auth-container').style.display = 'none';
        
        const savedName = localStorage.getItem(`userName_${user.uid}`);
        if (savedName) {
            userData.name = savedName;
            userData.email = user.email;
            showClassSelection();
        } else {
            showNameInput();
        }
    } else {
        // Show auth container when user is not logged in
        document.getElementById('auth-container').style.display = 'block';
        // Hide all other containers
        const containers = ['name-container', 'class-container', 'chapter-container', 'type-container', 'reading-container', 'test-container', 'result-container'];
        containers.forEach(id => {
            document.getElementById(id).style.display = 'none';
        });
    }
});
