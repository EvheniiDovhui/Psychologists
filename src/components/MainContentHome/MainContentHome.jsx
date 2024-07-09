// MainContentHome.jsx
import React, { useState } from 'react'
import {
	MainContainer,
	MainText,
	MainTitle,
	MainParagraph,
	MainLink,
	MainImageContainer,
	MainImage,
	MainTitleSpan,
	MainTextContainer,
} from './MainContentHomeStyles'
import image1x from '../../assets/img/image.jpg'
import image2x from '../../assets/img/image@2x.jpg'
import { IconArrow } from '../../assets/Icon'
import './MainContentHome.css'
import { useAuth } from '../../context/AuthContext/AuthContext'
import LoginForm from '../ui/ModalForm/LoginForm'
import RegistrationForm from '../ui/ModalForm/RegistrationForm'
import Modal from '../ui/Modal/Modal'
import { useNavigate } from 'react-router-dom'

const MainContentHome = () => {
	const { user } = useAuth()
	const [showLoginModal, setShowLoginModal] = useState(false)
	const [showRegistrationModal, setShowRegistrationModal] = useState(false)
	const navigate = useNavigate()

	const handleGetStarted = () => {
		if (user) {
			navigate('/psychologists')
		} else {
			const firstTimeLogin = localStorage.getItem('firstTimeLogin')
			const isRegistered = localStorage.getItem('isRegistered')
			if (firstTimeLogin === null || isRegistered === 'false') {
				setShowRegistrationModal(true)
				localStorage.setItem('firstTimeLogin', 'false')
			} else {
				setShowLoginModal(true)
			}
		}
	}

	const handleRegistrationComplete = () => {
		localStorage.setItem('isRegistered', 'true')
		setShowRegistrationModal(false)
	}

	return (
		<MainContainer>
			<MainTextContainer>
				<MainText>
					<MainTitle>
						The road to the <MainTitleSpan> depths </MainTitleSpan>of the human
						soul
					</MainTitle>
					<MainParagraph>
						We help you to reveal your potential, overcome challenges and find a
						guide in your own life with the help of our experienced
						psychologists.
					</MainParagraph>
					<MainLink href='#' onClick={handleGetStarted}>
						Get started <IconArrow className='icon-arrow' />
					</MainLink>
				</MainText>
				<MainText>
					<MainTitle>To become a psychologist</MainTitle>
					<MainParagraph>
						If you are a psychologist and want to get to our site, fill out the
						Google form.
					</MainParagraph>
					<MainLink href='https://forms.gle/6UTSXgaL7qvW46i7A' target='_blank'>
						Google form <IconArrow className='icon-arrow' />
					</MainLink>
				</MainText>
			</MainTextContainer>
			<MainImageContainer>
				<MainImage
					src={image1x}
					srcSet={`${image1x} 1x, ${image2x} 2x`}
					alt='Psychologist'
				/>
			</MainImageContainer>
			<Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)}>
				<LoginForm />
			</Modal>
			<Modal
				isOpen={showRegistrationModal}
				onClose={() => setShowRegistrationModal(false)}
			>
				<RegistrationForm onComplete={handleRegistrationComplete} />
			</Modal>
		</MainContainer>
	)
}

export default MainContentHome
