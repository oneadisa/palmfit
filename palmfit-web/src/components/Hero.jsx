/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import fruits from '../images/palmfit-fruit.png'

function Hero() {
    return (
        <div className='container flex flex-col-reverse md:flex-row lg:flex-row items-center gap-20 mt-5 md:mt-20 lg:mt-0 p-2 lg:pt-0 md:pt-0 '>
            {/* text */}
            <div className='flex-1 items-center text-center md:text-left lg:text-left px-5 lg:px-0'>
                <h1 className='text-6xl md:text-3xl lg:text-6xl text-center lg:text-left -mt-5 mb-6 lg:my-10 lg:font-semibold z-40'>
                    Your fitness <span class='text-dark-green'>starts</span><br/>with what you eat
                </h1>
                <p className='text-lg text-center lg:text-left mb-6 lg:my-10'>
                    At Palmfit, we offer you the chance to keep tab on what you
                    and when you eat. It requires minimal commitment and the journey
                    starts when you say it starts. Click below to register!
                </p>
                <button className='bg-dark-green text-white px-6 py-3 hover:text-green-500 hover:bg-black'>
                    Calculate Calorie
                </button>
            </div>
            {/* image */}
            <div className='flex justify-center flex-1 mb-10 md:mb-0 lg:mb-0'>
                <img src={fruits} />
            </div>
        </div>
    )
}

export default Hero;
