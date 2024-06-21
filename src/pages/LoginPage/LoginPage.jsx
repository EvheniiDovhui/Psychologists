import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { auth } from '../../services/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

const schema = yup.object().shape({
	email: yup.string().required('Email is required').email('Email is invalid'),
	password: yup
		.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters'),
})

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.text};
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;
`

const Input = styled.input`
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-radius: 4px;
`

const Button = styled.button`
	padding: 10px;
	margin: 10px 0;
	font-size: 16px;
	cursor: pointer;
	border: none;
	border-radius: 5px;
	background-color: #007bff;
	color: #fff;
	transition: background-color 0.3s;
	&:hover {
		background-color: #0056b3;
	}
`

const RegisterButton = styled(Link)`
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

function LoginPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	const navigate = useNavigate() // Додавання хука useNavigate

	const onSubmit = async data => {
		try {
			await signInWithEmailAndPassword(auth, data.email, data.password)
			navigate('/psychologists') // Перенаправлення після успішного входу
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<LoginContainer>
			<h1>Login</h1>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input type='email' placeholder='Email' {...register('email')} />
				{errors.email && <p>{errors.email.message}</p>}
				<Input
					type='password'
					placeholder='Password'
					{...register('password')}
				/>
				{errors.password && <p>{errors.password.message}</p>}
				<Button type='submit'>Login</Button>
			</Form>
			<RegisterButton to='/register'>Register</RegisterButton>
		</LoginContainer>
	)
}

export default LoginPage
