// Admin Access Control
class AdminAuth {
  constructor() {
    this.adminData = null;
    this.init();
  }

  async init() {
    await this.loadAdminData();
    // Check admin access on auth state change
    if (typeof firebase !== "undefined") {
      firebase.auth().onAuthStateChanged((user) => {
        this.checkAdminAccess(user);
      });
    }
  }

  async loadAdminData() {
    try {
      const adminDoc = await firebase.firestore().collection('admin').doc('credentials').get();
      if (adminDoc.exists) {
        this.adminData = adminDoc.data();
      } else {
        // Create default admin document if it doesn't exist
        await this.createDefaultAdmin();
      }
    } catch (error) {
      console.error('Error loading admin data:', error);
      // Fallback to default values
      this.adminData = {
        emails: ['azharuddin247@gmail.com'],
        password: 'Admin@2024'
      };
    }
  }

  async createDefaultAdmin() {
    const defaultAdmin = {
      emails: ['azharuddin247@gmail.com'],
      password: 'Admin@2024',
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    try {
      await firebase.firestore().collection('admin').doc('credentials').set(defaultAdmin);
      this.adminData = defaultAdmin;
    } catch (error) {
      console.error('Error creating admin document:', error);
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
    return this.adminData?.emails?.includes(email?.toLowerCase()) || false;
  }

  async verifyAdminAccess() {
    const user = firebase.auth().currentUser;
    
    // Reload admin data to get latest credentials
    await this.loadAdminData();

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

    if (enteredPassword === this.adminData?.password) {
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
