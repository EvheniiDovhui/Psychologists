import '../styles/App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyles } from '../themes/globalStyles'
import AppRoutes from '../routes/AppRoutes'
import { AuthProvider } from '../context/AuthContext/AuthContext'
import { ThemeProvider } from '../context/ThemeContext/ThemeContext'

function App() {
	return (
		<AuthProvider>
			<ThemeProvider>
				<GlobalStyles />
				<Router>
					<AppRoutes />
				</Router>
			</ThemeProvider>
		</AuthProvider>
	)
}

export default App
