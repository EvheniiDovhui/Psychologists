import React from 'react'
import ModalLayout from './ModalLayout'

const Modal = ({ open, onClose, children }) => {
	if (!open) return null
	return (
		<ModalLayout open={open} onClose={onClose}>
			{children}
		</ModalLayout>
	)
}

export default Modal
