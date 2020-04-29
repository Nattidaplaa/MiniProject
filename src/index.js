import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import config from './firebase/config';
import * as firebase from 'firebase';
import 'firebase/firestore';
if (firebase.apps.length === 0) {
    firebase.initializeApp(config);
}
export const firestore = firebase.firestore();
ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()