import React from 'react'
import '../../Css/Loader.css'
import Assets from '../../Assets/Assets'

function Loader() {
  return (
    <div className='loading-screen'>
              <div className='loading-screen__logo'>
              <img src={Assets?.Logo} style={{width:"50px"}}/>
              </div>
    </div>
  )
}

export default Loader
