/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import calculator from '../images/calculator.png'
import edit from '../images/edit.png'
import heart from '../images/heart.png'

function Choose() {
    return (
        <div className='mt-20 mb-20'>
            <h2 className='text-center text-4xl pb-3 font-semibold'>Why Choose Us?</h2>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 lg:gap-5 mt-10'>
                <div className='flex flex-col rounded-md px-6 py-8 items-center text-left bg-light-gray'>
                    <img src={calculator} />
                    <h4 className='text-lg text-black mt-6 mb-3 font-semibold'>Calcuate Calorie</h4>
                    <p className='text-sm text-gray-500 mb-2'>
                    We offer you the chance to browse through our platform for food calories to make your 
                    decisions on what to eat and what not to. However this starts by signing up on our platform.
                    </p>
                </div>
                <div class='flex flex-col rounded-md px-6 py-8 items-center bg-light-purple'>
                    <img src={edit} />
                    <h4 className='text-lg text-black mt-6 mb-3 font-semibold'>Keep Track of Intake</h4>
                    <p className='text-sm text-gray-500 mb-2'>
                    We offer you the chance to browse through our platform for food calories to make 
                    your decisions on what to eat and what not to. However this starts by signing up on our platform.
                    </p>
                </div>
                <div className='flex flex-col rounded-md px-6 py-8 items-center bg-light-cream'>
                    <img src={heart} />
                    <h4 className='text-lg text-black mt-6 mb-3 font-semibold'>Live Healthier</h4>
                    <p className='text-sm text-gray-500 mb-2'>
                    We offer you the chance to browse through our platform for food calories to make your decisions
                    on what to eat and what not to. However this starts by signing up on our platform.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Choose
