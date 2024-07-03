import React, { useState } from 'react'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../services/firebaseConfig'
import {
	UserContainer,
	UserName,
	AvatarRoot,
	AvatarImage,
	AvatarFallback,
	LogoutButton,
} from './HeaderStyles'
import * as Avatar from '@radix-ui/react-avatar'
import UserSettingsModal from '../../components/ui/UserSettingsModal/UserSettingsModal'
import { IconUser } from '../../assets/Icon'
import './Header.css'

const UserSection = ({ user, theme, setTheme }) => {
	const navigate = useNavigate()
	const [isSettingsModalOpen, setSettingsModalOpen] = useState(false)

	const handleLogout = async () => {
		try {
			await signOut(auth)
			navigate('/')
		} catch (error) {
			console.error('Error signing out: ', error)
		}
	}

	const openSettingsModal = () => setSettingsModalOpen(true)
	const closeSettingsModal = () => setSettingsModalOpen(false)

	return (
		<>
			<UserContainer>
				<AvatarRoot onClick={openSettingsModal}>
					<AvatarImage
						src={user.photoURL}
						alt={user.displayName || user.email}
					/>
					<AvatarFallback delayMs={600}>
						{user.displayName ? (
							<IconUser className='icon-user' />
						) : (
							user.email[0]
						)}
					</AvatarFallback>
				</AvatarRoot>
				<UserName>{user.displayName || user.email}</UserName>
			</UserContainer>
			<LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
			<UserSettingsModal
				isOpen={isSettingsModalOpen}
				onClose={closeSettingsModal}
				user={user}
				theme={theme}
				setTheme={setTheme}
			/>
		</>
	)
}

export default UserSection
