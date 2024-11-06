import React from 'react'
import classes from'./loginModule.css'

const login = () => {
  return (
    <div>
      <h1>login Page</h1>
      <button className='global-btn'>login button</button>
      <button className= 'loginBtn'>local login button</button>
    </div>
  )
}

export default login