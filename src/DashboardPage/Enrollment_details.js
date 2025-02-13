import React from 'react'
import Assets from '../Assets/Assets';
import '../Css/Enrollment.css'
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


function Enrollment_details() {
  return (
    <div className='enrollment'>
        <h2 className='text-start'>Enrollment</h2>
        <p>Currently active enrollments</p>
        <div className='program'>
            <div className='card'>
                <h6 className='ps-3 mt-2'>Haven't take any program?</h6>
                <p className='ps-3'>lorem  paratage experince work the server the unverisity graduation of the year</p>
            </div>
        </div>



        <div className='cv'>
        <h4 className='mt-3'>Career With CV</h4>
           <div className='row'>
            <div className='col-lg-4'>
            <div className='card'>
                    <img src={Assets?.career2} alt='career' style={{width:"100px",height:"100px"}} className='mt-3 mb-2'/>
                    <h6>Career Guides & Tips</h6>
        </div>
        </div>

        <div className='col-lg-4'>
            <div className='card'>
                    <img src={Assets?.career1} alt='career' style={{width:"100px",height:"100px"}} className='mt-3 mb-2'/>
                    <h6>Career Finder & Tips</h6>
            </div>
        </div>
        </div>
        </div>
        

        <h6 className='mt-3' style={{color:"#087FFF"}}>Consult Real Experts for free!</h6>
        <div className='contact mt-3'>
          <button style={{background:"green",color:"white"}}><FaWhatsapp /> Whatsapp </button>
          <button style={{background:"darkblue", color:"white"}}><IoCall /> Call Now </button>
        </div>
      </div>
  )
}

export default Enrollment_details
