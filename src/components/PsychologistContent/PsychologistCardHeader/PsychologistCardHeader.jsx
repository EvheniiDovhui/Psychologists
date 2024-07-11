import React, { useState, useEffect } from 'react'
import {
	IconFavoritesStyled,
	IconNoFavoritesStyled,
	PsCardHeader,
	PsDecoratingContainer,
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
import {
	addFavorite,
	removeFavorite,
	getFavorites,
} from '../../../services/favoritesService'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const PsychologistCardHeader = ({ psychologist }) => {
	const [isFavorite, setIsFavorite] = useState(false)
	const [userId, setUserId] = useState(null)

	useEffect(() => {
		const auth = getAuth()
		const unsubscribe = onAuthStateChanged(auth, async user => {
			if (user) {
				setUserId(user.uid)
				const favorites = await getFavorites(user.uid)
				setIsFavorite(favorites.includes(psychologist.name))
			} else {
				setUserId(null)
			}
		})
		return () => unsubscribe()
	}, [psychologist.name])

	const toggleFavorite = async () => {
		if (!userId) {
			console.error('User is not authenticated')
			return
		}

		if (!psychologist.name) {
			console.error('Psychologist name is undefined')
			return
		}

		try {
			if (!isFavorite) {
				await addFavorite(userId, psychologist.name)
			} else {
				await removeFavorite(userId, psychologist.name)
			}
			setIsFavorite(prevState => !prevState)
		} catch (error) {
			console.error('Error toggling favorite:', error)
		}
	}

	if (!psychologist) {
		return null
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
				<PsDecoratingContainer> | </PsDecoratingContainer>
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
