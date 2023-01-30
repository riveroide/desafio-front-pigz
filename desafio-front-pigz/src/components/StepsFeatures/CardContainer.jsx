import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'

const CardContainer = ({ step, setStep }) => {
  if(step===1)
  return (
    <div><Card1 setStep={setStep}/></div>
  )
  if(step===2)
  return (
    <div><Card2 setStep={setStep}/></div>
  )
  if(step===3)
  return (
    <div><Card3 setStep={setStep}/></div>
  )
  if(step===4)
  return (
    <div><Card4 setStep={setStep}/></div>
  )
}

export default CardContainer