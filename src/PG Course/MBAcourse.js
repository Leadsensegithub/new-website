import '../Css/UGCourseHome.css'
import React from 'react'
import Assets from "../Assets/Assets";
import '../Css/BBAcourse.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";

const MBAcourse = () => {
   
    const [mba,setmba]=useState([
      {
        degreename:"General Management",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Marketing",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Finance",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"HRM",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Systems & Operations Management",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Banking & Finance SP Program",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Integrated Marketing SP Program",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Digital Finance SP Program",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Strategic HRM SP Program",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"International Business Management",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Finance & Marketing",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"HRM & Finance",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Marketing & HRM",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Project Management",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"IT Management",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Healthcare Management",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Entrepreneurship & Leadership",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Logistics & Supply Chain Management",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Sports Management",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"IT Management",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Healthcare Management",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Entrepreneurship & Leadership",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Logistics & Supply Chain Management",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Sports Management",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Business Intelligence & Analytics",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"International Finance (Accredited by ACCA, UK)",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Operations Management",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Retail Management",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Analytics & Data Science",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Information Systems",
        years:"2 Years",
        fees:"79500"
      }
    ])

    const [active, setActive] = useState("/PGCourses/");
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
        <li className={active === "/PGCourses/" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/PGCourses/")}><FaGraduationCap style={{marginRight:"5px"}}/>MA</li>
        <li className={active === "/PGCourses/MBA" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/PGCourses/MBA")}><FaGraduationCap style={{marginRight:"5px" ,color:"white",backgroundColor:"#1868ae"}}/>MBA</li>      
        <li className={active === "/PGCourses/MCA" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/PGCourses/MCA")}><FaGraduationCap style={{marginRight:"5px"}}/>MCA</li>
            <li className={active === "/PGCourses/MCOM" ? "sidebarItem active" : "sidebarItem"}
                        onClick={() => UGpage("/PGCourses/MCOM")}><FaGraduationCap style={{marginRight:"5px"}}/>M.Com</li>
                        <li className={active === "/PGCourses/MSC" ? "sidebarItem active" : "sidebarItem"}
                        onClick={() => UGpage("/PGCourses/MSC")}><FaGraduationCap style={{marginRight:"5px"}}/>MSC</li>
      </ul>
      </div>
      </div>


    <div className="col-lg-9">
        <div className="bbahome container">
        <div className="row">
        {mba?.map((data,index)=>(
                <div className="col-lg-3">
                <div className='card mt-5' key={index}>
                    <img  src={Assets?.career1} style={{width:"100px",height:"100px"}}/>
                    <h6 className='text-center mt-3'>MBA ({data.degreename})</h6>
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

export default MBAcourse;
