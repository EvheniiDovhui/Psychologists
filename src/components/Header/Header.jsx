import React from 'react'
import { Logo, HeaderContainer, Span } from './HeaderStyles'
import Navigation from './Navigation'
import UserSection from './UserSection'
import AuthButtons from './AuthButtons'

const Header = ({
	theme,
	setTheme,
	openLoginModal,
	openRegistrationModal,
	user,
}) => {
	return (
		<HeaderContainer>
			<Logo href='/'>
				psychologists.
				<Span>services</Span>
			</Logo>
			<Navigation user={user} />

			{user ? (
				<UserSection user={user} theme={theme} setTheme={setTheme} />
			) : (
				<AuthButtons
					openLoginModal={openLoginModal}
					openRegistrationModal={openRegistrationModal}
				/>
			)}
		</HeaderContainer>
	)
}

export default Header
