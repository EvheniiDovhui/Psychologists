import React, { useState } from 'react'
import {
	PsInfo,
	PsListInfo,
	PsMain,
	PsText,
	PsTitle,
	PsCommentList,
	PsCommentItem,
	PsCommentUser,
	PsCommentText,
	PsButton,
	PsTextAbout,
	PsCommentRating,
	PsAppointmentButton,
	PsButtonContainer,
	PsCommentAvatar,
	PsCommentHeader,
	PsCommentUserInfo,
} from './PsychologistCardMainStyles'
import { PsIconStarFull } from '../PsychologistCardHeader/PsychologistCardHeaderStyles'
import Modal from '../../ui/Modal/Modal'
import AppointmentForm from '../../ui/AppointmentForm/AppointmentForm'

export const PsychologistCardMain = ({ psychologist }) => {
	const [showComments, setShowComments] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleReadMoreClick = () => {
		setShowComments(!showComments)
	}

	const handleModalOpen = () => {
		setIsModalOpen(true)
	}

	const handleModalClose = () => {
		setIsModalOpen(false)
	}

	return (
		<PsMain>
			<PsListInfo>
				<PsInfo>
					<PsTitle>Experience:</PsTitle>
					<PsText>{psychologist.experience}</PsText>
				</PsInfo>
				<PsInfo>
					<PsTitle>License:</PsTitle>
					<PsText>{psychologist.license}</PsText>
				</PsInfo>
				<PsInfo>
					<PsTitle>Specialization:</PsTitle>
					<PsText>{psychologist.specialization}</PsText>
				</PsInfo>
				<PsInfo>
					<PsTitle>Initial Consultation:</PsTitle>
					<PsText>{psychologist.initial_consultation}</PsText>
				</PsInfo>
			</PsListInfo>
			<PsTextAbout>{psychologist.about}</PsTextAbout>
			<PsButtonContainer>
				<PsButton onClick={handleReadMoreClick}>
					{showComments ? 'Hide comments' : 'Read more'}
				</PsButton>

				<PsAppointmentButton onClick={handleModalOpen}>
					Make an appointment
				</PsAppointmentButton>
			</PsButtonContainer>
			{showComments && (
				<PsCommentList>
					{psychologist.reviews.map((reviews, index) => (
						<PsCommentItem key={index}>
							<PsCommentHeader>
								<PsCommentAvatar>{reviews.reviewer[0]}</PsCommentAvatar>
								<PsCommentUserInfo>
									<PsCommentUser>{reviews.reviewer}</PsCommentUser>
									<PsCommentRating>
										<PsIconStarFull /> {reviews.rating}
									</PsCommentRating>
								</PsCommentUserInfo>
							</PsCommentHeader>
							<PsCommentText>{reviews.comment}</PsCommentText>
						</PsCommentItem>
					))}
				</PsCommentList>
			)}
			<Modal isOpen={isModalOpen} onClose={handleModalClose}>
				<AppointmentForm
					psychologist={psychologist}
					onClose={handleModalClose}
				/>
			</Modal>
		</PsMain>
	)
}

export default PsychologistCardMain
