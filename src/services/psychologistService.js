import { database } from './firebaseConfig'
import {
	ref,
	get,
	query,
	limitToFirst,
	orderByKey,
	startAfter,
} from 'firebase/database'

export const getPsychologists = async (lastKey = null) => {
	let dbRef = ref(database, '/')
	if (lastKey) {
		dbRef = query(
			dbRef,
			orderByKey(),
			startAfter(String(lastKey)),
			limitToFirst(4)
		)
	} else {
		dbRef = query(dbRef, orderByKey(), limitToFirst(4))
	}

	try {
		const snapshot = await get(dbRef)
		if (snapshot.exists()) {
			const data = snapshot.val()
			return data
				? Object.entries(data).map(([key, value]) => ({ key, ...value }))
				: []
		} else {
			console.log('No data available')
			return []
		}
	} catch (error) {
		console.error('Error getting data:', error)
		return []
	}
}
