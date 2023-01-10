import {initializeApp} from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyBuL71CtGzylOdzwwc8mk-RirobsP6BhiA',
	authDomain: 'chatapp-a808f.firebaseapp.com',
	projectId: 'chatapp-a808f',
	storageBucket: 'chatapp-a808f.appspot.com',
	messagingSenderId: '447943089773',
	appId: '1:447943089773:web:10e5db83d4694a3cdaa964',
};

export const app = initializeApp(firebaseConfig);
