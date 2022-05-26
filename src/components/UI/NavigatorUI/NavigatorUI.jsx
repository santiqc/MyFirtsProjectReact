import React from 'react'

export const NavigatorUI = ({style, reference, text}) => {
  return (
    <div>
      <a href={reference} className={style}>{text}</a>
    </div>
  )
}




