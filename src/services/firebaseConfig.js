import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
	apiKey: 'AIzaSyD7XJIrsBwhPeLMBZs3E8E5LjPC23lW4cQ',
	authDomain: 'psychologist-d260c.firebaseapp.com',
	projectId: 'psychologist-d260c',
	storageBucket: 'psychologist-d260c.appspot.com',
	messagingSenderId: '62170215010',
	appId: '1:62170215010:web:6270771407b2cb7d54973b',
	measurementId: 'G-8LSRSDBN7S',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getDatabase(app)
const analytics = getAnalytics(app)

export { app, auth, database, analytics }
