// firebase-messaging-sw.js (must be at site root)
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC3vUlsn_2rUytVaYb_tFwvQEK-kE-d8Bw",
  authDomain: "swasthaindia-f97a6.firebaseapp.com",
  projectId: "swasthaindia-f97a6",
  storageBucket: "swasthaindia-f97a6.firebasestorage.app",
  messagingSenderId: "982224624069",
  appId: "1:982224624069:web:b875c17f3b53d6ac0a53ac",
  measurementId: "G-C9QC6YM8WD"
});

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Optional: customize how background notifications are shown
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "SwasthaIndia Offer";
  const options = {
    body: payload.notification?.body || "Don’t miss today’s best offer.",
    icon: '/assets/apple-touch-icon.png' // adjust to your icon path
  };
  self.registration.showNotification(title, options);
});
