// components/PsychologistContent/PsychologistCardHeader.jsx
import React, { useState } from 'react'
import {
	IconFavoritesStyled,
	IconNoFavoritesStyled,
	PsCardHeader,
	PsFavBtn,
	PsIconStarFull,
	PsName,
	PsPrice,
	PsRating,
	PsRatingPriceContainer,
	PsRatingSpan,
	PsSpecialty,
	PsSpecialtyNameContainer,
} from './PsychologistCardHeaderStyles'

const PsychologistCardHeader = ({ psychologist }) => {
	const [isFavorite, setIsFavorite] = useState(false)

	const toggleFavorite = () => {
		setIsFavorite(prevState => !prevState)
		// Тут можна додати логіку для збереження стану обраного на сервері або в локальному сховищі
	}

	return (
		<PsCardHeader>
			<PsSpecialtyNameContainer>
				<PsSpecialty>Psychologist</PsSpecialty>
				<PsName>{psychologist.name}</PsName>
			</PsSpecialtyNameContainer>
			<PsRatingPriceContainer>
				<PsRating>
					<PsIconStarFull /> Rating: {psychologist.rating}
				</PsRating>
				|
				<PsPrice>
					Price / 1 hour:
					<PsRatingSpan> {psychologist.price_per_hour}$</PsRatingSpan>
				</PsPrice>
				<PsFavBtn onClick={toggleFavorite}>
					{isFavorite ? <IconFavoritesStyled /> : <IconNoFavoritesStyled />}
				</PsFavBtn>
			</PsRatingPriceContainer>
		</PsCardHeader>
	)
}

export default PsychologistCardHeader
