import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBrBB-lRXKQ6RjCIyPLXgtDhLVwJ905imU',
  authDomain: 'starcoder-windtree.firebaseapp.com',
  projectId: 'starcoder-windtree',
  storageBucket: 'starcoder-windtree.appspot.com',
  messagingSenderId: '853594042040',
  appId: '1:853594042040:web:ef08bbecd943a355920e4d',
  measurementId: 'G-9L6VZ6BTTV',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth()
