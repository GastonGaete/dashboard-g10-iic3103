import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
import 'firebase/analytics';

import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initI18n } from './services';

const {
  REACT_APP_ENV_NAME,
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID,
} = process.env;

if (REACT_APP_ENV_NAME === 'production') {
  const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: `${REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${REACT_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
    projectId: `${REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: REACT_APP_FIREBASE_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
    measurementId: `G-${REACT_APP_FIREBASE_MEASUREMENT_ID}`,
  };

  firebase.initializeApp(firebaseConfig);
}

initI18n();

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
