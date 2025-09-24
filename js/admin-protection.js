// Admin Access Control
class AdminAuth {
  constructor() {
    this.adminEmails = ["azharuddin.sk24@gmail.com"]; // Add your admin email here
    this.adminPassword = "123@azh1"; // Change this to your secure password
    this.init();
  }

  init() {
    // Check admin access on auth state change
    if (typeof firebase !== "undefined") {
      firebase.auth().onAuthStateChanged((user) => {
        this.checkAdminAccess(user);
      });
    }
  }

  checkAdminAccess(user) {
    const adminLink = document.getElementById("admin-nav-link");
    if (adminLink) {
      if (user && this.isAdminEmail(user.email)) {
        adminLink.style.display = "inline-block";
      } else {
        adminLink.style.display = "none";
      }
    }
  }

  isAdminEmail(email) {
    return this.adminEmails.includes(email?.toLowerCase());
  }

  async verifyAdminAccess() {
    const user = firebase.auth().currentUser;

    if (!user || !this.isAdminEmail(user.email)) {
      notificationSystem.showError("Access denied. Admin privileges required.");
      return false;
    }

    return new Promise((resolve) => {
      notificationSystem.showNotification({
        type: "admin-verify",
        title: "Admin Access Verification 🔐",
        message: "Please enter the admin password to access the admin panel:",
        icon: "🔑",
        actions: [
          {
            text: "Verify",
            action: "primary",
            callback: () => this.handlePasswordVerification(resolve),
          },
          {
            text: "Cancel",
            action: "secondary",
            callback: () => {
              notificationSystem.closeNotification();
              resolve(false);
            },
          },
        ],
      });

      // Add password input to the notification
      setTimeout(() => {
        const modal = document.querySelector(".notification-modal");
        if (modal) {
          const passwordInput = document.createElement("input");
          passwordInput.type = "password";
          passwordInput.id = "admin-password-input";
          passwordInput.placeholder = "Enter admin password";
          passwordInput.style.cssText = `
                        width: 100%;
                        padding: 12px;
                        margin: 16px 0;
                        border: 1px solid #dadde1;
                        border-radius: 6px;
                        font-size: 14px;
                        background: #f5f6f7;
                    `;

          const message = modal.querySelector(".notification-message");
          message.appendChild(passwordInput);
          passwordInput.focus();

          // Allow Enter key to verify
          passwordInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
              this.handlePasswordVerification(resolve);
            }
          });
        }
      }, 100);
    });
  }

  handlePasswordVerification(resolve) {
    const passwordInput = document.getElementById("admin-password-input");
    const enteredPassword = passwordInput?.value;

    if (enteredPassword === this.adminPassword) {
      notificationSystem.closeNotification();
      notificationSystem.showSuccess(
        "Admin access granted! Welcome to the admin panel."
      );
      resolve(true);
    } else {
      notificationSystem.showError("Incorrect password. Access denied.");
      resolve(false);
    }
  }

  // Override admin link click
  setupAdminLinkProtection() {
    const adminLink = document.getElementById("admin-nav-link");
    if (adminLink) {
      adminLink.addEventListener("click", async (e) => {
        e.preventDefault();
        const hasAccess = await this.verifyAdminAccess();
        if (hasAccess) {
          window.location.href = "admin.html";
        }
      });
    }
  }
}

// Initialize admin auth
const adminAuth = new AdminAuth();

// Setup admin link protection when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  adminAuth.setupAdminLinkProtection();
});

// Export for use in other files
window.adminAuth = adminAuth;
