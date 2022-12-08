import React from 'react'
import './header.scss'

function Header() {

const handleSample = async() => {
   const result = await fetch('/.netlify/functions/sample')
}

  return (
    <div className='header' onClick={() => handleSample()}>this is Header</div>
  )
}

export default Header