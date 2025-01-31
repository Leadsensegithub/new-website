import React from 'react'
import '../../Css/Loader.css'
import Assets from '../../Assets/Assets'

function Loaders() {
  return (
    <div className='loading-screen'>
      <div className='loading-screen__logo'>
        <img src={Assets?.Logo} style={{ width: "50px" }} />
      </div>
    </div>
  )
}

export default Loaders
