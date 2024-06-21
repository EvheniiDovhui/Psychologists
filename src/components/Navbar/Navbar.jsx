import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavbarContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background-color: #333;
	color: #fff;
`

const NavLinks = styled.div`
	a {
		margin: 0 10px;
		color: #fff;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
`

function Navbar() {
	return (
		<NavbarContainer>
			<h1>Psychologist App</h1>
			<NavLinks>
				<Link to='/'>Home</Link>
				<Link to='/psychologists'>Psychologists</Link>
				<Link to='/favorites'>Favorites</Link>
				<Link to='/login'>Login</Link>
			</NavLinks>
		</NavbarContainer>
	)
}

export default Navbar
