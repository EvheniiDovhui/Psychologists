import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../services/firebaseConfig'
import { signOut } from 'firebase/auth'
import ThemeSelector from '../ThemeSelector/ThemeSelector'
import {
	HeaderContainer,
	Logo,
	Nav,
	NavList,
	NavItem,
	NavLink,
	LogoutButton,
	Span,
} from './HeaderStyles'

const Header = ({ theme, setTheme }) => {
	const navigate = useNavigate()

	const handleLogout = async () => {
		try {
			await signOut(auth)
			navigate('/')
		} catch (error) {
			console.error('Error signing out: ', error)
		}
	}

	return (
		<HeaderContainer>
			<Logo href='/'>
				psychologists.
				<Span>services</Span>
			</Logo>
			<Nav>
				<NavList>
					<NavItem>
						<NavLink to='/'>Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to='/psychologists'>Psychologists</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to='/favorites'>Favorites</NavLink>
					</NavItem>
				</NavList>
				<ThemeSelector theme={theme} setTheme={setTheme} />
				<LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
			</Nav>
		</HeaderContainer>
	)
}

export default Header
