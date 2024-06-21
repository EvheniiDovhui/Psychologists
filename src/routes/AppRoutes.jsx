import React from 'react'
import { Routes, Route } from 'react-router-dom'

import PrivateRoute from '../components/PrivateRoute/PrivateRoute'
import HomePage from '../pages/HomePage/HomePage'
import PsychologistsPage from '../pages/PsychologistsPage/PsychologistsPage'
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'

const AppRoutes = () => (
	<Routes>
		<Route path='/' element={<HomePage />} />
		<Route path='/login' element={<LoginPage />} />
		<Route path='/register' element={<RegistrationPage />} />
		<Route path='/psychologists' element={<PsychologistsPage />} />
		<Route
			path='/favorites'
			element={
				<PrivateRoute>
					<FavoritesPage />
				</PrivateRoute>
			}
		/>
	</Routes>
)

export default AppRoutes
