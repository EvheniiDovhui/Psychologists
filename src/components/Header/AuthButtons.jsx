import React from 'react'
import {
	NavList,
	NavItem,
	LogoutButton,
	RegistrationButton,
} from './HeaderStyles'

const AuthButtons = ({ openLoginModal, openRegistrationModal }) => {
	return (
		<NavList>
			<NavItem>
				<LogoutButton onClick={openLoginModal}>Log In</LogoutButton>
			</NavItem>
			<NavItem>
				<RegistrationButton onClick={openRegistrationModal}>
					Registration
				</RegistrationButton>
			</NavItem>
		</NavList>
	)
}

export default AuthButtons
