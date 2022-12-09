import React from 'react'
import './header.scss'
import axios from 'axios'

function Header() {

const handleData = async(data) => {
  
  const result=  await axios(`https://lustrous-crepe-401a2c.netlify.app/.netlify/functions/${data}` )
  //   await fetch('https://lustrous-crepe-401a2c.netlify.app/.netlify/functions/sample',{mode: 'no-cors'}
  //  ).then(r=>r.json()).then(d=>console.log("data",d))
console.log("result",result)
 
}

  return (
    <React.Fragment>
    <div className='header' onClick={()=>handleData('getResumeData')}>getResumeData</div>
    <div className='header' onClick={()=>handleData('getReviews')}>getResumeData</div>
    <div className='header' onClick={()=>handleData('postReview')}>getResumeData</div>
    </React.Fragment>
  )
}

export default Header