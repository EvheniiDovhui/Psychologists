import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth'
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
	GoogleButton,
} from './FormStyles'
import { auth } from '../../../services/firebaseConfig'
import './ModalForm.css'
import PasswordIcon from '../PasswordIcon'

const RegistrationForm = ({ closeModal }) => {
	const navigate = useNavigate()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState(null)
	const [showPassword, setShowPassword] = useState(false)

	useEffect(() => {
		setName('')
		setEmail('')
		setPassword('')
		setConfirmPassword('')
	}, [])

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
			closeModal()
			navigate('/psychologists')
		} catch (error) {
			setError(error.message)
		}
	}

	const handleGoogleSignUp = async () => {
		const provider = new GoogleAuthProvider()
		try {
			const result = await signInWithPopup(auth, provider)
			const user = result.user
			await updateProfile(user, {
				displayName: user.displayName,
			})
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
						autoComplete='off'
						required
					/>
				</InputContainer>
				<InputContainer>
					<Input
						type='email'
						placeholder='Email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						autoComplete='off'
						required
					/>
				</InputContainer>
				<InputContainer>
					<Input
						type={showPassword ? 'text' : 'password'}
						placeholder='Password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						autoComplete='off'
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
						autoComplete='off'
						required
					/>
					<ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
						<PasswordIcon showPassword={showPassword} />
					</ShowPasswordIcon>
				</InputContainer>
				<Button type='submit'>Register</Button>
				<GoogleButton type='button' onClick={handleGoogleSignUp}>
					Register with Google
				</GoogleButton>
			</Form>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</FormContainer>
	)
}

export default RegistrationForm
