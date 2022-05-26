import React from 'react'

import { Link } from 'react-router-dom'

export const Navigator = () => {
  return (
    <div className='navigatorUI'>

      <Link to="/" className='navigator'>Home</Link>
      <Link to="/aboutUS" className='navigator'>AboutUS</Link>
      <Link to="/contactUS" className='navigator'>ContactUS</Link>

   
    </div>
  )
}
