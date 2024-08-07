import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import * as Avatar from '@radix-ui/react-avatar'

const waveAnimation = keyframes`
	0% {
		left: -100%;
	}
	50% {
		left: 100%;
	}
	100% {
		left: 100%;
	}
`

const HeaderContainer = styled.header`
	display: flex;
	max-width: 100%;
	margin: 0 auto;
	justify-content: space-evenly;
	align-items: center;
	padding: 18px;
	${'' /* background: ${({ theme }) => theme.body}; */}
	border-bottom: 1px solid ${({ theme }) => theme.borderHeader};

	@media (max-width: 1200px) {
		justify-content: space-between;
	}

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
	position: relative;
	display: inline-block;
	overflow: hidden;
	transition: color 0.3s, transform 0.3s;

	&:hover {
		color: ${({ theme }) => theme.logoHeaderHover};
		transform: scale(1.05);
	}

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 3px;
		background: ${({ theme }) => theme.logoHeaderHover};
		bottom: 0;
		left: -100%;
		animation: ${waveAnimation} 3s infinite;
	}

	@media (max-width: 768px) {
		font-size: 20px;
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
	display: none;
	@media (max-width: 480px) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		background: ${({ theme }) => theme.background};
		${
			'' /* position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%; */
		}
		z-index: 1000;
		padding: 20px;
	}
`

const Nav = styled.nav`
	display: flex;

	@media (max-width: 768px) {
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
