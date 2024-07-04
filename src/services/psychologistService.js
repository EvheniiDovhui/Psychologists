import { getDatabase, ref, get } from 'firebase/database'

export const getPsychologists = async () => {
	const db = getDatabase()
	const dbRef = ref(db, '/')
	try {
		const snapshot = await get(dbRef)
		if (snapshot.exists()) {
			const data = snapshot.val()
			return Object.values(data)
		} else {
			console.log('No data available')
			return []
		}
	} catch (error) {
		console.error('Error getting data:', error)
		return []
	}
}
