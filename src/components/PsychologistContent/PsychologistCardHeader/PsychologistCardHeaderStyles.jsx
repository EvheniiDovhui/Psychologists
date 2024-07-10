import styled from 'styled-components'
import { IconNoFavorites, IconStarFull } from '../../../assets/Icon'

export const PsCardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 24px;
`

export const PsSpecialtyNameContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`

export const PsSpecialty = styled.p`
	font-size: 1rem;
	font-weight: 500;
	color: #333;
	margin: 0;
`

export const PsName = styled.h2`
	font-size: 1.5rem;
	font-weight: 500;
	color: #333;
	margin: 0;
`

export const PsRatingPriceContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`
export const PsIconStarFull = styled(IconStarFull)`
	width: 16px;
	height: 16px;
	margin-right: 0.5rem;
	fill: #ffc531;
	stroke: #ffc531;
`

export const PsRating = styled.p`
	display: flex;
	font-size: 1rem;
	font-weight: 500;
	align-items: center;
	color: #333;
`

export const PsRatingSpan = styled.span`
	font-size: 1rem;
	font-weight: 800;
	color: var(--color-green-price);
`

export const PsPrice = styled.p`
	display: flex;
	font-size: 1rem;
	align-items: center;
	font-weight: 500;
	color: #333;
`

export const PsFavBtn = styled.button`
	background: none;
	border: none;
	cursor: pointer;

	&:focus {
		outline: 1px solid ${({ theme }) => theme.borderColor};
	}
`

export const IconNoFavoritesStyled = styled(IconNoFavorites)`
	width: 24px;
	height: 24px;
	fill: transparent;
	stroke: ${({ theme }) => theme.borderColor};

	transition: fill 0.3s ease-in-out, stroke 0.3s ease-in-out;

	&:hover,
	&:focus {
		fill: ${({ theme }) => theme.logoHeaderHover};
		stroke: ${({ theme }) => theme.logoHeaderHover};
	}
`

export const IconFavoritesStyled = styled(IconNoFavorites)`
	width: 24px;
	height: 24px;
	fill: ${({ theme }) => theme.logoHeader};
	stroke: ${({ theme }) => theme.logoHeader};

	transition: fill 0.3s ease-in-out, stroke 0.3s ease-in-out;

	&:hover,
	&:focus {
		fill: ${({ theme }) => theme.logoHeaderHover};
		stroke: ${({ theme }) => theme.logoHeaderHover};
	}
`
