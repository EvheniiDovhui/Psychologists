import { createPortal } from 'react-dom'

const Portal = ({ target, children }) => {
	const element = document.getElementById(target)
	return element ? createPortal(children, element) : null
}

export default Portal
