import styled from 'styled-components'

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`

export const ModalContent = styled.div`
	background: ${({ theme }) => theme.background};
	padding: 40px;
	border-radius: 30px;
	position: relative;
	width: 50%;
	max-width: 500px;
`

export const CloseButton = styled.button`
	position: absolute;
	top: 16px;
	right: 16px;
	background: none;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.logoHeader};
		transition: color 0.3s;

		outline: none;
	}
`
