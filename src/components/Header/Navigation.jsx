import React from 'react'
import { useLocation } from 'react-router-dom'
import { Nav, NavList, NavItem, NavLink } from './HeaderStyles'

const Navigation = ({ user }) => {
	const location = useLocation()

	return (
		<Nav>
			<NavList>
				<NavItem>
					<NavLink to='/' className={location.pathname === '/' ? 'active' : ''}>
						Home
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						to='/psychologists'
						className={location.pathname === '/psychologists' ? 'active' : ''}
					>
						Psychologists
					</NavLink>
				</NavItem>
				{user && (
					<NavItem>
						<NavLink
							to='/favorites'
							className={location.pathname === '/favorites' ? 'active' : ''}
						>
							Favorites
						</NavLink>
					</NavItem>
				)}
			</NavList>
		</Nav>
	)
}

export default Navigation
