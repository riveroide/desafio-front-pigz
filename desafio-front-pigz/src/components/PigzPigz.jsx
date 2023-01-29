import React from 'react'
import LogoRing from '../lib/Grupo 3535.svg'

const PigzPigz = () => {
  return (
    <div className='flex flex-col justify-center items-center text-[#333333]' >
        <div className='-mt-16 w-full justify-center flex'>
            <img src={LogoRing} alt="/" className=''/>
        </div>
        <div className='py-12 w-3/5 justify-center flex text-center'>
            <h3 className='font-poppins font-bold text-3xl'>Você tem um novo Pigzdido!</h3>
        </div>
    </div>
  )
}

export default PigzPigz