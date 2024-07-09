// NotFound.jsx
import React from 'react'
import {
	NotFoundContainer,
	NotFoundInnerContainer,
	NotFoundBackground,
	NotFoundTitle,
	NotFoundSubTitle,
	NotFoundText,
	NotFoundLink,
} from './NotFoundStyles'

const NotFound = () => {
	return (
		<NotFoundContainer>
			<NotFoundInnerContainer>
				<NotFoundBackground>
					<NotFoundTitle>404</NotFoundTitle>
				</NotFoundBackground>
				<NotFoundText>
					<NotFoundSubTitle>Look like you're lost</NotFoundSubTitle>
					<p>The page you are looking for not available!</p>
					<NotFoundLink to='/'>Go to Home</NotFoundLink>
				</NotFoundText>
			</NotFoundInnerContainer>
		</NotFoundContainer>
	)
}

export default NotFound
