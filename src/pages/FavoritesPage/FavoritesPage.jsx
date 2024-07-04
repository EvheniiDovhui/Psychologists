import React from 'react'
import { useAuth } from '../../context/AuthContext/AuthContext' // Правильний імпорт шляху до AuthContext
import PsychologistCard from '../../components/PsychologistContent/PsychologistCard/PsychologistCard'

const FavoritesPage = () => {
	const { currentUser } = useAuth()

	return (
		<div>
			<h2>Сторінка Обраних</h2>
			{currentUser ? (
				<div>
					<PsychologistCard />
				</div>
			) : (
				<p>Будь ласка, увійдіть, щоб переглянути обрані психологи.</p>
			)}
		</div>
	)
}

export default FavoritesPage
