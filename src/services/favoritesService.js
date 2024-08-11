import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	updateDoc,
	arrayUnion,
	arrayRemove,
} from 'firebase/firestore'

const firestore = getFirestore()

export const addFavorite = async (userId, psychologistKey) => {
	const userDocRef = doc(firestore, 'users', userId)
	try {
		const userDoc = await getDoc(userDocRef)
		if (userDoc.exists()) {
			console.log(`Adding ${psychologistKey} to favorites for user ${userId}`)
			await updateDoc(userDocRef, {
				favorites: arrayUnion(psychologistKey.trim().toLowerCase()),
			})
		} else {
			console.log(
				`Creating new document for user ${userId} and adding ${psychologistKey} to favorites`
			)
			await setDoc(userDocRef, {
				favorites: [psychologistKey.trim().toLowerCase()],
			})
		}
	} catch (error) {
		console.error('Error adding favorite:', error)
	}
}

export const removeFavorite = async (userId, psychologistKey) => {
	const userDocRef = doc(firestore, 'users', userId)
	try {
		const userDoc = await getDoc(userDocRef)
		if (userDoc.exists()) {
			console.log(
				`Removing ${psychologistKey} from favorites for user ${userId}`
			)
			await updateDoc(userDocRef, {
				favorites: arrayRemove(psychologistKey.trim().toLowerCase()),
			})
		} else {
			console.error('Document does not exist, cannot remove favorite')
		}
	} catch (error) {
		console.error('Error removing favorite:', error)
	}
}

export const isFavoritePsychologist = async (userId, psychologistKey) => {
	const userDocRef = doc(firestore, 'users', userId)
	try {
		const userDoc = await getDoc(userDocRef)
		if (userDoc.exists()) {
			const userData = userDoc.data()
			if (userData.favorites && Array.isArray(userData.favorites)) {
				return userData.favorites.includes(psychologistKey)
			}
		}
		return false
	} catch (error) {
		console.error('Error checking favorite:', error)
		return false
	}
}

export const getFavoritePsychologists = async userId => {
	const userDocRef = doc(firestore, 'users', userId)
	try {
		const userDoc = await getDoc(userDocRef)
		if (userDoc.exists()) {
			const userData = userDoc.data()
			return userData.favorites || []
		}
		return []
	} catch (error) {
		console.error('Error getting favorite psychologists:', error)
		return []
	}
}
