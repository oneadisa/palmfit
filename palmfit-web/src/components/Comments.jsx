/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import abdullahiabdu from '../images/abdullahi-abdu.png'
import abdullahikaren from '../images/abdullahi-karen.png'
import abdullahi from '../images/abdullahi.png'
import deji from '../images/deji.png'
import emmanuelhaywhiz from '../images/emmanuel-haywhiz.png'
import emmanuel from '../images/emmanuel.png'
import karen from '../images/karen.png'
import kehindebankee from '../images/kehinde-banke.png'
import kehinde from '../images/kehinde.png'


function Comments() {
    return (
        <div className='bg-light-gray py-20 my-40'>
            <div className='container '>
                <h2 className='font-semibold text-4xl text-left'>Words from Our Users</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 lg:gap-5 pt-20 pb-20'>
                    <div className='flex flex-col bg-white p-3'>
                        <div className='flex flex-row gap-2 p-3'>
                            <div>
                                <img src={karen} />
                            </div>
                            <div className='pt-2'>
                                <h6 className='font-medium'>Karen Dare</h6>
                                <span className='text-dark-green'>@karen</span>
                            </div>
                        </div>
                        <p className='pt-2 pb-1'>
                            Keeping track of my food consumption hasn’t been easier. Team Palmfit anyday.
                        </p>
                    </div>
                    <div className='flex flex-col bg-white p-3'>
                        <div className='flex flex-row gap-2 p-3'>
                            <div>
                                <img src={abdullahikaren} />
                            </div>
                            <div className='pt-2'>
                                <h6 className='font-medium'>Abdullahi Belgore</h6>
                                <span className='text-dark-green'>@karen</span>
                            </div>
                        </div>
                        <p className='pt-2 pb-1'>
                            Keeping track of my food consumption hasn’t been easier. Team Palmfit anyday.
                        </p>
                    </div>
                    <div className='flex flex-col bg-white p-3'>
                        <div className='flex flex-row gap-2 p-3'>
                            <div>
                                <img src={abdullahiabdu} />
                            </div>
                            <div className='pt-2'>
                                <h6 className='font-medium'>Abdullahi Belgore</h6>
                                <span className='text-dark-green'>@abdullahi</span>
                            </div>
                        </div>
                        <p className='pt-2 pb-1'>
                            Palmfit has helped me keep track of what I eat and since then, I have been living healthy.
                        </p>
                    </div>
                    <div className='flex flex-col bg-white p-3'>
                        <div className='flex flex-row gap-2 p-3'>
                            <div>
                                <img src={abdullahi} />
                            </div>
                            <div className='pt-2'>
                                <h6 className='font-medium'>Abdullahi Belgore</h6>
                                <span className='text-dark-green'>@abdullahi</span>
                            </div>
                        </div>
                        <p className='pt-2 pb-1'>
                            Palmfit has helped me keep track of what I eat and since then, I have been living healthy. 
                        </p>
                    </div>
                    <div className='flex flex-col bg-white p-3'>
                        <div className='flex flex-row gap-2 p-3'>
                            <div>
                                <img src={emmanuelhaywhiz} />
                            </div>
                            <div className='pt-2'>
                                <h6 className='font-medium'>Emmanuel</h6>
                                <span className='text-dark-green'>@haywhiz</span>
                            </div>
                        </div>
                        <p className='pt-2 pb-1'>
                            With Palmfit, I need not struggle to keep track or lose sleep on what I eat.
                        </p>
                    </div>
                    <div className='flex flex-col bg-white p-3'>
                        <div className='flex flex-row gap-2 p-3'>
                            <div>
                                <img src={kehindebankee} />
                            </div>
                            <div className='pt-2'>
                                <h6 className='font-medium'>Kehinde Banke</h6>
                                <span className='text-dark-green'>@banke</span>
                            </div>
                        </div>
                        <p className='pt-2 pb-1'>
                            Palmfit has helped me to shed 12pounds in a couple of months. A fit I would have never thought possible. The best part is, I’m still not done yet.
                        </p>
                    </div>
                    <div className='flex flex-col bg-white p-3'>
                        <div className='flex flex-row gap-2 p-3'>
                            <div className=''>
                                <img src={deji} />
                            </div>
                            <div className='pt-2'>
                                <h6 className='font-medium'>Deji Adesoji</h6>
                                <span className='text-dark-green'>@sojiii</span>
                            </div>
                        </div>
                        <p className='pt-2 pb-1'>
                            I was struggling to maintain my weight and keep tabs on what I eat but Palmfit came through. Since I started to keep track, I have not only been healthier but also more confident with my body.
                        </p>
                    </div>
                    <div className='flex flex-col bg-white p-3'>
                        <div className='flex flex-row gap-2 p-3'>
                            <div>
                                <img src={kehinde} />
                            </div>
                            <div className='pt-2'>
                                <h6 className='font-medium'>Kehinde Banke</h6>
                                <span className='text-dark-green'>@banke</span>
                            </div>
                        </div>
                        <p className='pt-2 pb-1'>
                            Palmfit has helped me to shed 12pounds in a couple of months. A fit I would have never thought possible. The best part is, I’m still not done yet.
                        </p>
                    </div>
                    <div className='flex flex-col bg-white p-3'>
                        <div className='flex flex-row gap-2 p-3'>
                            <div>
                                <img src={emmanuel} />
                            </div>
                            <div className='pt-2'>
                                <h6 className='font-medium'>Emmanuel</h6>
                                <span className='text-dark-green'>@haywhiz</span>
                            </div>
                        </div>
                        <p className='pt-2 pb-1'>
                            With Palmfit, I need not struggle to keep track or lose sleep on what I eat. I love everything about the platform, from the experience right from sign up to the daily use. Team Palmfit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments
