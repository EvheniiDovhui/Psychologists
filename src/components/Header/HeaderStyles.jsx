import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background: ${({ theme }) => theme.background};
	border-bottom: 1px solid ${({ theme }) => theme.borderHeader};
`

const LogoHeader = styled(Link)`
	padding: 8px;
	margin: 8px 0;
	font-size: 16px;
	text-align: center;
	background-color: #28a745;
`

const Logo = styled.a`
	font-size: 24px;
	font-weight: bold;
	color: ${({ theme }) => theme.logoHeader};
	&:hover {
		text-decoration: none;
		transition: transform 0.3s, color 0.3s;
		transform: scale(1.015);
		color: ${({ theme }) => theme.logoHeaderHover};
	}
`

const Span = styled.span`
	font-weight: bold;
	color: ${({ theme }) => theme.logoHeaderSpan};
`

const Nav = styled.nav`
	display: flex;
`

const NavList = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	padding: 0;
	margin: 0;
`

const NavItem = styled.li`
	margin: 0 8px;
	position: relative;
`

const NavLink = styled(Link)`
	color: ${({ theme }) => theme.text};
	&:hover {
		transition: color 0.3s;
		color: ${({ theme }) => theme.logoHeaderHover};
	}

	&.active::after {
		content: '';
		display: block;
		width: 8px;
		height: 8px;
		background-color: ${({ theme }) => theme.logoHeaderActive};
		border-radius: 50%;
		position: absolute;
		bottom: -8px;
		left: 50%;
		transform: translateX(-50%);
	}
`

const LogoutButton = styled.button`
	align-items: center;
	padding: 8px 24px;
	font-size: 16px;
	cursor: pointer;
	border: 1px solid ${({ theme }) => theme.borderColor};
	border-radius: 50px;
	background-color: var(--color-transparent);
	color: ${({ theme }) => theme.text};
	transition: background-color 0.3s;
	&:hover {
		background-color: ${({ theme }) => theme.buttonHoverBackground};
	}
`

export {
	HeaderContainer,
	LogoHeader,
	Logo,
	Nav,
	NavList,
	NavItem,
	NavLink,
	LogoutButton,
	Span,
}
