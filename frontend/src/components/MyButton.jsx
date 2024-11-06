import React from 'react'

export const MyButton = ({children,disable=false}) => {
  return (
    <button className={'bg-blue-500 text-white px-3 py-1 rounded-md disabled:opacity-50'} disabled={disabled}>
      {children}</button>
  )
}
