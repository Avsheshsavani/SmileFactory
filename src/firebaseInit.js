import firebase from "firebase/app";
import "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQrd0ThJu0Db2pEt8NZWoHp1tvGmIqpFU",
    authDomain: "push-app-69711.firebaseapp.com",
    projectId: "push-app-69711",
    storageBucket: "push-app-69711.appspot.com",
    messagingSenderId: "876980799451",
    appId: "1:876980799451:web:135e0eec30141c9ef309fe"
  };
  

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });