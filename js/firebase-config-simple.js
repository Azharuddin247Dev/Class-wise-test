// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyBwL1GY8Fu4eK4e1LwBrDNspZi-Y87rVxA",
// //   authDomain: "class-wise-test-edd7d.firebaseapp.com",
// //   projectId: "class-wise-test-edd7d",
// //   storageBucket: "class-wise-test-edd7d.firebasestorage.app",
// //   messagingSenderId: "552170463403",
// //   appId: "1:552170463403:web:b7952029559bbc1d5bd7ee",
// //   measurementId: "G-KYT3RVJ39W"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);




// // Firebase configuration - Replace with your project config
// const firebaseConfig = {
//   apiKey: "AIzaSyBwL1GY8Fu4eK4e1LwBrDNspZi-Y87rVxA",
//   authDomain: "class-wise-test-edd7d.firebaseapp.com",
//   projectId: "class-wise-test-edd7d",
//   storageBucket: "class-wise-test-edd7d.firebasestorage.app",
//   messagingSenderId: "552170463403",
//   appId: "1:552170463403:web:b7952029559bbc1d5bd7ee",
//   measurementId: "G-KYT3RVJ39W",
// };

// // Initialize Firebase with error handling
// try {
//   firebase.initializeApp(firebaseConfig);

//   // Initialize Authentication and Firestore
//   const auth = firebase.auth();
//   const db = firebase.firestore();

//   // Export for use in other files
//   window.auth = auth;
//   window.db = db;

//   console.log("Firebase initialized - Data will be saved to your private database");
// } catch (error) {
//   console.warn("Firebase initialization failed, using offline mode:", error);

//   // Create mock auth and db objects for offline functionality
//   window.auth = {
//     createUserWithEmailAndPassword: () =>
//       Promise.resolve({
//         user: { uid: "demo-user", email: "demo@example.com" },
//       }),
//     signInWithEmailAndPassword: () =>
//       Promise.resolve({
//         user: { uid: "demo-user", email: "demo@example.com" },
//       }),
//     signOut: () => Promise.resolve(),
//     onAuthStateChanged: (callback) => {
//       setTimeout(() => callback(null), 100);
//       return () => {};
//     },
//   };

//   window.db = {
//     collection: () => ({
//       add: () => Promise.resolve({ id: "demo-doc-id" }),
//       orderBy: () => ({
//         orderBy: () => ({
//           limit: () => ({
//             get: () => Promise.resolve({ forEach: () => {} }),
//           }),
//         }),
//       }),
//       where: () => ({
//         where: () => ({
//           orderBy: () => ({
//             orderBy: () => ({
//               limit: () => ({
//                 get: () => Promise.resolve({ forEach: () => {} }),
//               }),
//             }),
//           }),
//         }),
//       }),
//     }),
//   };

//   // Add Firebase field value for offline mode
//   window.firebase = {
//     firestore: {
//       FieldValue: {
//         serverTimestamp: () => new Date(),
//       },
//     },
//   };
// }


// Add this import statement at the top of your file
import 'firebase/performance'; // Import the Performance Monitoring module

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
  // Ensure the core Firebase app is initialized first
  const app = firebase.initializeApp(firebaseConfig);

  // Initialize Authentication and Firestore
  const auth = firebase.auth();
  const db = firebase.firestore();

  // Initialize Firebase Performance Monitoring
  // This line needs to be added after firebase.initializeApp(firebaseConfig);
  const perf = firebase.performance();

  // Export for use in other files (optional, but good practice if you need 'perf' elsewhere)
  window.auth = auth;
  window.db = db;
  window.perf = perf; // Export the performance instance as well

  console.log("Firebase initialized - Data will be saved to your private database");
} catch (error) {
  console.warn("Firebase initialization failed, using offline mode:", error);

  // ... (your existing mock objects for offline functionality) ...
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
    // You might also want to mock performance here if you intend to use custom traces in offline mode,
    // though for basic offline functionality, it's often not critical.
    performance: () => ({
      trace: (name) => ({
        start: () => {},
        stop: () => {},
        putAttribute: () => {},
        incrementMetric: () => {}
      })
    })
  };
}
