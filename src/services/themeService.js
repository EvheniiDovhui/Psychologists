// themeService.js
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../services/firebaseConfig'

const MAX_RETRIES = 3

export const getUserTheme = async userId => {
	for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
		try {
			const userDocRef = doc(db, 'users', userId)
			const userSnap = await getDoc(userDocRef)

			if (userSnap.exists()) {
				const theme = userSnap.data().theme
				localStorage.setItem('theme', theme)
				return theme
			} else {
				console.log('Немає такого документа!')
				return 'light'
			}
		} catch (error) {
			console.error(error)
			if (attempt === MAX_RETRIES) {
				const localTheme = localStorage.getItem('theme')
				if (localTheme) {
					return localTheme
				}
				return 'light'
			}
		}
	}
}

export const setUserTheme = async (userId, theme) => {
	for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
		try {
			const userDocRef = doc(db, 'users', userId)
			await setDoc(userDocRef, { theme }, { merge: true })
			localStorage.setItem('theme', theme)
			break
		} catch (error) {
			console.error(error)
			if (attempt === MAX_RETRIES) {
				localStorage.setItem('theme', theme)
			}
		}
	}
}
