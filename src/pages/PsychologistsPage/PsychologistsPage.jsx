import React, { useState, useEffect } from 'react'
import { Modal } from '../../components/ui/Modal'
import useModal from '../../hooks/useModal'
import Header from '../../components/Header/Header'
import { useTheme } from '../../context/ThemeContext/ThemeContext'
import { auth } from '../../services/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import LoginForm from '../../components/ui/ModalForm/LoginForm'
import RegistrationForm from '../../components/ui/ModalForm/RegistrationForm'

function PsychologistsPage() {
	const { theme, setTheme } = useTheme()
	const [user, setUser] = useState(null)
	const { open, onOpen, onClose } = useModal()
	const [isLoginModalOpen, setLoginModalOpen] = useState(false)
	const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false)

	const openLoginModal = () => setLoginModalOpen(true)
	const closeLoginModal = () => setLoginModalOpen(false)

	const openRegistrationModal = () => setRegistrationModalOpen(true)
	const closeRegistrationModal = () => setRegistrationModalOpen(false)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user)
			} else {
				setUser(null)
			}
		})
		return unsubscribe
	}, [])

	return (
		<>
			<Header
				theme={theme}
				setTheme={setTheme}
				openLoginModal={openLoginModal}
				openRegistrationModal={openRegistrationModal}
				user={user}
			/>
			<Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
				<LoginForm closeModal={closeLoginModal} />
			</Modal>
			<Modal isOpen={isRegistrationModalOpen} onClose={closeRegistrationModal}>
				<RegistrationForm closeModal={closeRegistrationModal} />
			</Modal>
		</>
	)
}

export default PsychologistsPage
