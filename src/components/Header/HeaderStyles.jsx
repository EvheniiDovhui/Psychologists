import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as Avatar from '@radix-ui/react-avatar'

const HeaderContainer = styled.header`
	display: flex;
	max-width: 1200px;
	margin: 0 auto;
	justify-content: space-between;
	align-items: center;
	padding: 18px;
	background: ${({ theme }) => theme.background};
	border-bottom: 1px solid ${({ theme }) => theme.borderHeader};

	@media (max-width: 768px) {
		padding: 10px;
	}

	@media (max-width: 480px) {
		justify-content: space-around;
		padding: 8px;
	}
`

const LogoHeader = styled(Link)`
	padding: 8px;
	margin: 8px 0;
	font-size: 16px;
	text-align: center;
	background-color: #28a745;

	@media (max-width: 768px) {
		margin: 0;
	}
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

	@media (max-width: 480px) {
		font-size: 20px;
	}
`

const Span = styled.span`
	font-weight: bold;
	color: ${({ theme }) => theme.logoHeaderSpan};
`

const NavButton = styled.button`
	display: none;
	cursor: pointer;
	@media (max-width: 480px) {
		display: block;
		padding: 6px;
		margin: 8px 0;
		background-color: transparent;
		border: none;
		outline: none;
		cursor: pointer;
	}
`
const HeaderModalContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 116px;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 8px;
	}

	@media (max-width: 480px) {
		gap: 0;

		visibility: hidden;
		width: 0;
		height: 0;
	}
`

const Nav = styled.nav`
	display: flex;

	@media (max-width: 768px) {
		width: 100%;
		margin-top: 10px;
		justify-content: space-between;
	}

	@media (max-width: 480px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 8px;
	}
`

const NavList = styled.ul`
	display: flex;
	gap: 12px;

	@media (max-width: 480px) {
		flex-direction: column;
		gap: 6px;
	}
`

const NavItem = styled.li`
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
	padding: 7px 23px;
	font-size: 16px;
	border: 1px solid ${({ theme }) => theme.borderColor};
	border-radius: 50px;
	background-color: var(--color-transparent);
	color: ${({ theme }) => theme.text};
	transition: color 0.3s, background-color 0.3s;
	&:hover {
		background-color: ${({ theme }) => theme.buttonBackgroundHover};
		color: ${({ theme }) => theme.body};
	}

	@media (max-width: 480px) {
		padding: 6px 18px;
		font-size: 14px;
	}
`

const RegistrationButton = styled.button`
	padding: 8px 24px;
	font-size: 16px;
	border: none;
	border-radius: 50px;
	background-color: ${({ theme }) => theme.buttonBackground};
	color: ${({ theme }) => theme.body};
	transition: background-color 0.3s;

	&:hover {
		background-color: ${({ theme }) => theme.buttonBackgroundHover};
	}

	@media (max-width: 480px) {
		padding: 6px 18px;
		font-size: 14px;
	}
`
const UserContainer = styled.div`
	display: flex;
	align-items: center;
`

const UserName = styled.span`
	margin-left: 10px;
	font-size: 16px;
	color: ${({ theme }) => theme.text};

	@media (max-width: 480px) {
		font-size: 14px;
	}
`

const AvatarRoot = styled(Avatar.Root)`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	vertical-align: middle;
	width: 40px;
	height: 40px;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.borderColor};
	overflow: hidden;
	background-color: ${({ theme }) => theme.logoHeader};
	cursor: pointer;
	transition: transform 0.3s;
	&:hover,
	&:focus {
		transform: scale(1.05);
		border-color: 1px solid ${({ theme }) => theme.logoHeaderHover};
	}

	@media (max-width: 480px) {
		width: 32px;
		height: 32px;
	}
`

const AvatarImage = styled(Avatar.Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: inherit;
`

const AvatarFallback = styled(Avatar.Fallback)`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.avatarBackgroundFallback};
	color: ${({ theme }) => theme.avatarTextFallback};
	font-size: 20px;
	font-weight: bold;

	@media (max-width: 480px) {
		font-size: 16px;
	}
`

export {
	HeaderContainer,
	LogoHeader,
	Logo,
	NavButton,
	HeaderModalContainer,
	Nav,
	NavList,
	NavItem,
	NavLink,
	LogoutButton,
	RegistrationButton,
	Span,
	UserContainer,
	UserName,
	AvatarRoot,
	AvatarImage,
	AvatarFallback,
}
