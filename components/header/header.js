import React from 'react'
import './header.scss'
import axios from 'axios'

function Header() {

const handleData = async(data) => {
  
  const result=  await axios(`/${data}` )
  // const result=  await axios(`https://lustrous-crepe-401a2c.netlify.app/.netlify/functions/${data}` )

console.log(`result for ${data}`,result)
 
}

  return (
    <React.Fragment>
    <div className='header' onClick={()=>handleData('getResumeData')}>getResumeData</div>
    <div className='header' onClick={()=>handleData('getReviews')}>getReviews</div>
    <div className='header' onClick={()=>handleData('postReview')}>postReview</div>
    </React.Fragment>
  )
}

export default Header