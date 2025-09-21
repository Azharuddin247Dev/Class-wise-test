// Admin Panel Functionality
let allUsers = [];
let allTestResults = [];

// Load all data for admin panel
async function loadAdminData() {
    try {
        // Load test results
        if (window.db) {
            const snapshot = await window.db.collection('testResults')
                .orderBy('timestamp', 'desc')
                .get();
            
            allTestResults = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                allTestResults.push({
                    id: doc.id,
                    ...data,
                    timestamp: data.timestamp ? data.timestamp.toDate() : new Date(data.dateTime || Date.now())
                });
            });
        }
    } catch (error) {
        console.log('Using localStorage for admin data');
    }
    
    // Fallback to localStorage
    if (allTestResults.length === 0) {
        const localResults = JSON.parse(localStorage.getItem('testResults') || '[]');
        allTestResults = localResults.map(result => ({
            ...result,
            timestamp: result.timestamp ? new Date(result.timestamp) : new Date(result.dateTime || Date.now())
        }));
    }
    
    // Process user data from test results
    processUserData();
    displayUsers();
    displayAnalytics();
}

// Process user data from test results
function processUserData() {
    const userMap = {};
    
    allTestResults.forEach(result => {
        if (!userMap[result.userId]) {
            userMap[result.userId] = {
                userId: result.userId,
                name: result.name || 'Unknown',
                displayName: result.displayName || result.name || 'Unknown',
                email: result.email || 'unknown@example.com',
                tests: [],
                totalTests: 0,
                averageScore: 0,
                bestScore: 0,
                worstScore: 100,
                totalTimeTaken: 0,
                classesAttempted: new Set(),
                chaptersAttempted: new Set(),
                firstTest: result.timestamp,
                lastTest: result.timestamp,
                grades: { 'A+': 0, 'A': 0, 'B+': 0, 'B': 0, 'C': 0, 'F': 0 }
            };
        }
        
        const user = userMap[result.userId];
        user.tests.push(result);
        user.totalTests++;
        user.totalTimeTaken += result.timeTaken || 0;
        user.classesAttempted.add(result.class);
        user.chaptersAttempted.add(`${result.class}-${result.chapterId}`);
        user.grades[result.grade]++;
        
        if (result.percentage > user.bestScore) user.bestScore = result.percentage;
        if (result.percentage < user.worstScore) user.worstScore = result.percentage;
        if (result.timestamp < user.firstTest) user.firstTest = result.timestamp;
        if (result.timestamp > user.lastTest) user.lastTest = result.timestamp;
    });
    
    // Calculate averages
    Object.values(userMap).forEach(user => {
        user.averageScore = user.totalTests > 0 ? 
            Math.round(user.tests.reduce((sum, test) => sum + test.percentage, 0) / user.totalTests) : 0;
        user.averageTimePerTest = user.totalTests > 0 ? 
            Math.round(user.totalTimeTaken / user.totalTests / 1000) : 0;
        user.classesAttempted = Array.from(user.classesAttempted);
        user.chaptersAttempted = Array.from(user.chaptersAttempted);
    });
    
    allUsers = Object.values(userMap);
}

// Display users in admin panel
function displayUsers() {
    const container = document.getElementById('users-list');
    
    if (allUsers.length === 0) {
        container.innerHTML = '<p>No users found.</p>';
        return;
    }
    
    container.innerHTML = '';
    
    allUsers.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        
        const activityStatus = getActivityStatus(user.lastTest);
        const performanceLevel = getPerformanceLevel(user.averageScore);
        
        userCard.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <div>
                    <h4>${user.displayName}</h4>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Tests Taken:</strong> ${user.totalTests} | <strong>Average Score:</strong> ${user.averageScore}%</p>
                    <p><strong>Best Score:</strong> ${user.bestScore}% | <strong>Performance:</strong> ${performanceLevel}</p>
                    <p><strong>Classes:</strong> ${user.classesAttempted.join(', ')} | <strong>Chapters:</strong> ${user.chaptersAttempted.length}</p>
                    <p><strong>Last Active:</strong> ${user.lastTest.toLocaleDateString()} (${activityStatus})</p>
                </div>
                <div style="text-align: right;">
                    <div style="font-size: 0.9em; color: #666;">
                        Avg Time: ${Math.floor(user.averageTimePerTest / 60)}m ${user.averageTimePerTest % 60}s
                    </div>
                    <div class="user-actions">
                        <button class="action-btn btn-view" onclick="viewUserDetails('${user.userId}')">View Details</button>
                        <button class="action-btn btn-export" onclick="exportUserData('${user.userId}')">Export</button>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(userCard);
    });
}

// Display system analytics
function displayAnalytics() {
    const statsContainer = document.getElementById('system-stats');
    const insightsContainer = document.getElementById('performance-insights');
    
    // System statistics
    const totalUsers = allUsers.length;
    const totalTests = allTestResults.length;
    const averageScore = totalTests > 0 ? 
        Math.round(allTestResults.reduce((sum, test) => sum + test.percentage, 0) / totalTests) : 0;
    
    // Activity analysis
    const now = new Date();
    const activeUsers = allUsers.filter(user => {
        const daysSinceLastTest = (now - user.lastTest) / (1000 * 60 * 60 * 24);
        return daysSinceLastTest <= 7;
    }).length;
    
    // Performance distribution
    const performanceDistribution = {
        excellent: allTestResults.filter(t => t.percentage >= 90).length,
        good: allTestResults.filter(t => t.percentage >= 70 && t.percentage < 90).length,
        average: allTestResults.filter(t => t.percentage >= 50 && t.percentage < 70).length,
        poor: allTestResults.filter(t => t.percentage < 50).length
    };
    
    statsContainer.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-number">${totalUsers}</div>
                <div>Total Users</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${totalTests}</div>
                <div>Total Tests</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${averageScore}%</div>
                <div>Average Score</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${activeUsers}</div>
                <div>Active Users (7d)</div>
            </div>
        </div>
    `;
    
    // Performance insights
    insightsContainer.innerHTML = `
        <h4>Performance Distribution</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
            <div style="background: #d4edda; padding: 15px; border-radius: 8px;">
                <strong>Excellent (90%+)</strong><br>
                ${performanceDistribution.excellent} tests (${Math.round(performanceDistribution.excellent/totalTests*100)}%)
            </div>
            <div style="background: #d1ecf1; padding: 15px; border-radius: 8px;">
                <strong>Good (70-89%)</strong><br>
                ${performanceDistribution.good} tests (${Math.round(performanceDistribution.good/totalTests*100)}%)
            </div>
            <div style="background: #fff3cd; padding: 15px; border-radius: 8px;">
                <strong>Average (50-69%)</strong><br>
                ${performanceDistribution.average} tests (${Math.round(performanceDistribution.average/totalTests*100)}%)
            </div>
            <div style="background: #f8d7da; padding: 15px; border-radius: 8px;">
                <strong>Poor (<50%)</strong><br>
                ${performanceDistribution.poor} tests (${Math.round(performanceDistribution.poor/totalTests*100)}%)
            </div>
        </div>
    `;
}

// Helper functions
function getActivityStatus(lastTest) {
    const daysSince = (new Date() - lastTest) / (1000 * 60 * 60 * 24);
    if (daysSince <= 1) return 'Very Active';
    if (daysSince <= 7) return 'Active';
    if (daysSince <= 30) return 'Inactive';
    return 'Very Inactive';
}

function getPerformanceLevel(averageScore) {
    if (averageScore >= 90) return 'Excellent';
    if (averageScore >= 70) return 'Good';
    if (averageScore >= 50) return 'Average';
    return 'Needs Improvement';
}

// Tab management
function showTab(tabName) {
    document.querySelectorAll('.admin-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.admin-content').forEach(content => content.style.display = 'none');
    
    event.target.classList.add('active');
    document.getElementById(tabName + '-tab').style.display = 'block';
}

// Filter users
function filterUsers() {
    const searchTerm = document.getElementById('user-search').value.toLowerCase();
    const classFilter = document.getElementById('class-filter').value;
    
    const filteredUsers = allUsers.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm) || 
                            user.email.toLowerCase().includes(searchTerm);
        const matchesClass = !classFilter || user.classesAttempted.includes(parseInt(classFilter));
        
        return matchesSearch && matchesClass;
    });
    
    displayFilteredUsers(filteredUsers);
}

function displayFilteredUsers(users) {
    const container = document.getElementById('users-list');
    container.innerHTML = '';
    
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        
        const activityStatus = getActivityStatus(user.lastTest);
        const performanceLevel = getPerformanceLevel(user.averageScore);
        
        userCard.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <div>
                    <h4>${user.displayName}</h4>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Tests:</strong> ${user.totalTests} | <strong>Avg Score:</strong> ${user.averageScore}%</p>
                    <p><strong>Performance:</strong> ${performanceLevel} | <strong>Status:</strong> ${activityStatus}</p>
                </div>
                <div class="user-actions">
                    <button class="action-btn btn-view" onclick="viewUserDetails('${user.userId}')">Details</button>
                </div>
            </div>
        `;
        
        container.appendChild(userCard);
    });
}

// Export functions
function exportUserData() {
    const csvContent = generateUserCSV();
    downloadCSV(csvContent, 'user-data.csv');
}

function exportTestResults() {
    const csvContent = generateTestResultsCSV();
    downloadCSV(csvContent, 'test-results.csv');
}

function exportPerformanceReport() {
    const report = {
        generatedAt: new Date().toISOString(),
        totalUsers: allUsers.length,
        totalTests: allTestResults.length,
        users: allUsers,
        testResults: allTestResults
    };
    
    const jsonContent = JSON.stringify(report, null, 2);
    downloadJSON(jsonContent, 'performance-report.json');
}

function generateUserCSV() {
    const headers = ['User ID', 'Name', 'Email', 'Total Tests', 'Average Score', 'Best Score', 'Classes', 'Last Active'];
    const rows = allUsers.map(user => [
        user.userId,
        user.name,
        user.email,
        user.totalTests,
        user.averageScore,
        user.bestScore,
        user.classesAttempted.join(';'),
        user.lastTest.toISOString()
    ]);
    
    return [headers, ...rows].map(row => row.join(',')).join('\n');
}

function generateTestResultsCSV() {
    const headers = ['User ID', 'Name', 'Class', 'Chapter', 'Score', 'Percentage', 'Grade', 'Time Taken', 'Date'];
    const rows = allTestResults.map(result => [
        result.userId,
        result.name,
        result.class,
        result.chapter,
        result.score,
        result.percentage,
        result.grade,
        result.timeTaken,
        result.timestamp.toISOString()
    ]);
    
    return [headers, ...rows].map(row => row.join(',')).join('\n');
}

function downloadCSV(content, filename) {
    const blob = new Blob([content], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}

function downloadJSON(content, filename) {
    const blob = new Blob([content], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}

function viewUserDetails(userId) {
    const user = allUsers.find(u => u.userId === userId);
    if (!user) return;
    
    alert(`User Details:\n\nName: ${user.name}\nEmail: ${user.email}\nTotal Tests: ${user.totalTests}\nAverage Score: ${user.averageScore}%\nBest Score: ${user.bestScore}%\nClasses: ${user.classesAttempted.join(', ')}\nChapters Attempted: ${user.chaptersAttempted.length}\nFirst Test: ${user.firstTest.toLocaleDateString()}\nLast Test: ${user.lastTest.toLocaleDateString()}`);
}

// Initialize admin panel
window.addEventListener('load', () => {
    setTimeout(loadAdminData, 1000);
});