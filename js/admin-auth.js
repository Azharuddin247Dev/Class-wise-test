// Admin authentication and access control
async function checkAdminAccess() {
    if (!window.db || !currentUser) {
        showAccessDenied('Please login first');
        return false;
    }
    
    try {
        const userDoc = await window.db.collection('userPerformance').doc(currentUser.uid).get();
        
        if (!userDoc.exists || userDoc.data().role !== 'admin') {
            showAccessDenied('Access denied. Admin privileges required.');
            return false;
        }
        
        return true;
    } catch (error) {
        showAccessDenied('Error verifying admin access');
        return false;
    }
}

function showAccessDenied(message) {
    document.body.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; min-height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
            <div style="background: white; padding: 40px; border-radius: 15px; text-align: center; box-shadow: 0 15px 35px rgba(0,0,0,0.1);">
                <h2 style="color: #dc3545; margin-bottom: 20px;">🚫 Access Denied</h2>
                <p style="margin-bottom: 30px; color: #666;">${message}</p>
                <a href="index.html" style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px;">← Back to Home</a>
            </div>
        </div>
    `;
}

// Initialize admin access check when page loads
window.addEventListener('load', async () => {
    // Wait for Firebase to initialize
    setTimeout(async () => {
        if (window.location.pathname.includes('admin.html')) {
            const hasAccess = await checkAdminAccess();
            if (!hasAccess) return;
        }
        
        // Show admin nav link if user is admin
        if (currentUser) {
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
    }, 2000);
});