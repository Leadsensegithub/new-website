import React from 'react'
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import '../../Css/Error_page.css'
import { useNavigate } from 'react-router-dom';

function Error_page() {

    const Navigate = useNavigate();
    
      const Homepage = (e) => {
        Navigate(e);
      };
    
  return (
    <div className='error-page mt-5'>
      <h1 className='mt-3 mb-3' style={{color:"#087FFF"}}>OOPS!</h1>
      <h5 className='mb-3' style={{color:"red"}}>404-Page Not Found</h5>
      <button onClick={()=>Homepage("/")}>Go to Home  Page <MdOutlineArrowCircleLeft />      </button>
    </div>
  )
}

export default Error_page

