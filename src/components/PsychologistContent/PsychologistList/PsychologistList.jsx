import React, { useEffect, useState } from 'react'
import { getPsychologists } from '../../../services/psychologistService'
import PsychologistCard from '../PsychologistCard/PsychologistCard'
import { Container, LoadMoreButton } from './PsychologistListStyles'
import { Loader } from '../../Loader/Loader'

const PsychologistList = () => {
	const [psychologists, setPsychologists] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [lastKey, setLastKey] = useState(null)
	const [hasMore, setHasMore] = useState(true) // Додано стан для визначення наявності більше даних

	const fetchData = async () => {
		setIsLoading(true)
		try {
			const data = await getPsychologists(lastKey)
			if (data.length > 0) {
				setLastKey(data[data.length - 1].key)
				setPsychologists(prevPsychologists => {
					const newPsychologists = data.filter(
						psychologist =>
							!prevPsychologists.some(prev => prev.key === psychologist.key)
					)
					return [...prevPsychologists, ...newPsychologists]
				})
			} else {
				setHasMore(false)
			}
		} catch (error) {
			console.error('Error fetching psychologists:', error)
		}
		setIsLoading(false)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const handleLoadMore = () => {
		fetchData()
	}

	return (
		<Container className='psychologist-list'>
			{isLoading && psychologists.length === 0 ? (
				<Loader />
			) : (
				<>
					{psychologists.map(psychologist => (
						<PsychologistCard
							key={psychologist.key}
							psychologist={psychologist}
						/>
					))}
					{isLoading ? (
						<Loader />
					) : (
						hasMore && (
							<LoadMoreButton onClick={handleLoadMore}>
								Load More
							</LoadMoreButton>
						)
					)}
				</>
			)}
		</Container>
	)
}

export default PsychologistList
