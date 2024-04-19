import React from 'react'
import image from  "../images/back.png"
import "../components/background.css"

const Background = () => {
  return (
    <div>
        <div className='img'>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Background