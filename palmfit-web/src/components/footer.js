/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

function Footer (){
    return(

        <footer className="mt-16 bg-teal">
            <div className="border-t md:px-4 md:pt-10 md:pb-5">
                <div className="flex md:max-w-screen-lg mx-auto ">
                    <section
                        className="relative text-white font-light  border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
                    >
                        
                        
                        <a
                            className=" text-xl md:text-2xl lg:text-3xl font-bold tracking-wider text-white font-head md:block"
                            href="#"
                        >
                            Palmfit
                        </a>
                        <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
                            <ul className="my-5 text-sm tracking-wide">
                                <li className="my-3 tracking-wide">
                                    <a href="#">Palmfit provides you the platform to calculate your calorie and monitor what you eat with ease.</a>
                                </li>
                                <li className="my-3 p-2 tracking-wide">
                                    
                                </li>
                                <li className="my-3 p-2 tracking-wide">
                                    
                                </li>
                                <li className="my-3 p-2 tracking-wide">
                                   
                                </li>
                            </ul>
                        </article>
                    </section>
                    <section
                        className="relative text-white font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
                    >
                            
                        
                        <a
                            className=" font-bold tracking-wider text-white hidden font-head md:block"
                            href="#"
                        >
                            Programs
                        </a>
                        <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
                            <ul className="my-5 text-sm tracking-wide">
                                <li className="my-3 p-4 tracking-wide">
                                    <a href="#">Our Programs</a>
                                </li>
                                <li className="my-3 p-4 tracking-wide">
                                    <a href="#">Become a member</a>
                                </li>
                                <li className="my-3 p-4 tracking-wide">
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </article>
                    </section>
                    <section
                        className="relative text-white font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
                    >

                        <a
                            className="  font-bold tracking-wider text-white font-head hidden md:block"
                            href="#"
                        >
                            Contact
                        </a>
                        <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
                            <ul className="my-5 text-sm tracking-wide">
                                <li className="my-3 p-4 tracking-wide">
                                    <a href="#">+8032921374</a>
                                </li>
                                <li className="my-3 p-4 tracking-wide">
                                    <a href="#">palmfit@gmail.com</a>
                                </li>
                            </ul>
                        </article>
                    </section>
                    <section
                        className="relative text-white font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
                    >
                       
                        <a
                            className="  font-bold tracking-wider text-white font-head hidden md:block"
                            href="#"
                        >
                            Follow Us
                        </a>
                        <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
                            <ul className="my-5 text-sm tracking-wide">
                                <li className="my-3 p-4 tracking-wide">
                                    <a href="#">LinkedIn</a>
                                </li>
                                <li className="my-3 p-4 tracking-wide">
                                    <a href="#">Twitter</a>
                                </li>
                                <li className="my-3 p-4 tracking-wide">
                                    <a href="#">Instagram</a>
                                </li>
                                <li className="my-3 p-4 tracking-wide">
                                    <a href="#">Facebook</a>
                                </li>
                            </ul>
                        </article>
                    </section>
                
                </div>
            </div>
            <div className="max-w-screen-lg mx-auto border-none px-4">
                <section
                    className="flex flex-col md:flex-row md:justify-between  text-white font-light text-sm pt-4 pb-6 md:pt-5 md:pb-6 w-full"
                >
                    <div>
                        <p className="leading-8 tracking-wide">
                            &copy; 2021 Palmfit. All Rights Reserved.
                        </p>
                    </div>
                </section>
            </div>
        </footer>
        )
        }


export default Footer;