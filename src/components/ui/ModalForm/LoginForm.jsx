import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { signInWithEmailAndPassword } from 'firebase/auth'
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
} from './FormStyles'

const schema = yup.object().shape({
	email: yup.string().required('Email is required').email('Email is invalid'),
	password: yup
		.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters'),
})

const LoginForm = ({ onClose }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	const [showPassword, setShowPassword] = useState(false)

	const navigate = useNavigate()

	const onSubmit = async data => {
		try {
			await signInWithEmailAndPassword(auth, data.email, data.password)
			onClose()
			navigate('/psychologists')
		} catch (error) {
			console.error(error)
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
					<Input type='email' placeholder='Email' {...register('email')} />
					{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
				</InputContainer>
				<InputContainer>
					<Input
						type={showPassword ? 'text' : 'password'}
						placeholder='Password'
						{...register('password')}
					/>
					<ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
						<PasswordIcon showPassword={showPassword} />
					</ShowPasswordIcon>
				</InputContainer>
				{errors.password && (
					<ErrorMessage>{errors.password.message}</ErrorMessage>
				)}
				<Button type='submit'>Login</Button>
			</Form>
		</FormContainer>
	)
}

export default LoginForm
