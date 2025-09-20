// Main application logic
let userData = {
    name: '',
    email: '',
    selectedClass: null,
    selectedChapter: null,
    currentPage: 1,
    totalPages: 4,
    testQuestions: [],
    currentTestQuestion: 0,
    testAnswers: [],
    testStartTime: null
};

// Class chapters data is now loaded from external file (chapters.js)

function selectClass(classNum) {
    userData.selectedClass = classNum;
    document.getElementById('class-container').style.display = 'none';
    document.getElementById('chapter-container').style.display = 'block';
    updateUserDisplay();
    
    document.getElementById('class-title').textContent = `Class ${classNum} - Mathematics`;
    
    const chaptersContainer = document.getElementById('chapters-list');
    chaptersContainer.innerHTML = '';
    
    // Use external chapter data
    if (window.classChapters && window.classChapters[classNum]) {
        window.classChapters[classNum].forEach(chapter => {
            const chapterBtn = document.createElement('div');
            chapterBtn.className = 'chapter-btn';
            chapterBtn.innerHTML = `
                <h4>${chapter.name}</h4>
                <p>${chapter.description}</p>
            `;
            chapterBtn.onclick = () => selectChapter(chapter);
            chaptersContainer.appendChild(chapterBtn);
        });
    } else {
        // Wait for chapters.js to load and retry
        setTimeout(() => {
            if (window.classChapters && window.classChapters[classNum]) {
                chaptersContainer.innerHTML = '';
                window.classChapters[classNum].forEach(chapter => {
                    const chapterBtn = document.createElement('div');
                    chapterBtn.className = 'chapter-btn';
                    chapterBtn.innerHTML = `
                        <h4>${chapter.name}</h4>
                        <p>${chapter.description}</p>
                    `;
                    chapterBtn.onclick = () => selectChapter(chapter);
                    chaptersContainer.appendChild(chapterBtn);
                });
            } else {
                chaptersContainer.innerHTML = '<p>Chapter data not available for this class. Please refresh the page.</p>';
            }
        }, 500);
    }
}

function selectChapter(chapter) {
    userData.selectedChapter = chapter;
    
    document.getElementById('chapter-container').style.display = 'none';
    document.getElementById('type-container').style.display = 'block';
    updateUserDisplay();
    
    document.getElementById('chapter-title').textContent = `Chapter: ${chapter.name}`;
}

function selectType(type) {
    if (type === 'broad') {
        document.getElementById('coming-soon-modal').style.display = 'flex';
        return;
    }
    
    // Load reading content for short questions
    loadReadingContent();
}

function loadReadingContent() {
    document.getElementById('type-container').style.display = 'none';
    document.getElementById('reading-container').style.display = 'block';
    updateUserDisplay();
    
    document.getElementById('reading-title').textContent = 
        `Reading: ${userData.selectedChapter.name}`;
    
    userData.currentPage = 1;
    userData.totalPages = 4;
    
    displayCurrentPage();
}

async function displayCurrentPage() {
    try {
        const questionsData = await getQuestionsForChapter(userData.selectedClass, userData.selectedChapter.id);
        
        if (questionsData.length === 0) {
            document.getElementById('questions-content').innerHTML = 
                '<div style="text-align: center; padding: 40px;"><p>Questions not available for this chapter. Please check back later.</p><button onclick="goBackToChapters()" style="margin-top: 20px;">Back to Chapters</button></div>';
            return;
        }
        
        const startIndex = (userData.currentPage - 1) * 5;
        const endIndex = startIndex + 5;
        const pageQuestions = questionsData.slice(startIndex, endIndex);
        
        const content = document.getElementById('questions-content');
        content.innerHTML = '';
        
        pageQuestions.forEach((item, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question-item';
            questionDiv.innerHTML = `
                <h4>Q${startIndex + index + 1}. ${item.question}</h4>
                <p><strong>Answer:</strong> ${item.answer}</p>
            `;
            content.appendChild(questionDiv);
        });
        
        // Calculate total pages based on actual questions
        userData.totalPages = Math.ceil(questionsData.length / 5);
        
        document.getElementById('current-page').textContent = userData.currentPage;
        document.getElementById('total-pages').textContent = userData.totalPages;
        
        // Update navigation buttons
        document.getElementById('prev-btn').disabled = userData.currentPage === 1;
        document.getElementById('next-btn').style.display = 
            userData.currentPage === userData.totalPages ? 'none' : 'inline-block';
        document.getElementById('test-btn').style.display = 
            userData.currentPage === userData.totalPages ? 'inline-block' : 'none';
    } catch (error) {
        console.error('Error loading questions:', error);
        document.getElementById('questions-content').innerHTML = 
            `<div style="text-align: center; padding: 40px;">
                <p><strong>Error loading chapter content:</strong></p>
                <p>${error.message}</p>
                <p><small>If running locally, please use a web server or deploy to GitHub Pages.</small></p>
                <button onclick="goBackToChapters()" style="margin-top: 20px;">Back to Chapters</button>
            </div>`;
    }
}

function nextPage() {
    if (userData.currentPage < userData.totalPages) {
        userData.currentPage++;
        displayCurrentPage();
    }
}

function prevPage() {
    if (userData.currentPage > 1) {
        userData.currentPage--;
        displayCurrentPage();
    }
}

async function startTest() {
    try {
        const testQuestions = await getTestQuestionsForChapter(userData.selectedClass, userData.selectedChapter.id);
        
        if (!testQuestions || testQuestions.length === 0) {
            document.getElementById('reading-container').style.display = 'none';
            document.getElementById('questions-content').innerHTML = 
                '<div style="text-align: center; padding: 40px;"><p>Test questions not available for this chapter. Please check back later.</p><button onclick="goBackToChapters()" style="margin-top: 20px;">Back to Chapters</button></div>';
            document.getElementById('reading-container').style.display = 'block';
            return;
        }
        
        // Randomly select up to 10 questions for test
        userData.testQuestions = testQuestions
            .sort(() => Math.random() - 0.5)
            .slice(0, Math.min(10, testQuestions.length));
        
        userData.currentTestQuestion = 0;
        userData.testAnswers = [];
        userData.testStartTime = Date.now();
        
        document.getElementById('reading-container').style.display = 'none';
        document.getElementById('test-container').style.display = 'block';
        updateUserDisplay();
        
        displayTestQuestion();
        startTimer();
    } catch (error) {
        console.error('Error loading test questions:', error);
        alert('Error loading test questions. Please try again later.');
    }
}

function displayTestQuestion() {
    const question = userData.testQuestions[userData.currentTestQuestion];
    
    document.getElementById('test-title').textContent = 
        `Test: ${userData.selectedChapter.name}`;
    document.getElementById('test-current').textContent = userData.currentTestQuestion + 1;
    document.getElementById('test-total').textContent = userData.testQuestions.length;
    
    document.getElementById('test-question').textContent = question.question;
    
    const optionsContainer = document.getElementById('test-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectTestOption(index);
        optionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('submit-answer').disabled = true;
}

function selectTestOption(index) {
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    document.querySelectorAll('.option')[index].classList.add('selected');
    userData.testAnswers[userData.currentTestQuestion] = index;
    document.getElementById('submit-answer').disabled = false;
}

function submitAnswer() {
    userData.currentTestQuestion++;
    
    if (userData.currentTestQuestion < userData.testQuestions.length) {
        displayTestQuestion();
    } else {
        showTestResults();
    }
}

function showTestResults() {
    const score = calculateScore();
    const percentage = Math.round((score / userData.testQuestions.length) * 100);
    
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    updateUserDisplay();
    
    const resultInfo = document.getElementById('result-info');
    resultInfo.innerHTML = `
        <h3>Test Completed!</h3>
        <p><strong>Score:</strong> ${score}/${userData.testQuestions.length}</p>
        <p><strong>Percentage:</strong> ${percentage}%</p>
        <p><strong>Grade:</strong> ${getGrade(percentage)}</p>
    `;
    
    // Save result to Firestore
    saveTestResult(score, percentage).then(() => {
        displayLeaderboard();
    }).catch(error => {
        console.error('Error saving result:', error);
        displayLeaderboard();
    });
}

function calculateScore() {
    let score = 0;
    userData.testAnswers.forEach((answer, index) => {
        if (answer === userData.testQuestions[index].correct) {
            score++;
        }
    });
    return score;
}

function getGrade(percentage) {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C';
    return 'F';
}

async function saveTestResult(score, percentage) {
    if (!currentUser || !userData.email || !userData.name) {
        console.error('Missing user data for saving result');
        return;
    }
    
    const emailPrefix = userData.email.split('@')[0];
    const emailSuffix = emailPrefix.slice(-4);
    const displayName = `${userData.name}${emailSuffix}`;
    
    const now = new Date();
    const result = {
        userId: currentUser.uid,
        displayName: displayName,
        name: userData.name,
        email: userData.email,
        class: userData.selectedClass,
        chapter: userData.selectedChapter.name,
        chapterId: userData.selectedChapter.id,
        score: score,
        totalQuestions: userData.testQuestions.length,
        percentage: percentage,
        grade: getGrade(percentage),
        timestamp: window.firebase.firestore.FieldValue.serverTimestamp(),
        dateTime: now.toLocaleString('en-IN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }),
        timeTaken: Date.now() - userData.testStartTime
    };
    
    try {
        // Try to save to Firestore for global leaderboard
        if (window.db && window.firebase) {
            const docRef = await window.db.collection('testResults').add(result);
            console.log('Result saved to Firestore with ID:', docRef.id);
            
            // Also save to localStorage as backup
            const localResults = JSON.parse(localStorage.getItem('testResults') || '[]');
            localResults.push({...result, timestamp: Date.now(), firestoreId: docRef.id});
            localStorage.setItem('testResults', JSON.stringify(localResults));
        } else {
            throw new Error('Firebase not available');
        }
        
    } catch (error) {
        console.log('Saving to localStorage (Firebase not available):', error.message);
        // Fallback to localStorage if Firestore fails
        const results = JSON.parse(localStorage.getItem('testResults') || '[]');
        results.push({...result, timestamp: Date.now()});
        localStorage.setItem('testResults', JSON.stringify(results));
        // Don't throw error, just continue with localStorage
    }
}

async function displayLeaderboard() {
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = '<div class="leaderboard-tabs"><button class="tab-btn active" onclick="showGlobalLeaderboard()">🌍 Global</button><button class="tab-btn" onclick="showLocalLeaderboard()">📚 This Chapter</button></div><div id="leaderboard-content"><p>Loading...</p></div>';
    
    // Show global leaderboard by default
    showGlobalLeaderboard();
}

async function showGlobalLeaderboard() {
    // Update tab buttons
    document.querySelectorAll('.leaderboard-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.leaderboard-tabs .tab-btn')[0].classList.add('active');
    
    const content = document.getElementById('leaderboard-content');
    content.innerHTML = '<h3>🌍 Global Leaderboard - All Tests</h3><p>Loading...</p>';
    
    let allResults = [];
    
    // Try Firebase first, then fallback to localStorage
    try {
        if (window.db && window.firebase) {
            const snapshot = await window.db.collection('testResults')
                .orderBy('percentage', 'desc')
                .orderBy('timestamp', 'desc')
                .limit(20)
                .get();
            
            snapshot.forEach(doc => {
                const data = doc.data();
                allResults.push({
                    id: doc.id,
                    ...data,
                    timestamp: data.timestamp ? data.timestamp.toDate() : new Date(data.dateTime || Date.now())
                });
            });
        }
    } catch (error) {
        console.log('Firebase not available, using localStorage:', error);
    }
    
    // If no Firebase results, use localStorage
    if (allResults.length === 0) {
        const localResults = JSON.parse(localStorage.getItem('testResults') || '[]');
        allResults = localResults.map(result => ({
            ...result,
            timestamp: result.timestamp ? new Date(result.timestamp) : new Date(result.dateTime || Date.now())
        }));
    }
    
    content.innerHTML = '<h3>🌍 Global Leaderboard - All Tests</h3>';
    
    if (allResults.length === 0) {
        content.innerHTML += '<p>No results yet. Be the first to take a test!</p>';
        return;
    }
    
    // Sort results properly
    allResults.sort((a, b) => {
        if (b.percentage !== a.percentage) {
            return b.percentage - a.percentage;
        }
        return (a.timeTaken || 0) - (b.timeTaken || 0);
    });
    
    // Limit to top 20
    allResults.slice(0, 20).forEach((result, index) => {
        const entry = document.createElement('div');
        entry.className = 'leaderboard-entry detailed';
        
        const isCurrentUser = result.userId === currentUser?.uid;
        if (isCurrentUser) {
            entry.classList.add('current-user');
        }
        
        entry.innerHTML = `
            <div class="rank-info">
                <span class="rank">#${index + 1}</span>
                <span class="user-name">${result.displayName || result.name || 'Anonymous'}${isCurrentUser ? ' (You)' : ''}</span>
            </div>
            <div class="test-info">
                <span class="class-chapter">Class ${result.class} - ${result.chapter}</span>
                <span class="score">${result.percentage}% (${result.score}/${result.totalQuestions})</span>
            </div>
            <div class="date-time">
                <span class="grade">Grade: ${result.grade}</span>
                <span class="timestamp">${result.dateTime || result.timestamp.toLocaleString('en-IN')}</span>
            </div>
        `;
        content.appendChild(entry);
    });
}

async function showLocalLeaderboard() {
    // Update tab buttons
    document.querySelectorAll('.leaderboard-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.leaderboard-tabs .tab-btn')[1].classList.add('active');
    
    const content = document.getElementById('leaderboard-content');
    
    if (!userData.selectedClass || !userData.selectedChapter) {
        content.innerHTML = '<h3>📚 Chapter Leaderboard</h3><p>No chapter selected.</p>';
        return;
    }
    
    content.innerHTML = `<h3>📚 Chapter Leaderboard</h3><h4>Class ${userData.selectedClass} - ${userData.selectedChapter.name}</h4><p>Loading...</p>`;
    
    let chapterResults = [];
    
    // Try Firebase first, then fallback to localStorage
    try {
        if (window.db && window.firebase) {
            const snapshot = await window.db.collection('testResults')
                .where('class', '==', userData.selectedClass)
                .where('chapterId', '==', userData.selectedChapter.id)
                .orderBy('percentage', 'desc')
                .orderBy('timestamp', 'desc')
                .limit(15)
                .get();
            
            snapshot.forEach(doc => {
                const data = doc.data();
                chapterResults.push({
                    id: doc.id,
                    ...data,
                    timestamp: data.timestamp ? data.timestamp.toDate() : new Date(data.dateTime || Date.now())
                });
            });
        }
    } catch (error) {
        console.log('Firebase not available, using localStorage:', error);
    }
    
    // If no Firebase results, filter localStorage results
    if (chapterResults.length === 0) {
        const localResults = JSON.parse(localStorage.getItem('testResults') || '[]');
        chapterResults = localResults
            .filter(result => result.class === userData.selectedClass && result.chapterId === userData.selectedChapter.id)
            .map(result => ({
                ...result,
                timestamp: result.timestamp ? new Date(result.timestamp) : new Date(result.dateTime || Date.now())
            }));
    }
    
    content.innerHTML = `<h3>📚 Chapter Leaderboard</h3><h4>Class ${userData.selectedClass} - ${userData.selectedChapter.name}</h4>`;
    
    if (chapterResults.length === 0) {
        content.innerHTML += '<p>No results for this chapter yet. Be the first!</p>';
        return;
    }
    
    // Sort results properly
    chapterResults.sort((a, b) => {
        if (b.percentage !== a.percentage) {
            return b.percentage - a.percentage;
        }
        return (a.timeTaken || 0) - (b.timeTaken || 0);
    });
    
    // Limit to top 15
    chapterResults.slice(0, 15).forEach((result, index) => {
        const entry = document.createElement('div');
        entry.className = 'leaderboard-entry chapter-specific';
        
        const isCurrentUser = result.userId === currentUser?.uid;
        if (isCurrentUser) {
            entry.classList.add('current-user');
        }
        
        entry.innerHTML = `
            <div class="rank-info">
                <span class="rank">#${index + 1}</span>
                <span class="user-name">${result.displayName || result.name || 'Anonymous'}${isCurrentUser ? ' (You)' : ''}</span>
            </div>
            <div class="test-info">
                <span class="score">${result.percentage}% (${result.score}/${result.totalQuestions})</span>
                <span class="grade">Grade: ${result.grade}</span>
            </div>
            <div class="date-time">
                <span class="timestamp">${result.dateTime || result.timestamp.toLocaleString('en-IN')}</span>
            </div>
        `;
        content.appendChild(entry);
    });
}

// Fallback function for localStorage leaderboard
function displayLocalLeaderboardFallback() {
    const allResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    const content = document.getElementById('leaderboard-content');
    
    content.innerHTML = '<h3>🏆 Local Leaderboard (Offline)</h3>';
    
    if (allResults.length === 0) {
        content.innerHTML += '<p>No local results found.</p>';
        return;
    }
    
    const sortedResults = allResults
        .sort((a, b) => {
            if (b.percentage !== a.percentage) {
                return b.percentage - a.percentage;
            }
            return a.timeTaken - b.timeTaken;
        })
        .slice(0, 10);
    
    sortedResults.forEach((result, index) => {
        const entry = document.createElement('div');
        entry.className = 'leaderboard-entry detailed';
        
        const isCurrentUser = result.userId === currentUser?.uid;
        if (isCurrentUser) {
            entry.classList.add('current-user');
        }
        
        entry.innerHTML = `
            <div class="rank-info">
                <span class="rank">#${index + 1}</span>
                <span class="user-name">${result.displayName}${isCurrentUser ? ' (You)' : ''}</span>
            </div>
            <div class="test-info">
                <span class="class-chapter">Class ${result.class} - ${result.chapter}</span>
                <span class="score">${result.percentage}% (${result.score}/${result.totalQuestions})</span>
            </div>
            <div class="date-time">
                <span class="grade">Grade: ${result.grade}</span>
                <span class="timestamp">${result.dateTime || new Date(result.timestamp).toLocaleString('en-IN')}</span>
            </div>
        `;
        content.appendChild(entry);
    });
}

function startTimer() {
    let timeLeft = 30 * 60; // 30 minutes in seconds
    
    const timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        document.getElementById('timer').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        timeLeft--;
        
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            alert('Time up! Submitting test...');
            showTestResults();
        }
    }, 1000);
}

// Navigation functions
function goBackToClass() {
    document.getElementById('chapter-container').style.display = 'none';
    document.getElementById('class-container').style.display = 'block';
    updateUserDisplay();
}

function goBackToChapters() {
    document.getElementById('type-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('chapter-container').style.display = 'block';
    updateUserDisplay();
}

function retakeTest() {
    startTest();
}

function closeModal() {
    document.getElementById('coming-soon-modal').style.display = 'none';
}

// Load reading questions using dynamic loader
async function getQuestionsForChapter(classNum, chapterId) {
    return await window.chapterLoader.getReadingQuestions(classNum, chapterId);
}

// Load test questions using dynamic loader
async function getTestQuestionsForChapter(classNum, chapterId) {
    return await window.chapterLoader.getTestQuestions(classNum, chapterId);
}

// Check if chapter has questions available
async function chapterHasQuestions(classNum, chapterId) {
    if (window.chapterLoader) {
        return await window.chapterLoader.chapterExists(classNum, chapterId);
    }
    return false;
}
