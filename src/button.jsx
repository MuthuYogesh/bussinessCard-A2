import React from 'react'
import style from './button.module.css'

export default function button({children, onClick}) {
  return (
    <>
        <button onClick={onClick}>{children}</button>
    </>
  )
}
