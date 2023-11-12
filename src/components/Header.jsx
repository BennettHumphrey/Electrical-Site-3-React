import React from 'react'
import { Link } from 'react-router-dom'
import CallNow from './CallNow'

const Header = () => {
  return (
    <div className='
    bg-[url(./resources/imgs/artistic-scaffolding-600.webp)] 
    md:bg-[url(./resources/imgs/artistic-scaffolding-900.webp)]
    lg:bg-[url(./resources/imgs/artistic-scaffolding-1200.webp)]
    xl:bg-[url(./resources/imgs/artistic-scaffolding-1800.webp)]
    bg-cover z-0 h-screen-width max-h-96'>
        <div className='bg-[#ffffff4d] h-full w-screen m-auto z-20 flex flex-col items-center'>
            <h1 className='text-center text-text-light text-2xl p-2 sm:mt-[10vw]' >Victoria Licensed Electrician</h1>
            <div className='z-10 text-center flex flex-col sm:flex-row gap-x-8 justify-center'>
                <CallNow/>
                <div className='flex items-center justify-center p-2 mx-auto my-[10vw] lg:my-14 bg-accent duration-500 hover:scale-110 hover:rounded-xl h-14'>
                    <Link className='text-2xl text-text-light h-14 text-center no-underline m-auto w-[80vw] max-w-[240px]' to="about">About Us</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header