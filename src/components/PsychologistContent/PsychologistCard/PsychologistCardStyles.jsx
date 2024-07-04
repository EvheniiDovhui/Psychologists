import styled from 'styled-components'

export const PsychologistItem = styled.li`
	display: flex;
	border-radius: 30px;
	background-color: ${({ theme }) => theme.background};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	padding: 24px;
	width: 100%;
`

export const AvatarContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 120px;
	max-width: 120px;
	height: 120px;
	border: 1px solid ${({ theme }) => theme.borderColor};
	border-radius: 30px;
	overflow: hidden;
	margin-right: 16px;
`

export const Avatar = styled.img`
	width: 80%;
	border-radius: 20px;
	object-fit: cover;
`

export const OnlineStatus = styled.div`
	position: absolute;
	top: 10px;
	right: 14px;
	width: 10px;
	height: 10px;
	background-color: #4caf50;
	border: 3px solid ${({ theme }) => theme.background};
	border-radius: 50%;
`
