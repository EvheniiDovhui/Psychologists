import styled from 'styled-components'
import { IconClock } from '../../../assets/Icon'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

export const Header = styled.h2`
	display: block;
	font-size: 24px;
`

export const SubHeader = styled.p`
	display: block;
	font-size: 14px;
`

export const PsychologistInfo = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
`

export const Avatar = styled.img`
	width: 44px;
	height: 44px;
	border-radius: 50%;
	margin-right: 14px;
`
export const PsychologistContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	justify-content: space-between;
	align-items: center;
`
export const PsychologistSpec = styled.h3`
	font-size: 14px;
`

export const PsychologistName = styled.p`
	font-size: 16px;
	margin-bottom: 0;
	margin-right: 8px;
`
export const FormFieldPhoneTime = styled.div`
	width: 100%;
	display: flex;
	gap: 16px;
`

export const FormField = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`

export const Label = styled.label`
	margin-bottom: 8px;
	font-size: 14px;
`

export const Input = styled.input`
	padding: 16px;
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: 18px;
`

export const TimePickerWrapper = styled.div`
	position: relative;
`

export const TimeInput = styled.input`
	position: relative;
	padding: 16px;
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: 18px;
	width: 86.5%;
`

export const TimeButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	padding: 16px;
	font-size: 16px;
	border: none;
	background: transparent;
	cursor: pointer;

	&:focus {
		outline: none;
		stroke: ${({ theme }) => theme.logoHeaderHover};
	}

	&:hover {
		color: ${({ theme }) => theme.logoHeaderHover};
		stroke: ${({ theme }) => theme.logoHeaderHover};
	}
`

export const IconClockButton = styled(IconClock)`
	width: 20px;
	height: 20px;
	fill: transparent;
	stroke: #191a15;
	transition: stroke 0.3s ease-in-out;

	&:hover,
	&:focus {
		stroke: ${({ theme }) => theme.logoHeaderHover};
	}
`

export const Popup = styled.div.withConfig({
	shouldForwardProp: prop => !['show'].includes(prop),
})`
	position: absolute;
	top: 100%;
	left: 100px;
	background: white;
	border: 1px solid #ccc;
	border-radius: 12px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	z-index: 1000;
	display: ${({ show }) => (show ? 'block' : 'none')};
	padding: 10px;
	${'' /* width: 50%; */}
	max-height: 100px;

	overflow-x: hidden;
	overflow-y: auto;
`

export const PopupTitle = styled.p`
	font-size: 16px;
`

export const TimeOption = styled.button`
	display: block;
	width: 100%;
	padding: 10px;
	background: transparent;
	border: none;
	cursor: pointer;

	&:hover {
		background: #f0f0f0;
	}
`
export const TextArea = styled.textarea`
	padding: 15px;
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: 18px;
	resize: vertical;
`

export const SubmitButton = styled.button`
	border: none;
	background-color: ${({ theme }) => theme.buttonBackground};
	color: #fff;
	padding: 10px 20px;
	text-decoration: none;
	border-radius: 30px;
	font-size: 1.2em;
	cursor: pointer;
	transition: background-color 0.3s ease-in-out;

	&:hover,
	&:focus {
		background-color: ${({ theme }) => theme.buttonBackgroundHover};
	}

	@media (max-width: 1200px) {
		font-size: 1em;
		padding: 8px 16px;
	}

	@media (max-width: 768px) {
		font-size: 0.8em;
		padding: 6px 12px;
	}
`
