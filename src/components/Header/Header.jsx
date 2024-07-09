import React from 'react'
import {
	Logo,
	HeaderContainer,
	Span,
	HeaderModalContainer,
	NavButton,
} from './HeaderStyles'
import Navigation from './Navigation'
import UserSection from './UserSection'
import AuthButtons from './AuthButtons'
import { IconMenu } from '../../assets/Icon'

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
			<NavButton onClick={openLoginModal}>
				<IconMenu className='icon-menu' />
			</NavButton>
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
		</HeaderContainer>
	)
}

export default Header
