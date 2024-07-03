import React, { useState, useEffect, useRef } from 'react'
import { updateProfile, deleteUser } from 'firebase/auth'
import {
	ref,
	uploadBytes,
	getDownloadURL,
	deleteObject,
} from 'firebase/storage'
import { auth, storage } from '../../../services/firebaseConfig'
import {
	FormGroup,
	Label,
	Input,
	Button,
	PhotoAvatar,
	SettingsTitle,
	ButtonDelete,
	PhotoContainer,
	ButtonDeleteUser,
	Container,
	AvatarContainer,
	ButtonContainer,
} from './UserSettingsModalStyles'
import ThemeSelector from '../../ThemeSelector/ThemeSelector'
import Modal from '../Modal/Modal'
import '../Modal/Modal.css'
import { IconUser } from '../../../assets/Icon'

const UserSettingsModal = ({ theme, setTheme, isOpen, onClose, user }) => {
	const [displayName, setDisplayName] = useState(user.displayName || '')
	const [photoURL, setPhotoURL] = useState(user.photoURL || '')
	const [photoFile, setPhotoFile] = useState(null)
	const [removePhoto, setRemovePhoto] = useState(false)
	const [avatarExists, setAvatarExists] = useState(false)
	const fileInputRef = useRef(null)

	useEffect(() => {
		if (user.photoURL) {
			const storageRef = ref(storage, `avatars/${user.uid}`)
			getDownloadURL(storageRef)
				.then(() => {
					setAvatarExists(true)
				})
				.catch(error => {
					if (error.code === 'storage/object-not-found') {
						setAvatarExists(false)
					} else {
						console.error('Помилка перевірки існування аватара: ', error)
					}
				})
		}
	}, [user.photoURL, user.uid])

	const handleSave = async () => {
		try {
			let updatedPhotoURL = photoURL

			if (removePhoto && avatarExists) {
				const storageRef = ref(storage, `avatars/${user.uid}`)
				await deleteObject(storageRef)
				updatedPhotoURL = ''
			} else if (photoFile) {
				const storageRef = ref(storage, `avatars/${user.uid}`)
				await uploadBytes(storageRef, photoFile)
				updatedPhotoURL = await getDownloadURL(storageRef)
			}

			await updateProfile(auth.currentUser, {
				displayName,
				photoURL: updatedPhotoURL,
			})

			onClose()
		} catch (error) {
			console.error('Помилка оновлення профілю: ', error)
		}
	}

	const handlePhotoUpload = event => {
		const file = event.target.files[0]
		setPhotoFile(file)

		const reader = new FileReader()
		reader.onloadend = () => {
			setPhotoURL(reader.result)
		}
		reader.readAsDataURL(file)
	}

	const handleRemovePhoto = () => {
		setPhotoFile(null)
		setPhotoURL('')
		setRemovePhoto(true)
	}

	const handlePhotoClick = () => {
		fileInputRef.current.click()
	}

	const handleDeleteUser = async () => {
		try {
			await deleteUser(auth.currentUser)
			alert('User deleted successfully')
			// You might want to handle redirection or additional cleanup here
		} catch (error) {
			console.error('Помилка видалення користувача: ', error)
		}
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Container>
				<SettingsTitle>Settings user</SettingsTitle>
				<PhotoContainer>
					<FormGroup>
						<Label htmlFor='photoUpload'></Label>
						<Input
							id='photoUpload'
							type='file'
							accept='image/*'
							onChange={handlePhotoUpload}
							ref={fileInputRef}
							style={{ display: 'none' }}
						/>
					</FormGroup>
					{photoURL ? (
						<AvatarContainer onClick={handlePhotoClick}>
							<PhotoAvatar
								src={photoURL}
								alt='Avatar'
								style={{ cursor: 'pointer' }}
							/>
						</AvatarContainer>
					) : (
						<AvatarContainer onClick={handlePhotoClick}>
							<IconUser className='icon-user-settings' />
						</AvatarContainer>
					)}
					{photoURL && (
						<ButtonDelete className='delete-button' onClick={handleRemovePhoto}>
							Delete Avatar
						</ButtonDelete>
					)}
				</PhotoContainer>
				<FormGroup>
					<Label htmlFor='displayName'>Name:</Label>
					<Input
						id='displayName'
						type='text'
						value={displayName}
						onChange={e => setDisplayName(e.target.value)}
					/>
				</FormGroup>

				<ThemeSelector theme={theme} setTheme={setTheme} />
				<ButtonContainer>
					<Button onClick={handleSave}>Save</Button>
					<ButtonDeleteUser onClick={handleDeleteUser}>
						Delete User
					</ButtonDeleteUser>
				</ButtonContainer>
			</Container>
		</Modal>
	)
}

export default UserSettingsModal
