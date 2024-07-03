import styled from 'styled-components'

export const ThemeSelectorContainer = styled.div`
	display: flex;
	margin-right: 8px;
	align-items: center;
`

export const ThemeLabel = styled.label`
	margin-right: 8px;
	font-weight: bold;
	color: ${({ theme }) => theme.text};
	cursor: pointer;
	tabindex: 0;
`

export const ThemeSelect = styled.select`
	cursor: pointer;
	padding: 8px 16px;
	font-size: 16px;
	border: 1px solid ${({ theme }) => theme.borderColor};
	border-radius: 50px;
	outline: none;
	background-color: ${({ theme }) => theme.selectBackground};
	color: ${({ theme }) => theme.text};
	transition: border-color 0.3s, background-color 0.3s, color 0.3s;

	&:hover {
		border-color: ${({ theme }) => theme.hoverBorderColor};
		background-color: ${({ theme }) => theme.buttonBackgroundHover};
		color: ${({ theme }) => theme.background};
	}
	&:focus {
		outline: none;
		border-color: ${({ theme }) => theme.borderColorOne};
	}
`

export const ThemeOption = styled.option`
	padding: 8px 16px;
	background-color: ${({ theme }) => theme.optionBackground};
	color: ${({ theme }) => theme.text};
	&:hover {
		background-color: ${({ theme }) => theme.hoverBorderColor};
	}
`
