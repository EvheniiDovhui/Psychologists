import {
	getFirestore,
	doc,
	getDoc,
	updateDoc,
	arrayUnion,
	arrayRemove,
} from 'firebase/firestore'

const firestore = getFirestore()

export const addFavorite = async (userId, psychologistKey) => {
	const userDocRef = doc(firestore, 'users', userId)
	await updateDoc(userDocRef, {
		favorites: arrayUnion(psychologistKey),
	})
}

export const removeFavorite = async (userId, psychologistKey) => {
	const userDocRef = doc(firestore, 'users', userId)
	await updateDoc(userDocRef, {
		favorites: arrayRemove(psychologistKey),
	})
}

export const isFavoritePsychologist = async (userId, psychologistKey) => {
	const userDocRef = doc(firestore, 'users', userId)
	const userDoc = await getDoc(userDocRef)
	const userData = userDoc.data()
	return userData.favorites.includes(psychologistKey)
}

export const getFavoritePsychologists = async userId => {
	const userDocRef = doc(firestore, 'users', userId)
	const userDoc = await getDoc(userDocRef)
	const userData = userDoc.data()
	return userData.favorites || []
}
