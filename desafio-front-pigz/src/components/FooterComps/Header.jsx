import React from 'react'
import PigzLogo from '../../lib/footer/pigz-logotipo-colorido.svg'
import AppStoreLogo from '../../lib/footer/selo-app-store.svg'
import GooglePlayLogo from '../../lib/footer/selo-google-play.svg'

const Header = () => {
  return (
    <div className='pl-4'>
      <div className='pt-16'>
        <img src={PigzLogo} alt="/"/>
        <p className='text-[70%] text-[#676767] pt-1 '>Tudo que você precisa</p>
      </div>
      
      <div className='mt-4'>
       <p className='font-semibold py-2'>Baixe o APP</p>
       <div className='flex gap-1'>
        <img src={AppStoreLogo} alt="/"/>
        <img src={GooglePlayLogo} alt="/"/>
       </div> 
      </div>
    </div>
  )
}

export default Header