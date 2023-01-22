import { initializeApp } from "firebase/app";
export const firebaseConfig = {
    apiKey: "AIzaSyDhKBs-jpbGnuujnfG744NZdktuWB53v3U",
    authDomain: "uofthacks-backend.firebaseapp.com",
    databaseURL: "https://uofthacks-backend-default-rtdb.firebaseio.com",
    projectId: "uofthacks-backend",
    storageBucket: "uofthacks-backend.appspot.com",
    messagingSenderId: "801375771676",
    appId: "1:801375771676:web:976f865263588a942dd3d9",
    measurementId: "G-K8TPF27C1Y"
};

const fb = initializeApp(firebaseConfig);

export default fb;