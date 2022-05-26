import React, { useEffect } from 'react'
import { Button } from '../Button/Button'



const DarkMode = () => {
    const [darkTheme, setDarkTheme] = React.useState(false)

    const ModeDark = () => {
      setDarkTheme(!darkTheme)
  }

    useEffect(()=>{
      if (darkTheme) {
        document.body.classList.add("dark-theme")
        document.body.classList.remove("light-theme")
        
      }else{
        document.body.classList.add("light-theme")
        document.body.classList.remove("dark-theme")

      }

    },[darkTheme])
  return (
  

    <Button 
    style="btnDarkMode" 
    event={ModeDark} 
    textButton="Dark Mode" 
    /> 
  )
}

export default DarkMode
