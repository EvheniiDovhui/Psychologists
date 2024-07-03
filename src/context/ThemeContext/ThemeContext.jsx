import React, { createContext, useContext, useState, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import {
	lightTheme,
	darkTheme,
	blueTheme,
	greenTheme,
	orangeTheme,
} from '../../themes/themes'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		// Ініціалізація теми з localStorage або значення за замовчуванням
		return localStorage.getItem('theme') || 'light'
	})

	useEffect(() => {
		// Збереження теми в localStorage при її зміні
		localStorage.setItem('theme', theme)
	}, [theme])

	const getTheme = () => {
		switch (theme) {
			case 'dark':
				return darkTheme
			case 'blue':
				return blueTheme
			case 'green':
				return greenTheme
			case 'orange':
				return orangeTheme
			default:
				return lightTheme
		}
	}

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<StyledThemeProvider theme={getTheme()}>{children}</StyledThemeProvider>
		</ThemeContext.Provider>
	)
}
