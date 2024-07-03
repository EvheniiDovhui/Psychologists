// MainContentHomeStyles.js

import styled from 'styled-components'

export const MainContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
`

export const MainText = styled.div`
	width: 595px;
`

export const MainTitle = styled.h1`
	font-family: var(--font-family-bold);
	margin-bottom: 10px;
`
export const MainTitleSpan = styled.span`
	font-family: var(--font-family-semibold-italic);
	color: ${({ theme }) => theme.logoHeader};
	text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
		0.5px 0.5px 0 #000;
`

export const MainParagraph = styled.p`
	font-family: var(--font-family-medium);
	width: 80%;
	font-size: 0.8em;
	margin-bottom: 20px;
`

export const MainLink = styled.a`
	display: inline-block;
	background-color: ${({ theme }) => theme.buttonBackground};
	color: #fff;
	padding: 10px 20px;
	text-decoration: none;
	border-radius: 30px;
	font-size: 1.2em;
	cursor: pointer;
	transition: background-color 0.3s ease-in-out;
	&:hover,
	&:focus {
		background-color: ${({ theme }) => theme.buttonBackgroundHover};
	}
`

export const MainImageContainer = styled.div`
	text-align: center;
`

export const MainImage = styled.img`
	width: 100%;
	max-width: 400px;
	height: auto;
	border-radius: 10px;
`
