// Performance Analytics System
let allTestResults = [];
let filteredResults = [];
let currentTimeFilter = 'all';
let currentClassFilter = 'all';

// Load and analyze performance data
async function loadPerformanceData() {
    try {
        // Load all users' data for global performance
        if (window.db) {
            const snapshot = await window.db.collection('testResults')
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
        console.error('Unable to load performance data:', error);
        document.getElementById('total-users').textContent = 'N/A';
        document.getElementById('total-tests').textContent = 'N/A';
        document.getElementById('avg-score').textContent = 'N/A';
        document.getElementById('active-users').textContent = 'N/A';
    }
    
    if (allTestResults.length === 0) {
        document.getElementById('user-performance-table').innerHTML = '<tr><td colspan="6">No performance data available. Please check your internet connection.</td></tr>';
        return;
    }
    
    applyFilters();
    updateDashboard();
}

// Apply time and class filters
function applyFilters() {
    filteredResults = allTestResults.filter(result => {
        // Time filter
        if (currentTimeFilter !== 'all') {
            const now = new Date();
            const resultDate = result.timestamp;
            const daysDiff = (now - resultDate) / (1000 * 60 * 60 * 24);
            
            if (currentTimeFilter === 'week' && daysDiff > 7) return false;
            if (currentTimeFilter === 'month' && daysDiff > 30) return false;
        }
        
        // Class filter
        if (currentClassFilter !== 'all' && result.class != currentClassFilter) {
            return false;
        }
        
        return true;
    });
}

// Update dashboard with current data
function updateDashboard() {
    updateStatistics();
    updateUserPerformanceTable();
    updateChapterAnalysis();
    drawPerformanceChart();
}

// Update statistics cards
function updateStatistics() {
    const uniqueUsers = new Set(filteredResults.map(r => r.userId)).size;
    const totalTests = filteredResults.length;
    const avgScore = totalTests > 0 ? Math.round(filteredResults.reduce((sum, r) => sum + r.percentage, 0) / totalTests) : 0;
    
    // Active users in last 7 days
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const activeUsers = new Set(
        allTestResults
            .filter(r => r.timestamp >= weekAgo)
            .map(r => r.userId)
    ).size;
    
    document.getElementById('total-users').textContent = uniqueUsers;
    document.getElementById('total-tests').textContent = totalTests;
    document.getElementById('avg-score').textContent = avgScore + '%';
    document.getElementById('active-users').textContent = activeUsers;
}

// Update user performance table
function updateUserPerformanceTable() {
    const userStats = {};
    
    // Aggregate user data
    filteredResults.forEach(result => {
        if (!userStats[result.userId]) {
            userStats[result.userId] = {
                name: result.displayName || result.name || 'Anonymous',
                tests: [],
                lastActive: result.timestamp
            };
        }
        
        userStats[result.userId].tests.push(result);
        if (result.timestamp > userStats[result.userId].lastActive) {
            userStats[result.userId].lastActive = result.timestamp;
        }
    });
    
    const tbody = document.getElementById('user-performance-table');
    tbody.innerHTML = '';
    
    if (Object.keys(userStats).length === 0) {
        tbody.innerHTML = '<tr><td colspan="6">No data available for selected filters</td></tr>';
        return;
    }
    
    // Sort users by average score
    const sortedUsers = Object.entries(userStats).sort((a, b) => {
        const avgA = a[1].tests.reduce((sum, t) => sum + t.percentage, 0) / a[1].tests.length;
        const avgB = b[1].tests.reduce((sum, t) => sum + t.percentage, 0) / b[1].tests.length;
        return avgB - avgA;
    });
    
    sortedUsers.forEach(([userId, stats]) => {
        const avgScore = Math.round(stats.tests.reduce((sum, t) => sum + t.percentage, 0) / stats.tests.length);
        const bestScore = Math.max(...stats.tests.map(t => t.percentage));
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${stats.name}</td>
            <td>${stats.tests.length}</td>
            <td>${avgScore}%</td>
            <td>${bestScore}%</td>
            <td>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${avgScore}%"></div>
                </div>
            </td>
            <td>${stats.lastActive.toLocaleDateString()}</td>
        `;
        tbody.appendChild(row);
    });
}

// Update chapter analysis
function updateChapterAnalysis() {
    const chapterStats = {};
    
    filteredResults.forEach(result => {
        const key = `Class ${result.class} - ${result.chapter}`;
        if (!chapterStats[key]) {
            chapterStats[key] = {
                tests: 0,
                totalScore: 0,
                scores: []
            };
        }
        
        chapterStats[key].tests++;
        chapterStats[key].totalScore += result.percentage;
        chapterStats[key].scores.push(result.percentage);
    });
    
    const container = document.getElementById('chapter-analysis');
    container.innerHTML = '';
    
    if (Object.keys(chapterStats).length === 0) {
        container.innerHTML = '<p>No chapter data available for selected filters</p>';
        return;
    }
    
    // Sort chapters by average performance
    const sortedChapters = Object.entries(chapterStats).sort((a, b) => {
        const avgA = a[1].totalScore / a[1].tests;
        const avgB = b[1].totalScore / b[1].tests;
        return avgB - avgA;
    });
    
    sortedChapters.forEach(([chapter, stats]) => {
        const avgScore = Math.round(stats.totalScore / stats.tests);
        const difficulty = avgScore >= 80 ? 'Easy' : avgScore >= 60 ? 'Medium' : 'Hard';
        const difficultyColor = avgScore >= 80 ? '#28a745' : avgScore >= 60 ? '#ffc107' : '#dc3545';
        
        const chapterDiv = document.createElement('div');
        chapterDiv.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #eee;';
        chapterDiv.innerHTML = `
            <div>
                <strong>${chapter}</strong><br>
                <small>${stats.tests} tests taken</small>
            </div>
            <div style="text-align: right;">
                <div style="font-size: 1.2em; font-weight: bold;">${avgScore}%</div>
                <div style="color: ${difficultyColor}; font-size: 0.9em;">${difficulty}</div>
            </div>
        `;
        container.appendChild(chapterDiv);
    });
}

// Draw performance chart (simple text-based chart)
function drawPerformanceChart() {
    const canvas = document.getElementById('performanceChart');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (filteredResults.length === 0) {
        ctx.fillStyle = '#666';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('No data available', canvas.width / 2, canvas.height / 2);
        return;
    }
    
    // Group results by date
    const dailyScores = {};
    filteredResults.forEach(result => {
        const date = result.timestamp.toDateString();
        if (!dailyScores[date]) {
            dailyScores[date] = [];
        }
        dailyScores[date].push(result.percentage);
    });
    
    // Calculate daily averages
    const chartData = Object.entries(dailyScores)
        .map(([date, scores]) => ({
            date: new Date(date),
            avgScore: scores.reduce((sum, score) => sum + score, 0) / scores.length
        }))
        .sort((a, b) => a.date - b.date)
        .slice(-7); // Last 7 days
    
    if (chartData.length === 0) return;
    
    // Draw simple line chart
    const padding = 40;
    const chartWidth = canvas.width - 2 * padding;
    const chartHeight = canvas.height - 2 * padding;
    
    // Draw axes
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();
    
    // Draw data points and lines
    if (chartData.length > 1) {
        ctx.strokeStyle = '#007bff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        chartData.forEach((point, index) => {
            const x = padding + (index / (chartData.length - 1)) * chartWidth;
            const y = canvas.height - padding - (point.avgScore / 100) * chartHeight;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
            
            // Draw point
            ctx.fillStyle = '#007bff';
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
        });
        
        ctx.stroke();
    }
    
    // Draw labels
    ctx.fillStyle = '#666';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    
    chartData.forEach((point, index) => {
        const x = padding + (index / Math.max(chartData.length - 1, 1)) * chartWidth;
        const label = point.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        ctx.fillText(label, x, canvas.height - 10);
    });
}

// Filter functions
function setTimeFilter(filter) {
    currentTimeFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    applyFilters();
    updateDashboard();
}

function setClassFilter(classNum) {
    currentClassFilter = classNum;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    applyFilters();
    updateDashboard();
}

// Initialize when page loads
window.addEventListener('load', () => {
    if (window.firebase && window.firebase.apps.length > 0) {
        loadPerformanceData();
    } else {
        console.error('Firebase not initialized');
        document.getElementById('user-performance-table').innerHTML = '<tr><td colspan="6">Firebase connection error</td></tr>';
    }
});  if (chartData.length > 1) {
        ctx.strokeStyle = '#007bff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        chartData.forEach((point, index) => {
            const x = padding + (index / (chartData.length - 1)) * chartWidth;
            const y = canvas.height - padding - (point.avgScore / 100) * chartHeight;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
            
            // Draw point
            ctx.fillStyle = '#007bff';
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
        });
        
        ctx.stroke();
    }
    
    // Add labels
    ctx.fillStyle = '#666';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Performance Trend (Last 7 Days)', canvas.width / 2, 20);
}

// Filter functions
function setTimeFilter(filter) {
    currentTimeFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    applyFilters();
    updateDashboard();
}

function setClassFilter(filter) {
    currentClassFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    applyFilters();
    updateDashboard();
}

// Initialize dashboard
window.addEventListener('load', () => {
    setTimeout(loadPerformanceData, 1000);
});
