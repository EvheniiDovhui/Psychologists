import { useEffect, useState } from 'react'

const useModal = () => {
	const [visible, setIsVisible] = useState(false)

	const handleOpenModal = () => setIsVisible(true)
	const handleCloseModal = () => setIsVisible(false)

	useEffect(() => {
		document.body.style.overflow = visible ? 'auto' : 'auto'
	}, [visible])

	return { open: visible, onOpen: handleOpenModal, onClose: handleCloseModal }
}

export default useModal
