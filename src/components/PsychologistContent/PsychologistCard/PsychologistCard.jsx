// components/PsychologistContent/PsychologistCard.jsx
import React from 'react'
import './PsychologistCard.css'
import PsychologistCardHeader from '../PsychologistCardHeader/PsychologistCardHeader'
import {
	Avatar,
	AvatarContainer,
	OnlineStatus,
	PsychologistInfo,
	PsychologistItem,
} from './PsychologistCardStyles'
import PsychologistCardMain from '../PsychologistCardMain/PsychologistCardMain'

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
			<PsychologistInfo>
				<PsychologistCardHeader psychologist={psychologist} />
				<PsychologistCardMain psychologist={psychologist} />
			</PsychologistInfo>
		</PsychologistItem>
	)
}

export default PsychologistCard
