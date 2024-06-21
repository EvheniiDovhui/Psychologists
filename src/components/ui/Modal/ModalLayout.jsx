import { cn } from '../../../helpers/cn'
import Portal from '../../common/Portal'

const ModalLayout = ({ children, onClose, open }) => {
	if (!open) return null

	return (
		<Portal target='modals-root'>
			<div
				onClick={onClose}
				className={cn(
					' h-screen overscroll-none z-50 top-0 left-0 w-full bg-black/30 flex justify-center items-center fixed'
				)}
			>
				<div
					onClick={e => e.stopPropagation()}
					className={cn(
						'bg-white flex justify-center items-center shadow-xl rounded-xl p-5'
					)}
				>
					{children}
				</div>
			</div>
		</Portal>
	)
}

export default ModalLayout
