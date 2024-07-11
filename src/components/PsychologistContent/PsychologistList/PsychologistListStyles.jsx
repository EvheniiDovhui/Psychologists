import styled from 'styled-components'

export const Container = styled.ul`
	display: flex;
	flex-wrap: wrap;

	width: 1200px;
	background-color: ${({ theme }) => theme.psPageBackground};
	margin: 0 auto;
	padding: 20px;
	justify-content: center;
	gap: 20px;

	@media (max-width: 1200px) {
		width: 90%;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
	@media (max-width: 375px) {
		width: 100%;
	}
`
export const LoadMoreButton = styled.button`
	margin-top: 20px;
	padding: 10px 20px;
	font-size: 16px;
	border: none;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.buttonBackground};
	color: ${({ theme }) => theme.body};
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: ${({ theme }) => theme.buttonBackgroundHover};
	}
`
