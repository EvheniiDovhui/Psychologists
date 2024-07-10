import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import PsychologistsPage from '../pages/PsychologistsPage/PsychologistsPage'
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage'
import NotFound from '../pages/NotFound/NotFound'
import PrivateRoute from './PrivateRoute/PrivateRoute'

const AppRoutes = () => (
	<Routes>
		<Route path='/' element={<HomePage />} />
		<Route path='/psychologists' element={<PsychologistsPage />} />
		<Route
			path='/favorites'
			element={
				<PrivateRoute>
					<FavoritesPage />
				</PrivateRoute>
			}
		/>
		<Route path='*' element={<NotFound />} />
	</Routes>
)

export default AppRoutes
