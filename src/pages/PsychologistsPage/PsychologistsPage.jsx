import React from 'react'
import { Modal } from '../../components/ui/Modal'
import useModal from '../../hooks/useModal'

function PsychologistsPage() {
	const { open, onOpen, onClose } = useModal()

	return (
		<>
			<button onClick={onOpen}>Open Modal</button>
			<Modal open={open} onClose={onClose}>
				Hello
			</Modal>
		</>
	)
}

export default PsychologistsPage
