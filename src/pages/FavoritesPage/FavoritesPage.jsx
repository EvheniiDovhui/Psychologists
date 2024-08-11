import React, { useState, useEffect } from 'react'
import PsychologistCard from '../../components/PsychologistContent/PsychologistCard/PsychologistCard'
import { Container } from './FavoritesPageStyles'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getPsychologists } from '../../services/psychologistService'
import { getFavoritePsychologists } from '../../services/favoritesService'
import Header from '../../components/Header/Header'
import { Modal } from '../../components/ui/Modal'
import useModal from '../../hooks/useModal'
import LoginForm from '../../components/ui/ModalForm/LoginForm'
import RegistrationForm from '../../components/ui/ModalForm/RegistrationForm'
import { useTheme } from '../../context/ThemeContext/ThemeContext'

const FavoritesPage = () => {
	const { theme, setTheme } = useTheme()
	const [user, setUser] = useState(null)
	const [allPsychologists, setAllPsychologists] = useState([]) // Всі психологи
	const [favorites, setFavorites] = useState([])
	const [isLoginModalOpen, setLoginModalOpen] = useState(false)
	const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false)

	const openLoginModal = () => setLoginModalOpen(true)
	const closeLoginModal = () => setLoginModalOpen(false)

	const openRegistrationModal = () => setRegistrationModalOpen(true)
	const closeRegistrationModal = () => setRegistrationModalOpen(false)

	useEffect(() => {
		const fetchPsychologists = async () => {
			const data = await getPsychologists()
			setAllPsychologists(data)
		}
		fetchPsychologists()
	}, [])

	useEffect(() => {
		const auth = getAuth()
		const unsubscribe = onAuthStateChanged(auth, async user => {
			if (user) {
				setUser(user)
				const favoriteKeys = await getFavoritePsychologists(user.uid)
				console.log('Loaded favorites:', favoriteKeys)
				setFavorites(favoriteKeys)
			} else {
				setUser(null)
				setFavorites([])
			}
		})
		return unsubscribe
	}, [])
	console.log(allPsychologists)

	const favoritePsychologists = allPsychologists.filter(psychologist =>
		favorites
			.map(fav => fav.toLowerCase().trim())
			.includes(psychologist.name.toLowerCase().trim())
	)

	console.log(favoritePsychologists.map(psychologist => psychologist.name))
	return (
		<>
			<Header
				theme={theme}
				setTheme={setTheme}
				openLoginModal={openLoginModal}
				openRegistrationModal={openRegistrationModal}
				user={user}
			/>
			<Container className='favorites-page'>
				{favoritePsychologists.length > 0 ? (
					favoritePsychologists.map((psychologist, index) => (
						<PsychologistCard key={index} psychologist={psychologist} />
					))
				) : (
					<p>No favorite psychologists found</p>
				)}
			</Container>
			<Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
				<LoginForm />
			</Modal>
			<Modal isOpen={isRegistrationModalOpen} onClose={closeRegistrationModal}>
				<RegistrationForm />
			</Modal>
		</>
	)
}

export default FavoritesPage
