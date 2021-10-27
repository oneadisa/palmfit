import React, { useContext, cloneElement } from 'react'
import { ModalContext } from '../../context/modalContext'

const ModalBase = ({ children, title }) => {
	const { modalData, setModalData } = useContext(ModalContext)
	const closeModal = () => setModalData({ ...modalData, modalShow: false })

	return (
		<div
			id='modal-container'
			className='fixed top-0 left-0 w-full h-screen flex justify-center items-center backdrop-filter backdrop-brightness-50 z-50'
		>
			<div
				id='overlay'
				onClick={closeModal}
				className='absolute h-screen w-full -z-10'
			/>
			<div className='bg-white w-6/7 md:w-3/5'>
				{/* <div className='font-medium leading-6 py-6 px-7 flex items-center justify-between'>
					<h3>{title}</h3>
				</div> */}
				<div id='modal-child' className='px-7 py-8'>
					{/* Pass close function down */}
					{cloneElement(children, { closeModal })}
				</div>
			</div>
		</div>
	)
}

export default ModalBase
