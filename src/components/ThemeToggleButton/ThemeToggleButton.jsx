import React from 'react'

const ThemeToggleButton = ({ theme, themeToggler }) => {
	return (
		<div>
			<button className='theme-toggle-button' onClick={themeToggler}>
				Змінити тему
			</button>
			<h1>Поточна тема: {theme}</h1>
		</div>
	)
}

export default ThemeToggleButton
