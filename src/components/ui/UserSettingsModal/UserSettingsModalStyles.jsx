import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`

export const FormGroup = styled.div`
	margin-bottom: 15px;
`
export const PhotoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
`

export const AvatarContainer = styled.div`
	display: flex;
	width: 100px;
	height: 100px;
	border: 3px solid ${({ theme }) => theme.borderColorOne};
	border-radius: 50%;
	background-color: ${({ theme }) => theme.borderColorOne};
	margin-bottom: 10px;
	justify-content: center;
	align-items: center;

	&:hover {
		cursor: pointer;
	}
`
export const PhotoAvatar = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	object-fit: cover;
`

export const ButtonDelete = styled.button`
	background-color: transparent;
	color: ${({ theme }) => theme.text};
	border: none;
	cursor: pointer;
	font-size: 14px;
	transition: color 0.3s;

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.logoHeaderHover};
		text-decoration: underline;

		outline: none;
	}
`

export const SettingsTitle = styled.h2`
	margin-bottom: 10px;
	color: ${({ theme }) => theme.text};
`

export const Label = styled.label`
	display: block;
	margin-bottom: 5px;
	font-weight: bold;
	color: ${({ theme }) => theme.text};
`

export const Input = styled.input`
	width: 97%;
	padding: 8px;
	color: ${({ theme }) => theme.text};
	border: 1px solid ${({ theme }) => theme.borderColor};
	background-color: ${({ theme }) => theme.background};
	border-radius: 4px;
	font-size: 14px;

	&:hover,
	&:focus,
	&:active {
		border-color: ${({ theme }) => theme.borderColorOne};
		outline: none;
	}
`
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`

export const ButtonDeleteUser = styled.button`
	width: 150px;
	padding: 10px 20px;
	background-color: #dc3545;
	color: var(--color-white);
	border-radius: 30px;
	border: none;
	cursor: pointer;
	font-size: 14px;
	transition: background-color 0.3s;

	&:hover,
	&:focus {
		background-color: #bd2130;

		outline: none;
	}
`

export const Button = styled.button`
	padding: 10px 20px;
	width: 150px;
	background-color: ${({ theme }) => theme.buttonBackground};
	color: var(--color-white);
	border: none;
	border-radius: 30px;
	cursor: pointer;
	font-size: 14px;
	transition: background-color 0.3s;

	&:hover {
		background-color: ${({ theme }) => theme.buttonBackgroundHover};
	}
`
