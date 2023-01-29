import React from "react";
import { useState } from "react";
import Step1 from "./StepsBusinessForm/Step1";
import Step2 from "./StepsBusinessForm/Step2";
import Step3 from "./StepsBusinessForm/Step3";

const Form = () => {
  const [stepnum, setStepnum] = useState(1)
  if(stepnum === 1)
  return (
    <div>
      <Step1 setStepnum={setStepnum}/>
    </div>
  )
  if(stepnum ===2)
  return (
    <div>
      <Step2 setStepnum={setStepnum}/>
    </div>
  )
  if(stepnum ===3)
  return (
    <div>
      <Step3 setStepnum={setStepnum}/>
    </div>
  )
};

export default Form;
