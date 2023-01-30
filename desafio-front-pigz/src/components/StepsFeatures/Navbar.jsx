import React from 'react'

const Navbar = ({ step, setStep }) => {
    if(step === 1)
  return (
    <div className='flex w-full justify-between gap-4 p-4'>
        <button className='bg-[#FA641E] h-1 w-1/4  rounded-md'>
            
        </button>
        <button className='bg-[#EEEEEE] h-1 w-1/4 rounded-md'onClick={()=> setStep(2)}>
            
        </button>

        <button className='bg-[#EEEEEE] h-1 w-1/4 rounded-md'onClick={()=> setStep(3)}>
            
        </button>

        <button className='bg-[#EEEEEE] h-1 w-1/4 rounded-md'onClick={()=> setStep(4)}>
            
        </button>
    </div>
  )
  if(step === 2)
  return (
    <div className='flex w-full justify-between gap-4 p-4' >
        <button className='bg-[#EEEEEE] h-1 w-1/4  rounded-md' onClick={()=> setStep(1)}>
            
        </button>

        <button className='bg-[#FA641E] h-1 w-1/4 rounded-md'>
            
        </button>

        <button className='bg-[#EEEEEE] h-1 w-1/4 rounded-md' onClick={()=> setStep(3)}>
            
        </button>

        <button className='bg-[#EEEEEE] h-1 w-1/4 rounded-md' onClick={()=> setStep(4)}>
            
        </button>
    </div>
  )
  if(step === 3)
  return (
    <div className='flex w-full justify-between gap-4 p-4'>
        <button className='bg-[#EEEEEE] h-1 w-1/4  rounded-md' onClick={()=> setStep(1)}>
            
        </button>

        <button className='bg-[#EEEEEE] h-1 w-1/4 rounded-md'onClick={()=> setStep(2)}>
            
        </button>

        <button className='bg-[#FA641E] h-1 w-1/4 rounded-md' >
            
        </button>

        <button className='bg-[#EEEEEE] h-1 w-1/4 rounded-md' onClick={()=> setStep(4)}>
            
        </button>
    </div>
  )
  if(step === 4)
  return (
    <div className='flex w-full justify-between gap-4 p-4' >
        <button className='bg-[#EEEEEE]  h-1 w-1/4  rounded-md' onClick={()=> setStep(1)}>
            
        </button>

        <button className='bg-[#EEEEEE] h-1 w-1/4 rounded-md' onClick={()=> setStep(2)}>
            
        </button>

        <button className='bg-[#EEEEEE] h-1 w-1/4 rounded-md' onClick={()=> setStep(3)}>
            
        </button>

        <button className='bg-[#FA641E] h-1 w-1/4 rounded-md'>
            
        </button>
    </div>
  )
}

export default Navbar