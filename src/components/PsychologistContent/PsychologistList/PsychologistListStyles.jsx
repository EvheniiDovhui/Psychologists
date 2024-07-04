import styled from 'styled-components'

export const Container = styled.ul`
	display: flex;
	flex-wrap: wrap;
	background-color: ${({ theme }) => theme.psPageBackground};
	margin: 0 auto;
	padding: 20px;
	justify-content: center;
	gap: 20px;
`
