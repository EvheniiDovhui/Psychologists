import styled from 'styled-components'

export const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;

	gap: 18px;
`

export const InputContainer = styled.div`
	position: relative;
	width: 100%;
`

export const Input = styled.input`
	padding: 10px;
	margin: 0;
	width: 100%;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 12px;
	padding-right: 40px;
`

export const Button = styled.button`
	padding: 10px;

	font-size: 16px;
	cursor: pointer;
	border: none;
	border-radius: 30px;
	background-color: ${({ theme }) => theme.buttonBackground};
	color: #fff;
	transition: background-color 0.3s;
	&:hover {
		background-color: ${({ theme }) => theme.buttonBackgroundHover};
	}
`

export const GoogleButton = styled.button`
	background-color: #4285f4;
	color: white;
	border: none;
	padding: 10px 20px;
	margin-top: 10px;
	border-radius: 5px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #357ae8;
	}
`

export const ErrorMessage = styled.p`
	color: red;
`
export const FormTitle = styled.h2``

export const FormText = styled.p``

export const ShowPasswordIcon = styled.span`
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	user-select: none;
	position: absolute;
	right: 10px;
	top: 50%;
	transform: translateY(-50%);
`
export const ResetPasswordLink = styled.a`
	color: blue;
	cursor: pointer;
	text-decoration: underline;
`

export const SuccessMessage = styled.span`
	color: green;
`
