import React, { useState, useEffect } from 'react'
import { getFavorites } from '../../services/favoritesService'
import PsychologistCard from '../../components/PsychologistContent/PsychologistCard/PsychologistCard'
import { Container } from './FavoritesPageStyles'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getPsychologists } from '../../services/psychologistService'
import Header from '../../components/Header/Header'
import { Modal } from '../../components/ui/Modal'
import useModal from '../../hooks/useModal'
import LoginForm from '../../components/ui/ModalForm/LoginForm'
import RegistrationForm from '../../components/ui/ModalForm/RegistrationForm'
import { useTheme } from '../../context/ThemeContext/ThemeContext'

const FavoritesPage = () => {
	const { theme, setTheme } = useTheme()
	const [favorites, setFavorites] = useState([])
	const [userId, setUserId] = useState(null)
	const [allPsychologists, setAllPsychologists] = useState([])
	const { open, onOpen, onClose } = useModal()
	const [isLoginModalOpen, setLoginModalOpen] = useState(false)
	const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false)
	const [user, setUser] = useState(null)

	const openLoginModal = () => setLoginModalOpen(true)
	const closeLoginModal = () => setLoginModalOpen(false)

	const openRegistrationModal = () => setRegistrationModalOpen(true)
	const closeRegistrationModal = () => setRegistrationModalOpen(false)

	useEffect(() => {
		const fetchData = async () => {
			const data = await getPsychologists()
			setAllPsychologists(data)
		}

		fetchData()
	}, [])

	useEffect(() => {
		const auth = getAuth()
		const unsubscribe = onAuthStateChanged(auth, async user => {
			if (user) {
				setUserId(user.uid)
				setUser(user)
				const favorites = await getFavorites(user.uid)
				setFavorites(favorites)
			} else {
				setUserId(null)
				setUser(null)
			}
		})
		return () => unsubscribe()
	}, [])

	const favoritePsychologists = allPsychologists.filter(psychologist =>
		favorites.includes(psychologist.name)
	)

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
				<LoginForm closeModal={closeLoginModal} />
			</Modal>
			<Modal isOpen={isRegistrationModalOpen} onClose={closeRegistrationModal}>
				<RegistrationForm closeModal={closeRegistrationModal} />
			</Modal>
		</>
	)
}

export default FavoritesPage
