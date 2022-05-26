import React, { useState } from 'react'
import { Button } from '../Button/Button'




export const ButtonUI = () => {
    const [counter, setCounter] = useState(0);


    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleSubstract = () => {
        setCounter(counter - 1)
    }

    const handleRest = () => {
        setCounter(0)
    }
  

   
    return (

        <>
        <h2>{counter}</h2>
        <p>_______________________________________________________________________________</p>
        <Button
         style="btnSum"
         event={handleAdd} 
         textButton="Sum"
          />
        <Button
         style="btnRest" 
         event={handleSubstract} 
         textButton="Rest" 
         />
        <Button 
        style="btnZero" 
        event={handleRest} 
        textButton="Zero" 
        />  
  
        </>
        

    )
}
