import React from 'react'
import { IconEye, IconEyeOff } from '../../assets/Icon'
import './PasswordIcon.css'

const PasswordIcon = ({ showPassword, toggleShowPassword }) => (
	<div className='icon-wrapper' onClick={toggleShowPassword}>
		<IconEye className={`icon-eye ${showPassword ? 'hidden' : ''}`} />
		<IconEyeOff className={`icon-eye-off ${showPassword ? '' : 'hidden'}`} />
	</div>
)

export default PasswordIcon
