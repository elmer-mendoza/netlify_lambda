import React from 'react'
import './header.scss'
import axios from 'axios'

function Header() {

const handleSample = async() => {
  console.log("fetch")
  const result=  await axios('https://lustrous-crepe-401a2c.netlify.app/.netlify/functions/sample' )
  //   await fetch('https://lustrous-crepe-401a2c.netlify.app/.netlify/functions/sample',{mode: 'no-cors'}
  //  ).then(r=>r.json()).then(d=>console.log("data",d))
console.log("result",result)
 
}

  return (
    <div className='header' onClick={handleSample}>this is Header</div>
  )
}

export default Header