import React, { createContext, useState } from 'react'

export const ModalContext = createContext({})

export const ModalContextProvider = ({ children }) => {

	const [modalData, setModalData] = useState({
		modalShow: false,
		modalType: 'calorieCalculator',

	})

	return (
		<ModalContext.Provider value={{ modalData, setModalData }}>
			{children}
		</ModalContext.Provider>
	)
}
