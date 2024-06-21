import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background: ${({ theme }) => theme.background};
`

const LogoHeader = styled(Link)`
	padding: 10px;
	margin: 10px 0;
	font-size: 16px;
	text-decoration: none;
	text-align: center;
	border: none;
	border-radius: 5px;
	background-color: #28a745;
	color: #fff;
	transition: background-color 0.3s;
	&:hover {
		background-color: #218838;
	}
`

const Logo = styled.a`
	font-size: 24px;
	text-decoration: none;
	font-weight: bold;
	color: ${({ theme }) => theme.logoHeader};
`

const Span = styled.span`
	font-weight: normal;
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
	margin: 0 10px;
`

const NavLink = styled(Link)`
	text-decoration: none;
	color: black;
	&:hover {
		text-decoration: underline;
	}
`

const LogoutButton = styled.button`
	align-items: center;
	padding: 10px;
	margin-left: 10px;
	font-size: 16px;
	cursor: pointer;
	border: none;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.buttonBackground};
	color: #fff;
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
