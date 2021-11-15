import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBCnLhifwxG1uhkjQJi3FBuLmsV22BPQiI',
  authDomain: 'uber-nextjs-areasflavio.firebaseapp.com',
  projectId: 'uber-nextjs-areasflavio',
  storageBucket: 'uber-nextjs-areasflavio.appspot.com',
  messagingSenderId: '921808677291',
  appId: '1:921808677291:web:5805e1e0bbdb6c93664aee',
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, auth, provider };
