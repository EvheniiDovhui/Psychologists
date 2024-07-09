import styled from 'styled-components'

export const MainContainer = styled.section`
	display: flex;
	max-width: 1200px;
	margin: 0 auto;
	justify-content: space-between;
	align-items: center;
	padding: 20px;

	@media (max-width: 1200px) {
		${'' /* flex-direction: column-reverse; */}
		padding: 10px;
	}

	@media (max-width: 767.98px) {
		flex-direction: column-reverse;
		padding: 5px;
	}

	@media (max-width: 375px) {
		align-items: flex-end;
	}
`

export const MainTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 80px;

	@media (max-width: 1200px) {
		gap: 40px;
	}

	@media (max-width: 768px) {
		gap: 20px;
	}
`

export const MainText = styled.div`
	width: 595px;

	@media (max-width: 1200px) {
		width: 100%;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
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

	@media (max-width: 1200px) {
		width: 100%;
		font-size: 1em;
	}

	@media (max-width: 768px) {
		width: 100%;
		font-size: 1.2em;
	}
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

	@media (max-width: 1200px) {
		font-size: 1em;
		padding: 8px 16px;
	}

	@media (max-width: 768px) {
		font-size: 0.8em;
		padding: 6px 12px;
	}
`

export const ImageAndElementsContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const MainImageContainer = styled.div`
	text-align: center;
	@media (max-width: 768px) {
		margin-bottom: 20px;
	}
`

export const MainImage = styled.img`
	width: 100%;
	max-width: 464px;
	height: auto;
	border-radius: 10px;

	@media (max-width: 1200px) {
		max-width: 300px;
	}

	@media (max-width: 767.98px) {
		max-width: 200px;
	}
`

export const NewElementContainer = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	background-color: #fff;
	border-radius: 10px;
	padding: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

	@media (max-width: 1200px) {
		padding: 8px;
		border-radius: 8px;
	}

	@media (max-width: 768px) {
		padding: 6px;
		border-radius: 6px;
	}
`

export const NewElementText = styled.div`
	margin-left: 10px;
`

export const NewElementTitle = styled.div`
	font-size: 1rem;
	font-weight: bold;

	@media (max-width: 1200px) {
		font-size: 0.9rem;
	}

	@media (max-width: 768px) {
		font-size: 0.8rem;
	}
`

export const NewElementSubtitle = styled.div`
	font-size: 2rem;

	@media (max-width: 1200px) {
		font-size: 1.5rem;
	}

	@media (max-width: 768px) {
		font-size: 1.2rem;
	}
`

export const NewElementIcon = styled.div`
	display: flex;
	font-size: 2rem;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	color: #fff;

	@media (max-width: 1200px) {
		font-size: 1.5rem;
		border-radius: 8px;
	}

	@media (max-width: 768px) {
		font-size: 1.2rem;
		border-radius: 6px;
	}
`

export const NewElementIcon1 = styled.div`
	display: flex;
	font-size: 2rem;
	width: 40px;
	height: 40px;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	color: ${({ theme }) => theme.buttonBackground};

	@media (max-width: 1200px) {
		font-size: 1.5rem;
		width: 30px;
		height: 30px;
		border-radius: 8px;
	}

	@media (max-width: 768px) {
		font-size: 1.2rem;
		width: 20px;
		height: 20px;
		border-radius: 6px;
	}
`

export const NewElement1 = styled(NewElementContainer)`
	padding: 20px;
	border-radius: 20px;
	color: #fff;
	top: 80%;
	background-color: ${({ theme }) => theme.buttonBackground};
	transform: translate(-50%, -50%);

	@media (max-width: 1200px) {
		padding: 16px;
		border-radius: 16px;
	}

	@media (max-width: 768px) {
		padding: 12px;
		border-radius: 12px;
	}
`

export const NewElement2 = styled(NewElementContainer)`
	width: 40px;
	height: 40px;
	background-color: #4535af;
	align-items: center;
	justify-content: center;
	top: 35%;
	left: -10%;
	transform: rotate(-10deg);

	@media (max-width: 1200px) {
		width: 30px;
		height: 30px;
	}

	@media (max-width: 768px) {
		width: 20px;
		height: 20px;
	}
`

export const NewElement3 = styled(NewElementContainer)`
	width: 48px;
	height: 48px;
	background-color: #fbc75e;
	align-items: center;
	justify-content: center;
	top: 10%;
	right: -10%;
	transform: rotate(10deg);

	@media (max-width: 1200px) {
		width: 36px;
		height: 36px;
	}

	@media (max-width: 768px) {
		width: 24px;
		height: 24px;
	}
`
