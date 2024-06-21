// Header.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../services/firebaseConfig'
import { signOut } from 'firebase/auth'
import styled from 'styled-components'
// import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton'

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background: #f8f9fa;
`

const Logo = styled.a`
	font-size: 24px;
	text-decoration: none;
	color: black;
`

const Nav = styled.nav`
	display: flex;
`

const NavList = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
`

const NavItem = styled.li`
	margin: 0 10px;
`

const NavLink = styled.a`
	text-decoration: none;
	color: black;
	&:hover {
		text-decoration: underline;
	}
`

const LogoutButton = styled.button`
	padding: 10px;
	margin-left: 10px;
	font-size: 16px;
	cursor: pointer;
	border: none;
	border-radius: 5px;
	background-color: #dc3545;
	color: #fff;
	transition: background-color 0.3s;
	&:hover {
		background-color: #c82333;
	}
`

const Header = () => {
	const navigate = useNavigate()

	const handleLogout = async () => {
		try {
			await signOut(auth)
			navigate('/') // Перенаправлення на головну сторінку після виходу
		} catch (error) {
			console.error('Error signing out: ', error)
		}
	}

	return (
		<HeaderContainer>
			<Logo href='/'>
				<span className='logo__span'>psychologists.</span>services
			</Logo>
			<Nav>
				<NavList>
					<NavItem>
						<NavLink href='/'>Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='/psychologists'>Psychologists</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='/favorites'>Favorites</NavLink>
					</NavItem>
				</NavList>
				<LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
				{/* <ThemeToggleButton theme={theme} themeToggler={themeToggler} />{' '} */}
			</Nav>
		</HeaderContainer>
	)
}

export default Header
