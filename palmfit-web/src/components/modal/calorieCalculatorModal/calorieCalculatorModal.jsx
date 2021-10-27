import React from 'react'

const CalorieCalculatorModal = () => {
	return (
		<div className='w-80 mx-auto bg-teal-bg rounded-lg shadow-lg'>
			<div className='w-full h-32 flex flex-col bg-transparent text-white space-y-3 px-6 py-4 rounded-t-lg'>
				<span className='text-sm'>Kcal</span>
				<span className='text-2xl'>0.0</span>
			</div>
			<div className='w-full h-80 py-6 px-7 bg-white rounded-lg text-sm'>
				<div className='mb-6'>
					<h2>Food</h2>
					<input
						type='text'
						className='w-full bg-gray-bg h-11 rounded px-4 py-px mt-2 focus:outline-none focus:ring-2 focus:ring-teal-bg'
					/>
				</div>
				<div>
					<h2>Food quantity</h2>
					<div className='w-full flex flex-row mt-2 justify-between'>
						<input
							type='text'
							placeholder='Enter a number'
							className='w-40 bg-gray-bg h-11 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-bg'
						/>
						<input
							type='text'
							className='w-24 bg-gray-bg h-11 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-bg'
						/>
					</div>
				</div>
				<div className='flex justify-center'>
					<button className='bg-teal-bg py-2.5 px-12 text-white text-base rounded-md mt-9 '>
						Calculate Calorie
					</button>
				</div>
			</div>
		</div>
	)
}

export default CalorieCalculatorModal
