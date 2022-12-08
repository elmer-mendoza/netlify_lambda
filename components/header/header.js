import React from 'react'
import './header.scss'

function Header() {

const handleSample = async() => {
  console.log("fetch")
    await fetch('https://lustrous-crepe-401a2c.netlify.app/.netlify/functions/sample',{mode: 'no-cors'}
   ).then(r=>r.json()).then(d=>console.log("data",d))
 
}

  return (
    <div className='header' onClick={handleSample}>this is Header</div>
  )
}

export default Header