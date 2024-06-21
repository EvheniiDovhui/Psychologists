import React from 'react'
import {
	ThemeSelectorContainer,
	ThemeLabel,
	ThemeSelect,
	ThemeOption,
} from './ThemeSelectorStyle'

const ThemeSelector = ({ theme, setTheme }) => {
	const handleThemeChange = event => {
		setTheme(event.target.value)
	}

	return (
		<ThemeSelectorContainer>
			<ThemeLabel htmlFor='theme-select'>Theme:</ThemeLabel>
			<ThemeSelect id='theme-select' value={theme} onChange={handleThemeChange}>
				<ThemeOption value='light'>Light</ThemeOption>
				<ThemeOption value='dark'>Dark</ThemeOption>
				<ThemeOption value='blue'>Blue</ThemeOption>
				<ThemeOption value='green'>Green</ThemeOption>
				<ThemeOption value='red'>Orange</ThemeOption>
			</ThemeSelect>
		</ThemeSelectorContainer>
	)
}

export default ThemeSelector
