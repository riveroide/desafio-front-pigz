import React from 'react'
import { useState } from 'react'
import CardContainer from './StepsFeatures/CardContainer'
import Navbar from './StepsFeatures/Navbar'
import Title from './StepsFeatures/Title'

const FeaturesCardsSteps = () => {
    const[step, setStep] = useState(1)
  return (
    <div>
        <div>
            <Navbar step={step} setStep={setStep}/>
        </div>
        <div>
            <Title step={step}/>
        </div>
        <div>
            <CardContainer step={step} setStep={setStep}/>
        </div>
    </div>
  )
}

export default FeaturesCardsSteps