import '../styles/App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {
	lightTheme,
	darkTheme,
	blueTheme,
	greenTheme,
	orangeTheme,
} from '../themes/themes'
import { GlobalStyles } from '../themes/globalStyles'
import AppRoutes from '../routes/AppRoutes'
import { AuthProvider } from '../context/AuthContext/AuthContext'
import Header from '../components/Header/Header'

function App() {
	const [theme, setTheme] = useState('light')

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
						: orangeTheme
				}
			>
				<>
					<GlobalStyles />
					<Router>
						<Header theme={theme} setTheme={setTheme} />
						<div className='app'>
							<AppRoutes />
						</div>
					</Router>
				</>
			</ThemeProvider>
		</AuthProvider>
	)
}

export default App
