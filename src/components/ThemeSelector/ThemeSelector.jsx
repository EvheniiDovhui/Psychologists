import React from 'react'

const ThemeSelector = ({ theme, setTheme }) => {
	const handleThemeChange = event => {
		setTheme(event.target.value)
	}

	return (
		<div>
			<label htmlFor='theme-select'>Theme:</label>
			<select id='theme-select' value={theme} onChange={handleThemeChange}>
				<option value='light'>Light</option>
				<option value='dark'>Dark</option>
				<option value='blue'>Blue</option>
				<option value='green'>Green</option>
				<option value='red'>Orange</option>
			</select>
		</div>
	)
}

export default ThemeSelector
