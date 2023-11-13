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
        <div className='bg-[#ffffff4d] h-full w-screen z-20 flex flex-col items-center'>
            <h1 className='text-center text-text-light text-4xl md:text-5xl font-bold p-2 md:mt-6' >Fake Electric</h1>
            <h2 className='text-center text-text-light text-2xl p-2 mt-[3vw] sm:mt-[6vw]' >Victoria Licensed Electrician</h2>
            <div className='z-10 text-center flex flex-col sm:flex-row gap-x-8 justify-center relative sm:mt-12 md:mt-0'>
                <CallNow/>
                <div className='flex items-center justify-center p-2 mx-auto my-[5vw] lg:my-14 bg-accent duration-500 hover:scale-110 hover:rounded-xl h-14'>
                    <Link className='text-2xl text-text-light h-8 text-center no-underline m-auto w-[80vw] max-w-[240px]' to="about">About Us</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header