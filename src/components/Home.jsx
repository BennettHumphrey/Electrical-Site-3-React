import React from 'react'
import AboutUs from './AboutUs'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav/Nav'
import Reviews from './Reviews'
import WhatWeDo from './WhatWeDo'
import Button from './Button'

const Home = () => {

 const data = [
  {href:"href1", text:"text1"},
   {href:"href2", text:"text2"},
   {href:"href3", text:"text3"}
]

  
  return (
    <>
        <Nav  />
        <Header  />
        <WhatWeDo  />
        <AboutUs  />
        <Reviews  />
        <Footer  />
        {/* {data.map((arrayIndex, i) => (
        <Button key={i} href={arrayIndex.href} text={arrayIndex.text} /> */}

       
    </>
  )
}

export default Home