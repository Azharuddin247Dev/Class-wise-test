// Authentication functions
let currentUser = null;

function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
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
        
        // Save user to localStorage for demo mode
        registeredUsers.push({
            uid: currentUser.uid,
            email: email,
            password: password,
            signupDate: new Date().toISOString()
        });
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        
        showNameInput();
    } catch (error) {
        console.error('Signup error:', error);
        
        // For demo purposes, create a mock user if Firebase fails
        const mockUid = 'demo-' + Date.now();
        currentUser = { uid: mockUid, email: email };
        
        // Save user to localStorage for demo mode
        registeredUsers.push({
            uid: mockUid,
            email: email,
            password: password,
            signupDate: new Date().toISOString()
        });
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        
        showNameInput();
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
        
        // Check if user exists in localStorage (signed up before)
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const userExists = registeredUsers.find(user => user.email === email);
        
        if (!userExists) {
            alert('Account not found. Please sign up first.');
            showSignup();
            return;
        }
        
        // Verify password for demo mode
        if (userExists.password !== password) {
            alert('Invalid password. Please try again.');
            return;
        }
        
        // Create mock user for demo
        currentUser = { uid: userExists.uid, email: email };
        
        // Check localStorage for saved name
        const savedName = localStorage.getItem(`userName_${currentUser.uid}`);
        if (savedName) {
            userData.name = savedName;
            userData.email = currentUser.email;
            showClassSelection();
            // Log login activity
            logUserActivity('user_login', { loginMethod: 'demo_mode' });
        } else {
            showNameInput();
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
            throw new Error('Firebase not available');
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
        // Save to localStorage as fallback
        const localFeedback = JSON.parse(localStorage.getItem('feedback') || '[]');
        localFeedback.push({
            message: message,
            email: email,
            dateTime: new Date().toLocaleString('en-IN'),
            type: 'password_reset_request'
        });
        localStorage.setItem('feedback', JSON.stringify(localFeedback));
        alert('Your request has been saved locally. Please try again later when online.');
        closeFeedbackModal();
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
        console.log('Could not log user activity:', error.message);
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
