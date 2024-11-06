import React from 'react'

export const Card = ({ title, description }) => {
  return (
    <div className='bg-white p-4 rounded-lg border'>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p>{description}</p>
      <button className='bg-black px-2 py-1 rounded-md text-white'>Primary Button</button>
      <button className='bg-black px-2 py-1 rounded-md text-white'>Secondary Button</button>

    </div>
  )
}
