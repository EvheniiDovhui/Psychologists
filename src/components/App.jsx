import '../styles/App.css'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {
	lightTheme,
	darkTheme,
	blueTheme,
	greenTheme,
	redTheme,
} from '../themes/themes'
import { GlobalStyles } from '../themes/globalStyles'
import AppRoutes from '../routes/AppRoutes'
import { AuthProvider } from '../context/AuthContext/AuthContext'
import ThemeToggleButton from './ThemeToggleButton/ThemeToggleButton'

function App() {
	const [theme, setTheme] = useState('light')

	const themeToggler = () => {
		if (theme === 'light') setTheme('dark')
		else if (theme === 'dark') setTheme('blue')
		else if (theme === 'blue') setTheme('green')
		else if (theme === 'green') setTheme('red')
		else setTheme('light')
	}

	return (
		<AuthProvider>
			<ThemeProvider
				theme={
					theme === 'light'
						? lightTheme
						: theme === 'dark'
						? darkTheme
						: theme === 'blue'
						? blueTheme
						: theme === 'green'
						? greenTheme
						: redTheme
				}
			>
				<>
					<GlobalStyles />
					<div className='app'>
						<ThemeToggleButton theme={theme} themeToggler={themeToggler} />{' '}
						<AppRoutes />
					</div>
				</>
			</ThemeProvider>
		</AuthProvider>
	)
}

export default App
