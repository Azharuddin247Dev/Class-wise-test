// Notification and Update System
class NotificationSystem {
  constructor() {
    this.notifications = [];
    this.init();
  }

  init() {
    // Check for updates on page load
    this.checkForUpdates();

    // Show welcome message for new users
    this.showWelcomeMessage();
  }

  checkForUpdates() {
    const lastUpdateCheck = localStorage.getItem("lastUpdateCheck");
    const currentVersion = "2.1.0"; // Update this when you release new features
    const lastVersion = localStorage.getItem("appVersion") || "1.0.0";

    if (lastVersion !== currentVersion) {
      this.showUpdateBanner();
      localStorage.setItem("appVersion", currentVersion);
    }

    localStorage.setItem("lastUpdateCheck", Date.now());
  }

  showUpdateBanner() {
    const banner = document.createElement("div");
    banner.className = "update-banner";
    banner.innerHTML = `
            <span class="update-text">🎉 New Update Available!</span>
            <span>Enhanced UI, better performance, and new features added!</span>
            <button class="update-close" onclick="this.parentElement.remove()">×</button>
        `;

    document.body.insertBefore(banner, document.body.firstChild);

    // Auto-hide after 10 seconds
    setTimeout(() => {
      if (banner.parentElement) {
        banner.remove();
      }
    }, 10000);
  }

  showWelcomeMessage() {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome && !firebase.auth().currentUser) {
      setTimeout(() => {
        this.showNotification({
          type: "welcome",
          title: "Welcome to WB Math Portal! 🎓",
          message:
            "Start your mathematics learning journey with interactive tests, performance tracking, and compete with students across West Bengal!",
          icon: "📚",
          actions: [
            {
              text: "Get Started",
              action: "primary",
              callback: () => this.closeNotification(),
            },
            {
              text: "Learn More",
              action: "secondary",
              callback: () => this.showFeatures(),
            },
          ],
        });
        localStorage.setItem("hasSeenWelcome", "true");
      }, 2000);
    }
  }

  showLoginMessage() {
    const user = firebase.auth().currentUser;
    if (user) {
      const userName = localStorage.getItem("userName") || "Student";
      this.showNotification({
        type: "success",
        title: `Welcome back, ${userName}! 👋`,
        message:
          "Ready to continue your mathematics learning journey? Check out new chapters and track your progress!",
        icon: "🎯",
        actions: [
          {
            text: "Continue Learning",
            action: "primary",
            callback: () => this.closeNotification(),
          },
          {
            text: "View Progress",
            action: "secondary",
            callback: () => window.open("performance.html", "_blank"),
          },
        ],
      });
    }
  }

  showAdminMessage() {
    this.showNotification({
      type: "admin",
      title: "Admin Instructions 🔧",
      message:
        "Welcome to the admin panel! You can manage users, export data, and monitor system performance. Use the tabs to navigate between different admin functions.",
      icon: "⚙️",
      actions: [
        {
          text: "Got it!",
          action: "primary",
          callback: () => this.closeNotification(),
        },
      ],
    });
  }

  showTestInstructions() {
    this.showNotification({
      type: "info",
      title: "Test Instructions 📝",
      message:
        "You have 20 minutes to complete this test. Read each question carefully and select the best answer. You can review your answers before submitting.",
      icon: "⏰",
      actions: [
        {
          text: "Start Test",
          action: "primary",
          callback: () => this.closeNotification(),
        },
        {
          text: "Cancel",
          action: "secondary",
          callback: () => {
            this.closeNotification();
            goBackToChapters();
          },
        },
      ],
    });
  }

  showFeatures() {
    this.showNotification({
      type: "info",
      title: "Platform Features ✨",
      message:
        "• Interactive tests for Classes V-VIII\n• Real-time performance tracking\n• Global leaderboards\n• Chapter-wise learning\n• Detailed analytics\n• Mobile-friendly design",
      icon: "🌟",
      actions: [
        {
          text: "Awesome!",
          action: "primary",
          callback: () => this.closeNotification(),
        },
      ],
    });
  }

  showNotification(config) {
    const overlay = document.createElement("div");
    overlay.className = "notification-overlay";
    overlay.innerHTML = `
            <div class="notification-modal">
                <div class="notification-header">
                    <span class="notification-icon">${config.icon}</span>
                    <h3 class="notification-title">${config.title}</h3>
                </div>
                <div class="notification-message">${config.message.replace(
                  /\n/g,
                  "<br>"
                )}</div>
                <div class="notification-actions">
                    ${config.actions
                      .map(
                        (action) =>
                          `<button class="notification-btn ${
                            action.action
                          }" onclick="notificationSystem.handleAction('${
                            action.action
                          }', ${config.actions.indexOf(action)})">${
                            action.text
                          }</button>`
                      )
                      .join("")}
                </div>
            </div>
        `;

    document.body.appendChild(overlay);
    this.currentNotification = { overlay, config };

    // Close on overlay click
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        this.closeNotification();
      }
    });
  }

  handleAction(actionType, actionIndex) {
    if (
      this.currentNotification &&
      this.currentNotification.config.actions[actionIndex]
    ) {
      const callback =
        this.currentNotification.config.actions[actionIndex].callback;
      if (callback) callback();
    }
  }

  closeNotification() {
    if (this.currentNotification) {
      this.currentNotification.overlay.remove();
      this.currentNotification = null;
    }
  }

  // Quick notification methods
  showSuccess(message, title = "Success! ✅") {
    this.showNotification({
      type: "success",
      title,
      message,
      icon: "✅",
      actions: [
        {
          text: "OK",
          action: "primary",
          callback: () => this.closeNotification(),
        },
      ],
    });
  }

  showError(message, title = "Error ❌") {
    this.showNotification({
      type: "error",
      title,
      message,
      icon: "❌",
      actions: [
        {
          text: "OK",
          action: "primary",
          callback: () => this.closeNotification(),
        },
      ],
    });
  }

  showInfo(message, title = "Information ℹ️") {
    this.showNotification({
      type: "info",
      title,
      message,
      icon: "ℹ️",
      actions: [
        {
          text: "OK",
          action: "primary",
          callback: () => this.closeNotification(),
        },
      ],
    });
  }

  showConfirm(message, onConfirm, title = "Confirm Action") {
    this.showNotification({
      type: "confirm",
      title,
      message,
      icon: "❓",
      actions: [
        {
          text: "Yes",
          action: "primary",
          callback: () => {
            this.closeNotification();
            onConfirm();
          },
        },
        {
          text: "Cancel",
          action: "secondary",
          callback: () => this.closeNotification(),
        },
      ],
    });
  }
}

// Initialize notification system
const notificationSystem = new NotificationSystem();

// Enhanced UI Interactions
class UIEnhancements {
  constructor() {
    this.init();
  }

  init() {
    this.addLoadingStates();
    this.addHoverEffects();
    this.addKeyboardNavigation();
    this.addProgressIndicators();
  }

  addLoadingStates() {
    // Add loading spinners to buttons when clicked
    document.addEventListener("click", (e) => {
      if (
        e.target.tagName === "BUTTON" &&
        !e.target.classList.contains("notification-btn")
      ) {
        this.showButtonLoading(e.target);
      }
    });
  }

  showButtonLoading(button) {
    const originalText = button.textContent;
    button.innerHTML = '<span class="loading-spinner"></span>' + originalText;
    button.disabled = true;

    setTimeout(() => {
      button.innerHTML = originalText;
      button.disabled = false;
    }, 1000);
  }

  addHoverEffects() {
    // Add subtle animations to interactive elements
    const interactiveElements = document.querySelectorAll(
      "button, .chapter-btn, .class-buttons button"
    );
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.style.transform = "translateY(-2px)";
      });
      element.addEventListener("mouseleave", () => {
        element.style.transform = "translateY(0)";
      });
    });
  }

  addKeyboardNavigation() {
    // Enhanced keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && notificationSystem.currentNotification) {
        notificationSystem.closeNotification();
      }
    });
  }

  addProgressIndicators() {
    // Add progress indicators for multi-step processes
    const containers = [
      "auth-container",
      "name-container",
      "class-container",
      "chapter-container",
    ];
    containers.forEach((containerId, index) => {
      const container = document.getElementById(containerId);
      if (container) {
        const progress = document.createElement("div");
        progress.className = "progress-indicator";
        progress.innerHTML = `Step ${index + 1} of ${containers.length}`;
        container.insertBefore(progress, container.firstChild);
      }
    });
  }
}

// Initialize UI enhancements
const uiEnhancements = new UIEnhancements();

// Enhanced App Functions
function enhancedLogin() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (!email || !password) {
    notificationSystem.showError("Please fill in all fields");
    return;
  }

  // Show loading
  const loginBtn = document.querySelector("#login-form button");
  uiEnhancements.showButtonLoading(loginBtn);

  // Call original login function
  login();
}

function enhancedSignup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (!email || !password || !confirmPassword) {
    notificationSystem.showError("Please fill in all fields");
    return;
  }

  if (password !== confirmPassword) {
    notificationSystem.showError("Passwords do not match");
    return;
  }

  if (password.length < 6) {
    notificationSystem.showError("Password must be at least 6 characters long");
    return;
  }

  // Show loading
  const signupBtn = document.querySelector("#signup-form button");
  uiEnhancements.showButtonLoading(signupBtn);

  // Call original signup function
  signup();
}

function showTestInstructions() {
  notificationSystem.showTestInstructions();
}

function showLogoutConfirmation() {
  notificationSystem.showConfirm(
    "Are you sure you want to logout? Your progress will be saved.",
    () => logout(),
    "Confirm Logout"
  );
}

// Update existing functions to use enhanced notifications
function showSuccessMessage(message) {
  notificationSystem.showSuccess(message);
}

function showErrorMessage(message) {
  notificationSystem.showError(message);
}

// Mobile-specific enhancements
if (window.innerWidth <= 768) {
  // Add mobile-specific features
  document.addEventListener("DOMContentLoaded", () => {
    // Add touch feedback
    document.body.style.webkitTapHighlightColor = "rgba(24, 119, 242, 0.2)";

    // Prevent zoom on input focus (iOS)
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.style.fontSize = "16px";
      });
    });
  });
}

// Export for use in other files
window.notificationSystem = notificationSystem;
window.uiEnhancements = uiEnhancements;
