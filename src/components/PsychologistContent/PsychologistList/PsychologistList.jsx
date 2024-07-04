import React, { useEffect, useState } from 'react'
import { getPsychologists } from '../../../services/psychologistService'
import PsychologistCard from '../PsychologistCard/PsychologistCard'
import { Container } from './PsychologistListStyles'

const PsychologistList = () => {
	const [psychologists, setPsychologists] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const data = await getPsychologists()
			setPsychologists(data)
		}

		fetchData()
	}, [])

	return (
		<Container className='psychologist-list'>
			{psychologists && psychologists.length > 0 ? (
				psychologists.map((psychologist, index) => (
					<PsychologistCard key={index} psychologist={psychologist} />
				))
			) : (
				<p>No psychologists found</p>
			)}
		</Container>
	)
}

export default PsychologistList
