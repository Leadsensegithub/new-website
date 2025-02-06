import React from 'react'
import Assets from '../Assets/Assets'
import { IoIosRefresh } from "react-icons/io";


function Header() {
  return (
    <div>
             <div className='header d-flex justify-content-between p-3'>
                <div>
                    <img src={Assets?.Logoinnerblack} width={'100px'} />
                </div>

                <div className='navbar_sign'>
                    <div>
                        <button type="button" class="btn btn-outline-primary">sign in</button>
                    </div>
                    <div>
                        <IoIosRefresh />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Header
