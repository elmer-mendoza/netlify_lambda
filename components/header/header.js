import React from 'react'
import './header.scss'

function Header() {

const handleSample = async() => {
   const result = await fetch('https://lustrous-crepe-401a2c.netlify.app/.netlify/functions/sample')
   console.log(result)
}

  return (
    <div className='header' onClick={() => handleSample()}>this is Header</div>
  )
}

export default Header