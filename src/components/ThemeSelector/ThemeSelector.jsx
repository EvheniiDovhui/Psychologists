import React from 'react'
import {
	ThemeSelectorContainer,
	ThemeLabel,
	ThemeSelect,
	ThemeOption,
} from './ThemeSelectorStyle'

const ThemeSelector = ({ theme, setTheme }) => {
	const handleThemeChange = event => {
		const newTheme = event.target.value
		setTheme(newTheme) // Впевніться, що setTheme є правильною функцією
		localStorage.setItem('userTheme', newTheme) // Опціонально, для збереження теми у localStorage
	}

	return (
		<ThemeSelectorContainer>
			<ThemeLabel htmlFor='theme-select'>Theme:</ThemeLabel>
			<ThemeSelect id='theme-select' value={theme} onChange={handleThemeChange}>
				<ThemeOption value='light'>Light</ThemeOption>
				<ThemeOption value='dark'>Dark</ThemeOption>
				<ThemeOption value='blue'>Blue</ThemeOption>
				<ThemeOption value='green'>Green</ThemeOption>
				<ThemeOption value='orange'>Orange</ThemeOption>
			</ThemeSelect>
		</ThemeSelectorContainer>
	)
}

export default ThemeSelector
