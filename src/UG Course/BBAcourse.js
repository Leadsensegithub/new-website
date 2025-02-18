import '../Css/UGCourseHome.css'
import React from 'react'
import Assets from "../Assets/Assets";
import '../Css/BBAcourse.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";

const BBAcourse = () => {
   
    const [bba,setbba]=useState([
      {
        degreename:"General",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"HRM",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Finance",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Marketing",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"International Business",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Entrepreneurship",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Logistics & Supply Chain",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Event Management",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Retail Operations",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Hospital Management",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Investment Banking",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Logistics & Supply Chain Management",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Digital Marketing",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Fintech",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Retail Management",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"IT & Systems Management",
        years:"3 Years",
        fees:"79500"
      }
    ])

    const [active, setActive] = useState("/UGCourses/");
      const navigate = useNavigate();
    
      const UGpage = (e) => {
        navigate(e);
        setActive(e);
      };

  return (
    <div className="ugsidebar"> 
    <div className="row">
        <div className="col-lg-3">
            <div className='mobile'>
      <ul className="ugsidebarList">
        <li className={active === "/UGCourses/" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/UGCourses/")}><FaGraduationCap style={{marginRight:"5px"}}/>B.Com</li>
        <li className={active === "/UGCourses/" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/UGCourses/BA")}><FaGraduationCap style={{marginRight:"5px"}}/>BA</li>      
        <li className={active === "/UGCourses/BCA" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/UGCourses/BCA")}><FaGraduationCap style={{marginRight:"5px"}}/>BCA</li>
        <li className={active === "/UGCourses/BBA" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/UGCourses/BBA")} style={{color:"white",backgroundColor:"#1868ae"}}><FaGraduationCap style={{marginRight:"5px"}}/>BBA</li>
      </ul>
      </div>
      </div>


    <div className="col-lg-9">
        <div className="bbahome container">
        <div className="row">
        {bba?.map((data,index)=>(
                <div className="col-lg-3">
                <div className='card mt-5' key={index}>
                    <img  src={Assets?.career1} style={{width:"100px",height:"100px"}}/>
                    <h6 className='text-center mt-3'>BBA ({data.degreename})</h6>
                    <h6 className="text-center mt-1">Duration:{data.years}</h6>
                    <h6 className="text-center mt-1" style={{color:"black"}}>Fees:{data.fees}</h6>
                    </div>
                    </div>
            ))}
      </div></div>
     </div>
    </div>
    </div>
  );
};

export default BBAcourse;
