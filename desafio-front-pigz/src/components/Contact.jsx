import React from 'react'
import WhatsappImg from '../lib/Icon awesome-whatsapp.svg'

const Contact = () => {
  return (
    <div className='flex justify-center gap-4 font-poppins font-medium text-[#333333] p-12'>
      <p>Fale com a Pigz</p>
      <div className='flex gap-1'>
        <div>
          <img src={WhatsappImg} alt="/"/>
        </div>
        <div className='flex items-baseline gap-1'>
         <p className='text-sm'>95</p>
         <p>3224-2603</p>
        </div>
      </div>
    </div>
  )
}

export default Contact