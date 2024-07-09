import React, { useState, useEffect } from 'react'
import {
	Logo,
	HeaderContainer,
	Span,
	NavButton,
	HeaderModalContainer,
} from './HeaderStyles'
import Navigation from './Navigation'
import UserSection from './UserSection'
import AuthButtons from './AuthButtons'
import { IconMenu } from '../../assets/Icon'
import Modal from '../ui/Modal/Modal'

const Header = ({
	theme,
	setTheme,
	openLoginModal,
	openRegistrationModal,
	user,
}) => {
	const [isModalOpen, setModalOpen] = useState(false)
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 480)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 480)
		}

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const toggleModal = () => {
		setModalOpen(!isModalOpen)
	}

	return (
		<>
			<HeaderContainer>
				<Logo href='/'>
					psychologists.
					<Span>services</Span>
				</Logo>
				{isMobile ? (
					<NavButton onClick={toggleModal}>
						<IconMenu className='icon-menu' />
					</NavButton>
				) : (
					<>
						<Navigation user={user} />
						{user ? (
							<UserSection user={user} theme={theme} setTheme={setTheme} />
						) : (
							<AuthButtons
								openLoginModal={openLoginModal}
								openRegistrationModal={openRegistrationModal}
							/>
						)}
					</>
				)}
			</HeaderContainer>
			{isMobile && (
				<Modal isOpen={isModalOpen} onClose={toggleModal}>
					<HeaderModalContainer>
						<Navigation user={user} />
						{user ? (
							<UserSection user={user} theme={theme} setTheme={setTheme} />
						) : (
							<AuthButtons
								openLoginModal={openLoginModal}
								openRegistrationModal={openRegistrationModal}
							/>
						)}
					</HeaderModalContainer>
				</Modal>
			)}
		</>
	)
}

export default Header
