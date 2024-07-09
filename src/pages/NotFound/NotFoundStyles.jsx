// NotFoundStyles.js
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NotFoundContainer = styled.section`
	padding: 40px 0;
	background: #fff;
	font-family: 'Arvo', serif;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`

export const NotFoundInnerContainer = styled.div`
	text-align: center;
`

export const NotFoundBackground = styled.div`
	background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
	height: 400px;
	background-position: center;
	margin-bottom: -50px;
`

export const NotFoundTitle = styled.h1`
	font-size: 80px;
`

export const NotFoundSubTitle = styled.h3`
	font-size: 80px;
`

export const NotFoundText = styled.div`
	margin-top: -50px;
`

export const NotFoundLink = styled(Link)`
	color: #fff !important;
	padding: 10px 20px;
	background: #39ac31;
	margin: 20px 0;
	border-radius: 15px;
	display: inline-block;
	text-decoration: none;
`
