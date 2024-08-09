import React, { useState, useEffect, useRef } from 'react'
import {
	Form,
	FormField,
	Input,
	TextArea,
	SubmitButton,
	Header,
	SubHeader,
	Avatar,
	PsychologistInfo,
	PsychologistContainer,
	PsychologistName,
	PsychologistSpec,
	FormFieldPhoneTime,
	TimePickerWrapper,
	TimeInput,
	Popup,
	TimeOption,
	TimeButton,
	IconClockButton,
} from './AppointmentFormStyles'

const AppointmentForm = ({ onClose, psychologist }) => {
	const [showPopup, setShowPopup] = useState(false)
	const [selectedTime, setSelectedTime] = useState('')
	const [error, setError] = useState('')
	const popupRef = useRef(null)

	const handleTimeSelect = time => {
		setSelectedTime(time)
		setShowPopup(false)
		setError('')
	}

	const formatTimeInput = value => {
		let formattedValue = value.replace(/[^0-9]/g, '') // Remove non-numeric characters
		if (formattedValue.length > 2 && formattedValue.length <= 4) {
			formattedValue =
				formattedValue.slice(0, 2) + ':' + formattedValue.slice(2)
		} else if (formattedValue.length > 4) {
			formattedValue = formattedValue.slice(0, 4)
		}
		return formattedValue
	}

	const handleInputChange = e => {
		let value = e.target.value
		value = formatTimeInput(value)
		setSelectedTime(value)

		const regex = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/
		if (!regex.test(value) && value !== '') {
			setError('Invalid time format. Please use HH:MM.')
		} else {
			setError('')
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (error) return
		onClose() // Ensure onClose is called here
	}

	useEffect(() => {
		const handleClickOutside = event => {
			if (popupRef.current && !popupRef.current.contains(event.target)) {
				setShowPopup(false)
			}
		}

		if (showPopup) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [showPopup])

	return (
		<Form onSubmit={handleSubmit}>
			<Header>Make an appointment with a psychologist</Header>
			<SubHeader>
				You are on the verge of changing your life for the better. Fill out the
				short form below to book your personal appointment with a professional
				psychologist. We guarantee confidentiality and respect for your privacy.
			</SubHeader>
			<PsychologistInfo>
				<Avatar
					src={psychologist.avatar_url}
					alt={`Avatar of ${psychologist.name}`}
				/>
				<PsychologistContainer>
					<PsychologistSpec>Your psychologist:</PsychologistSpec>
					<PsychologistName>{psychologist.name}</PsychologistName>
				</PsychologistContainer>
			</PsychologistInfo>
			<FormField>
				<Input placeholder='Name' id='name' name='name' type='text' required />
			</FormField>
			<FormFieldPhoneTime>
				<FormField>
					<Input
						placeholder='+380'
						id='phone'
						name='phone'
						type='tel'
						required
					/>
				</FormField>
				<FormField>
					<TimePickerWrapper>
						<TimeInput
							type='text'
							value={selectedTime}
							onChange={handleInputChange}
							placeholder='HH:MM'
						/>
						<TimeButton
							type='button'
							onClick={() => setShowPopup(!showPopup)}
							style={{ cursor: 'pointer' }}
						>
							<IconClockButton />
						</TimeButton>
						{error && <p style={{ color: 'red' }}>{error}</p>}
						<Popup ref={popupRef} show={showPopup}>
							<p>Meeting time</p>
							{[
								'09:00',
								'10:00',
								'11:00',
								'12:00',
								'13:00',
								'14:00',
								'15:00',
								'16:00',
								'17:00',
								'18:00',
								'19:00',
							].map(time => (
								<TimeOption key={time} onClick={() => handleTimeSelect(time)}>
									{time}
								</TimeOption>
							))}
						</Popup>
					</TimePickerWrapper>
				</FormField>
			</FormFieldPhoneTime>
			<FormField>
				<Input
					placeholder='Email'
					id='email'
					name='email'
					type='email'
					required
				/>
			</FormField>
			<FormField>
				<TextArea
					placeholder='Comment'
					id='comment'
					name='comment'
					rows='5'
					cols='40'
					required
				/>
			</FormField>
			<SubmitButton type='submit'>Send</SubmitButton>
		</Form>
	)
}

export default AppointmentForm
