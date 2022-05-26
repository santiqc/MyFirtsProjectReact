import React from 'react'

export const Button = ({style, event,textButton}) => {
  return (
    
    <button className={style} onClick={event}>{textButton}</button>
  )
}
