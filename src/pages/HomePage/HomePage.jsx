// HomePage.jsx

import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Modal from '../../components/ui/Modal/Modal'
import LoginForm from '../../components/ui/ModalForm/LoginForm'
import RegistrationForm from '../../components/ui/ModalForm/RegistrationForm'
import MainContentHome from '../../components/MainContentHome/MainContentHome'
import { useTheme } from '../../context/ThemeContext/ThemeContext'
import { auth } from '../../services/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { getUserTheme, setUserTheme } from '../../services/themeService' // Імпорт функцій для отримання та збереження теми користувача

const HomePage = () => {
	const { theme, setTheme } = useTheme()
	const [user, setUser] = useState(null)
	const [isLoginModalOpen, setLoginModalOpen] = useState(false)
	const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false)

	const openLoginModal = () => setLoginModalOpen(true)
	const closeLoginModal = () => setLoginModalOpen(false)

	const openRegistrationModal = () => setRegistrationModalOpen(true)
	const closeRegistrationModal = () => setRegistrationModalOpen(false)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async user => {
			if (user) {
				setUser(user)
				const savedTheme = await getUserTheme(user.uid) // Отримати тему користувача
				if (savedTheme) {
					setTheme(savedTheme) // Встановити тему користувача
				}
			} else {
				setUser(null)
				setTheme('light') // Встановити тему за замовчуванням
			}
		})
		return unsubscribe
	}, [setTheme])

	const handleThemeChange = async newTheme => {
		setTheme(newTheme) // Встановити нову тему

		if (user) {
			// Якщо користувач автентифікований, зберегти нову тему в базі даних
			try {
				await setUserTheme(user.uid, newTheme)
			} catch (error) {
				console.error('Error setting user theme:', error)
				// Обробка помилки збереження теми користувача
			}
		}
	}

	return (
		<>
			<Header
				theme={theme}
				setTheme={handleThemeChange}
				openLoginModal={openLoginModal}
				openRegistrationModal={openRegistrationModal}
				user={user}
			/>
			<MainContentHome />
			<Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
				<LoginForm />
			</Modal>
			<Modal isOpen={isRegistrationModalOpen} onClose={closeRegistrationModal}>
				<RegistrationForm />
			</Modal>
		</>
	)
}

export default HomePage
