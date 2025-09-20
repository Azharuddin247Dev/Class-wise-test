// Firebase configuration - Replace with your project config
const firebaseConfig = {
  apiKey: "AIzaSyBwL1GY8Fu4eK4e1LwBrDNspZi-Y87rVxA",
  authDomain: "class-wise-test-edd7d.firebaseapp.com",
  projectId: "class-wise-test-edd7d",
  storageBucket: "class-wise-test-edd7d.firebasestorage.app",
  messagingSenderId: "552170463403",
  appId: "1:552170463403:web:b7952029559bbc1d5bd7ee",
  measurementId: "G-KYT3RVJ39W",
};

// Initialize Firebase with error handling
try {
  firebase.initializeApp(firebaseConfig);

  // Initialize Authentication and Firestore
  const auth = firebase.auth();
  const db = firebase.firestore();

  // Export for use in other files
  window.auth = auth;
  window.db = db;

  console.log("Firebase initialized - Data will be saved to your private database");
} catch (error) {
  console.warn("Firebase initialization failed, using offline mode:", error);

  // Create mock auth and db objects for offline functionality
  window.auth = {
    createUserWithEmailAndPassword: () =>
      Promise.resolve({
        user: { uid: "demo-user", email: "demo@example.com" },
      }),
    signInWithEmailAndPassword: () =>
      Promise.resolve({
        user: { uid: "demo-user", email: "demo@example.com" },
      }),
    signOut: () => Promise.resolve(),
    onAuthStateChanged: (callback) => {
      setTimeout(() => callback(null), 100);
      return () => {};
    },
  };

  window.db = {
    collection: () => ({
      add: () => Promise.resolve({ id: "demo-doc-id" }),
      orderBy: () => ({
        orderBy: () => ({
          limit: () => ({
            get: () => Promise.resolve({ forEach: () => {} }),
          }),
        }),
      }),
      where: () => ({
        where: () => ({
          orderBy: () => ({
            orderBy: () => ({
              limit: () => ({
                get: () => Promise.resolve({ forEach: () => {} }),
              }),
            }),
          }),
        }),
      }),
    }),
  };

  // Add Firebase field value for offline mode
  window.firebase = {
    firestore: {
      FieldValue: {
        serverTimestamp: () => new Date(),
      },
    },
  };
}
