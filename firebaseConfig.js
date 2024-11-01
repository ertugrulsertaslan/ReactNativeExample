// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbedfmuAmD9u9PxLRVWye9_kItz2UVc8s",
  authDomain: "test-app-5695e.firebaseapp.com",
  projectId: "test-app-5695e",
  storageBucket: "test-app-5695e.firebasestorage.app",
  messagingSenderId: "1006196389575",
  appId: "1:1006196389575:web:02e1ba12f888db498db0e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export { app, auth };
