import styled from 'styled-components'

export const PsMain = styled.div``

export const PsListInfo = styled.ul`
	display: flex;
	margin-bottom: 24px;
	flex-wrap: wrap;
	gap: 10px;
`

export const PsInfo = styled.li`
	display: flex;
	align-items: baseline;
	gap: 4px;
	background-color: #e9ecef;
	padding: 12px;
	border-radius: 24px;
`

export const PsTitle = styled.h2`
	font-size: 0.9em;
	font-weight: 500;
	color: #8a8a89;
`

export const PsText = styled.p`
	color: #191a15;
	font-size: 0.9em;
	font-weight: 600;
`

export const PsTextAbout = styled.div`
	color: #8a8a89;
	font-size: 0.9em;
	font-weight: 500;
	margin-bottom: 24px;
`

export const PsButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	${'' /* margin-bottom: 24px; */}
`

export const PsButton = styled.button`
	font-size: 1.1em;
	color: #191a15;
	border: none;
	background: none;
	cursor: pointer;
	${'' /* font-weight: bold; */}

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.logoHeaderHover};
		text-decoration: underline;
		cursor: pointer;
	}
`

export const PsAppointmentButton = styled.button`
	border: none;
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

export const PsCommentList = styled.ul`
	margin-top: 24px;
`

export const PsCommentItem = styled.li`
	display: flex;
	flex-direction: column;
	gap: 10px;

	margin-bottom: 10px;
`
export const PsCommentHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`

export const PsCommentAvatar = styled.div`
	display: flex;
	width: 44px;
	height: 44px;
	background-color: #54be9630;
	color: #54be96;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
`

export const PsCommentUserInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`

export const PsCommentUser = styled.span`
	font-weight: bold;
	margin-right: 5px;
`

export const PsCommentRating = styled.div``

export const PsCommentText = styled.p`
	display: inline;
	margin: 0;
`
