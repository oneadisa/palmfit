import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ModalContextProvider } from './contexts/modalContext'

ReactDOM.render(
	<React.StrictMode>
		<ModalContextProvider>
			<App />
		</ModalContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
