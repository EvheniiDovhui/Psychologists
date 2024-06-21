import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: ${({ theme }) => theme.body};
`

const Button = styled.button`
	padding: 10px 20px;
	font-size: 16px;
	margin-top: 20px;
	cursor: pointer;
`

const HomePage = () => {
	const navigate = useNavigate()

	return (
		<HomeContainer>
			<h1>Welcome to Our Psychologist Services</h1>
			<p>Your mental health is our priority.</p>
			<Button onClick={() => navigate('/psychologists')}>Get Started</Button>
		</HomeContainer>
	)
}

export default HomePage
