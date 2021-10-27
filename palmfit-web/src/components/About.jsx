/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
// import notebook from '../images/palmfit-notebook.svg' 

function About() {
    return (
        <div className='container flex flex-col md:flex-row lg:flex-row gap-20 py-20 pt-40 md:pt-20 lg:pt-20'>
            <div className='flex-1'>
                {/* image */}
                {/* <img src={notebook} /> */}
            </div>
            <div className='flex-1 text-center md:text-left lg:text-left'>
                {/* text */}
                <h2 className='text-4xl pb-3 font-semibold'>About Palmfit</h2>
                <p className='text-base py-1'>
                    Palmfit is an easy-to-use calorie calculator that helps users measure their calorie intake in order to make better healthy food intake decisions.
                </p> 
                <p className='text-base py-1'>
                    We offer you the chance to browse through our platform for food calories to make your decisions on what to eat and what not to. However this starts by signing up on our platform.
                </p>
                <p className='text-base py-1'>
                    The most accurate resource for calorie, fat and carbohydrate counts. Take it everywhere; look up foods before you eat, when eating choices count the most!
                </p>
                <button className='bg-dark-green text-white px-6 py-3 mt-5 hover:text-green-500 hover:bg-black'>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default About