import React from 'react'
import { createPortal } from 'react-dom'
import { ModalOverlay, ModalContent, CloseButton } from './ModalStyles'

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null

	return createPortal(
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={e => e.stopPropagation()}>
				<CloseButton onClick={onClose}>&times;</CloseButton>
				{React.cloneElement(children, { onClose })}
			</ModalContent>
		</ModalOverlay>,
		document.getElementById('modals-root')
	)
}

export default Modal
