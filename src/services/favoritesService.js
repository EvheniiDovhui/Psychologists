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
		console.log('Successfully added favorite:', psychologistName)
	} catch (error) {
		throw error
	}
}

export const removeFavorite = async (userId, psychologistName) => {
	const userDocRef = doc(db, 'users', userId)
	try {
		await updateDoc(userDocRef, {
			favorites: arrayRemove(psychologistName),
		})
	} catch (error) {
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
			return []
		}
	} catch (error) {
		try {
			const userDocFromCache = await getDoc(userDocRef, { source: 'cache' })
			if (userDocFromCache.exists()) {
				return userDocFromCache.data().favorites || []
			}
		} catch (cacheError) {}

		throw error
	}
}
