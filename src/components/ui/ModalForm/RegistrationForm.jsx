import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import {
	FormContainer,
	Form,
	InputContainer,
	Input,
	Button,
	ErrorMessage,
	FormTitle,
	ShowPasswordIcon,
	FormText,
} from './FormStyles'
import { auth } from '../../../services/firebaseConfig'
import './ModalForm.css'
import PasswordIcon from '../PasswordIcon'

const RegistrationForm = ({ closeModal, onComplete }) => {
	const navigate = useNavigate()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState(null)
	const [showPassword, setShowPassword] = useState(false)

	const handleSignUp = async e => {
		e.preventDefault()
		if (password !== confirmPassword) {
			setError('Passwords do not match')
			return
		}
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			)
			const user = userCredential.user
			await updateProfile(user, {
				displayName: name,
			})
			onComplete()
			closeModal()
			navigate('/psychologists')
		} catch (error) {
			setError(error.message)
		}
	}

	return (
		<FormContainer>
			<Form onSubmit={handleSignUp}>
				<FormTitle>Registration</FormTitle>
				<FormText>
					Thank you for your interest in our platform! In order to register, we
					need some information. Please provide us with the following
					information.
				</FormText>
				<InputContainer>
					<Input
						type='text'
						placeholder='Name'
						value={name}
						onChange={e => setName(e.target.value)}
						required
					/>
				</InputContainer>
				<InputContainer>
					<Input
						type='email'
						placeholder='Email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
				</InputContainer>
				<InputContainer>
					<Input
						type={showPassword ? 'text' : 'password'}
						placeholder='Password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
					<ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
						<PasswordIcon showPassword={showPassword} />
					</ShowPasswordIcon>
				</InputContainer>
				<InputContainer>
					<Input
						type={showPassword ? 'text' : 'password'}
						placeholder='Confirm Password'
						value={confirmPassword}
						onChange={e => setConfirmPassword(e.target.value)}
						required
					/>
					<ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
						<PasswordIcon showPassword={showPassword} />
					</ShowPasswordIcon>
				</InputContainer>
				<Button type='submit'>Register</Button>
			</Form>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</FormContainer>
	)
}

export default RegistrationForm
