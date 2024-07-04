// components/PsychologistContent/PsychologistCard.jsx
import React from 'react'
import './PsychologistCard.css'
import PsychologistCardHeader from '../PsychologistCardHeader/PsychologistCardHeader'
import {
	Avatar,
	AvatarContainer,
	OnlineStatus,
	PsychologistItem,
} from './PsychologistCardStyles'

const PsychologistCard = ({ psychologist }) => {
	return (
		<PsychologistItem className='psychologist-card'>
			<AvatarContainer>
				<Avatar
					src={psychologist.avatar_url || 'https://via.placeholder.com/150'}
					alt={psychologist.name}
					className='psychologist-avatar'
				/>
				<OnlineStatus />
			</AvatarContainer>
			<div>
				<PsychologistCardHeader psychologist={psychologist} />
				<div className='psychologist-card-body'>
					<p>
						<strong>Experience:</strong> {psychologist.experience}
					</p>
					<p>
						<strong>License:</strong> {psychologist.license}
					</p>
					<p>
						<strong>Specialization:</strong> {psychologist.specialization}
					</p>
					<p>
						<strong>Initial consultation:</strong>{' '}
						{psychologist.initial_consultation}
					</p>

					<p>{psychologist.about}</p>
				</div>
			</div>
		</PsychologistItem>
	)
}

export default PsychologistCard
