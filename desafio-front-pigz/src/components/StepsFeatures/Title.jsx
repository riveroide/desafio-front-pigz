import React from 'react'

const Title = ({ step }) => {
    if(step===1)
  return (
    <div className='flex justify-center items-center mt-4 mb-8 font-poppins font-semibold capitalize text-2xl'>
        <h2>
            pigz marketplace
        </h2>
    </div>
  )
  if(step===2)
  return (
    <div className='flex justify-center items-center mt-4 mb-8 font-poppins font-semibold capitalize text-2xl'>
        <h2>
            pigz gestão
        </h2>
    </div>
  )
  if(step===3)
  return (
    <div className='flex justify-center items-center mt-4 mb-8 font-poppins font-semibold capitalize text-2xl'>
        <h2>
            gestão de entregadores
        </h2>
    </div>
  )
  if(step===4)
  return (
    <div className='flex justify-center items-center mt-4 mb-8 font-poppins font-semibold capitalize text-2xl'>
        <h2>
            pagamento on-line
        </h2>
    </div>
  )
}

export default Title