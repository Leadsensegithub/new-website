import React from 'react'
import { HiOutlineAcademicCap } from "react-icons/hi";
import Assets from '../Assets/Assets';
import '../Css/Enrollment.css'


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
      </div>
  )
}

export default Enrollment_details
