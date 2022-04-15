// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyBQrd0ThJu0Db2pEt8NZWoHp1tvGmIqpFU",
    authDomain: "push-app-69711.firebaseapp.com",
    projectId: "push-app-69711",
    storageBucket: "push-app-69711.appspot.com",
    messagingSenderId: "876980799451",
    appId: "1:876980799451:web:135e0eec30141c9ef309fe"
  };

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});