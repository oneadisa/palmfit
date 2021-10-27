/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import logo from '../images/palmfit-logo.png'

function Header() {
    const [open, setOpen] = useState(false);

    const HandleNav = () => {
        setOpen(!open);
    }

    return (
        <nav className='container flex items-center pb-3 p-3 pt-6 flex-wrap '>
            <a href='#' class='mr-4 items-center flex flex-col'>
                <img src={logo} />
            </a>
            <button className = ' inline-flex p-3 lg:hidden md:hidden ml-auto' onClick={HandleNav}>
                {open === true ? (<i class="far fa-window-close fa-2x"></i>) : (<i class="fas fa-bars fa-2x"></i>)}
            </button>
            <div className='hidden top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto md:inline-flex md:flex-grow md:w-auto'>
                <ul className= "lg:inline-flex lg:flex-row lg:ml-auto md:inline-flex md:flex-row md:ml-auto flex flex-col gap-12">
                    <li className='text-base'>
                        <a href='#' class='text-black hover:text-green-500'>Calorie Counter</a>
                    </li>
                    <li className='text-base'>
                        <a href='#' class='text-black hover:text-green-500'>Sign-in</a>
                    </li>
                    <li className='text-base'>
                        <a href='#' class='bg-dark-green text-white px-4 py-3 hover:text-green-500 hover:bg-black'>Get Started</a>
                    </li>
                </ul>
            </div>
            {open === true ?  (<div class='top-nav w-full md:hidden lg:hidden mt-10'>
                <ul className = "flex flex-col gap-10 text-center">
                    <li className='text-base'>
                        <a href='#' class='text-black'>Calorie Counter</a>
                    </li>
                    <li className='text-base'>
                        <a href='#' class='text-black'>Sign-in</a>
                    </li>
                    <li className='text-base'>
                        <a href='#' class='bg-dark-green text-white px-4 py-2 text-xl'>Get Started</a>
                    </li>
                </ul>
            </div>) : null}
        </nav>
    )
}

export default Header;

