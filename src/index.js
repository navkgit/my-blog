import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlPhACBDQvL-JEkmi0tq7y2T0yLLTfSos",
  authDomain: "my-react-blog-d5151.firebaseapp.com",
  projectId: "my-react-blog-d5151",
  storageBucket: "my-react-blog-d5151.appspot.com",
  messagingSenderId: "179163981886",
  appId: "1:179163981886:web:222784ec861f31b211c96f"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
