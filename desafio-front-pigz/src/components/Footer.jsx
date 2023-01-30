import React from 'react'
import Base from './FooterComps/Base'
import Header from './FooterComps/Header'
import Links from './FooterComps/Links'

const Footer = () => {
  return (
    <div className='text-[#676767] font-poppins bg-[#FAFAFA]'>
      <div>
        <Header/>
      </div>
      <div>
        <Links/>
      </div>
      <div>
        <Base/>
      </div>
      <div className='bg-[#FF671F] w-full h-1 mt-4'>
      </div>
    </div>
  )
}

export default Footer