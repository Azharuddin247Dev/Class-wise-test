# West Bengal Mathematics Portal

A comprehensive web-based mathematics learning platform for classes V-VIII with chapter-wise questions and interactive tests.

## 🚀 Live Demo
Access the application at: `https://yourusername.github.io/repository-name/`

## 📚 Features
- **4 Classes**: V, VI, VII, VIII
- **10 Chapters per class** with comprehensive content
- **Reading Questions**: Detailed explanations for each concept
- **Interactive Tests**: Multiple choice questions with instant results
- **Global Leaderboard**: Track performance across all users
- **Firebase Authentication**: Secure user login/signup
- **📊 Performance Dashboard**: Comprehensive user analytics and insights
- **🔧 Admin Panel**: User management and data export capabilities
- **📈 Advanced Analytics**: Performance trends, user activity tracking, and detailed metrics

## 🛠️ Setup for GitHub Pages
1. Fork/Clone this repository
2. Enable GitHub Pages in repository settings
3. Set source to main branch
4. Configure Firebase (see FIREBASE-SETUP.md)
5. Access via GitHub Pages URL

## 📁 Structure
```
Class-wise-test/
├── data/
│   ├── class5/ (10 chapters)
│   ├── class6/ (10 chapters)
│   ├── class7/ (10 chapters)
│   ├── class8/ (10 chapters)
│   └── chapters.js
├── js/
│   ├── app.js
│   ├── auth.js
│   └── chapter-loader.js
├── css/
└── index.html
```

## 🔧 Configuration
All chapter data is dynamically loaded from individual files. No additional configuration needed for GitHub Pages deployment.

## 🚀 Deployment Steps
1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select source: Deploy from branch
4. Choose main branch
5. Application will be available at GitHub Pages URL

## 📱 Usage
1. Sign up/Login with email
2. Enter your name
3. Select class (V-VIII)
4. Choose chapter
5. Study reading questions
6. Take interactive test
7. View results and leaderboard
8. **📊 Track Performance**: Access detailed analytics via Performance Dashboard
9. **🔧 Admin Access**: Use Admin Panel for user management (admin.html)

## 📊 Performance Features
- **User Analytics**: Individual user performance tracking
- **System Statistics**: Overall platform metrics
- **Performance Trends**: Visual charts and progress tracking
- **Data Export**: CSV and JSON export capabilities
- **Activity Monitoring**: User engagement and activity status
- **Chapter Analysis**: Performance breakdown by chapter and class

### Access Points:
- **Performance Dashboard**: `performance.html`
- **Admin Panel**: `admin.html`
- **Global Leaderboard**: `leaderboard.html`
