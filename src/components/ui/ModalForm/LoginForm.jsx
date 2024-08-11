import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	GoogleAuthProvider,
	signInWithPopup,
	linkWithCredential,
	EmailAuthProvider,
	updatePassword,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../services/firebaseConfig'
import PasswordIcon from '../PasswordIcon'
import {
	FormContainer,
	Form,
	InputContainer,
	Input,
	Button,
	ErrorMessage,
	FormTitle,
	FormText,
	ShowPasswordIcon,
	ResetPasswordLink,
	SuccessMessage,
	GoogleButton,
} from './FormStyles'

const schema = yup.object().shape({
	email: yup.string().required('Email is required').email('Email is invalid'),
	password: yup
		.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters'),
})

const LoginForm = ({ onClose = () => {} }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	})

	const [showPassword, setShowPassword] = useState(false)
	const [isResettingPassword, setIsResettingPassword] = useState(false)
	const [resetEmailSent, setResetEmailSent] = useState(false)
	const [resetEmailError, setResetEmailError] = useState(null)
	const [googlePassword, setGooglePassword] = useState('')
	const [showGooglePasswordInput, setShowGooglePasswordInput] = useState(false)
	const [googlePasswordError, setGooglePasswordError] = useState(null)

	const navigate = useNavigate()

	useEffect(() => {
		reset({
			email: '',
			password: '',
		})
	}, [reset])

	const onSubmit = async data => {
		try {
			await signInWithEmailAndPassword(auth, data.email, data.password)

			// Виклик onClose, якщо це функція
			onClose()

			navigate('/psychologists')
		} catch (error) {
			console.error(error)
		}
	}

	const handlePasswordReset = async () => {
		const email = getValues('email')
		if (!email) {
			setResetEmailError('Email is required for password reset')
			return
		}
		try {
			await sendPasswordResetEmail(auth, email)
			setResetEmailSent(true)
			setResetEmailError(null)
		} catch (error) {
			console.error(error)
			setResetEmailError('Error sending password reset email')
		}
	}

	const toggleResetPassword = () => {
		setIsResettingPassword(!isResettingPassword)
		setResetEmailSent(false)
		setResetEmailError(null)
	}

	const handleGoogleLogin = async () => {
		const provider = new GoogleAuthProvider()
		try {
			const result = await signInWithPopup(auth, provider)
			const user = result.user

			// Якщо користувач вперше входить через Google, попросіть його встановити пароль
			if (user.metadata.creationTime === user.metadata.lastSignInTime) {
				setShowGooglePasswordInput(true)
			} else {
				onClose()
				navigate('/psychologists')
			}
		} catch (error) {
			console.error(error)
		}
	}

	const handleSetGooglePassword = async () => {
		const user = auth.currentUser
		if (!user) {
			setGooglePasswordError('User is not logged in')
			return
		}
		if (googlePassword.length < 6) {
			setGooglePasswordError('Password must be at least 6 characters')
			return
		}
		try {
			const email = user.email
			const credential = EmailAuthProvider.credential(email, googlePassword)
			await linkWithCredential(user, credential)
			await updatePassword(user, googlePassword)
			setShowGooglePasswordInput(false)
			onClose()
			navigate('/psychologists')
		} catch (error) {
			console.error(error)
			setGooglePasswordError('Error setting password')
		}
	}

	return (
		<FormContainer>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormTitle>Log In</FormTitle>
				<FormText>
					Welcome back! Please enter your credentials to access your account and
					continue your search for a psychologist.
				</FormText>
				<InputContainer>
					<Input
						type='email'
						placeholder='Email'
						{...register('email')}
						autoComplete='off'
						defaultValue=''
					/>
					{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
				</InputContainer>
				{!isResettingPassword && !showGooglePasswordInput && (
					<>
						<InputContainer>
							<Input
								type={showPassword ? 'text' : 'password'}
								placeholder='Password'
								{...register('password')}
								autoComplete='off'
								defaultValue=''
							/>
							<ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
								<PasswordIcon showPassword={showPassword} />
							</ShowPasswordIcon>
						</InputContainer>
						{errors.password && (
							<ErrorMessage>{errors.password.message}</ErrorMessage>
						)}
						<Button type='submit'>Login</Button>
					</>
				)}
				{isResettingPassword && (
					<>
						<Button type='button' onClick={handlePasswordReset}>
							Reset Password
						</Button>
						{resetEmailSent && (
							<SuccessMessage>
								Password reset email sent successfully!
							</SuccessMessage>
						)}
						{resetEmailError && <ErrorMessage>{resetEmailError}</ErrorMessage>}
					</>
				)}
				{showGooglePasswordInput && (
					<>
						<InputContainer>
							<Input
								type={showPassword ? 'text' : 'password'}
								placeholder='Set Password'
								value={googlePassword}
								onChange={e => setGooglePassword(e.target.value)}
								autoComplete='off'
							/>
							<ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
								<PasswordIcon showPassword={showPassword} />
							</ShowPasswordIcon>
						</InputContainer>
						{googlePasswordError && (
							<ErrorMessage>{googlePasswordError}</ErrorMessage>
						)}
						<Button type='button' onClick={handleSetGooglePassword}>
							Set Password
						</Button>
					</>
				)}
				<ResetPasswordLink onClick={toggleResetPassword}>
					{isResettingPassword ? 'Back to Login' : 'Forgot Password?'}
				</ResetPasswordLink>
				<GoogleButton type='button' onClick={handleGoogleLogin}>
					Login with Google
				</GoogleButton>
			</Form>
		</FormContainer>
	)
}

export default LoginForm
