import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import firebase from 'firebase'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDCau-Alxu0p7p-rekxrqfPi-L4rLPcqS8',
  authDomain: 'sanndbox-firebase-voting.firebaseapp.com',
  databaseURL: 'https://sanndbox-firebase-voting.firebaseio.com',
  projectId: 'sanndbox-firebase-voting',
  storageBucket: 'sanndbox-firebase-voting.appspot.com',
  messagingSenderId: '868284345723',
}
firebase.initializeApp(config)
