import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth } from '../../services/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import styled from 'styled-components'

const LoginButton = styled(Link)`
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

const RegistrationPage = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)

	const handleSignUp = async e => {
		e.preventDefault()
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			)
			navigate('/psychologists')
		} catch (error) {
			setError(error.message)
		}
	}

	return (
		<>
			<div>
				<h2>Реєстрація</h2>
				<form onSubmit={handleSignUp}>
					<input
						type='email'
						placeholder='Електронна пошта'
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
					<input
						type='password'
						placeholder='Пароль'
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
					<button type='submit'>Зареєструватися</button>
				</form>
				{error && <p>{error}</p>}
			</div>
			<LoginButton to='/login'>Увійти</LoginButton>
		</>
	)
}

export default RegistrationPage
