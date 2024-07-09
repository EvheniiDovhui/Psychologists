import { db } from './firebaseConfig'
import {
	doc,
	updateDoc,
	arrayUnion,
	arrayRemove,
	getDoc,
} from 'firebase/firestore'

export const addFavorite = async (userId, psychologistName) => {
	const userDocRef = doc(db, 'users', userId)
	try {
		await updateDoc(userDocRef, {
			favorites: arrayUnion(psychologistName),
		})
	} catch (error) {
		console.error('Error adding favorite:', error)
		throw error
	}
	console.log('Початок функції addFavorite')
	console.log('Кінець функції addFavorite')
}

export const removeFavorite = async (userId, psychologistName) => {
	const userDocRef = doc(db, 'users', userId)
	try {
		await updateDoc(userDocRef, {
			favorites: arrayRemove(psychologistName),
		})
	} catch (error) {
		console.error('Error removing favorite:', error)
		throw error
	}
}

export const getFavorites = async userId => {
	const userDocRef = doc(db, 'users', userId)
	try {
		const userDoc = await getDoc(userDocRef)
		if (userDoc.exists()) {
			return userDoc.data().favorites || []
		} else {
			console.error('No such user document')
			return []
		}
	} catch (error) {
		console.error('Error getting favorites:', error)
		throw error
	}
}
