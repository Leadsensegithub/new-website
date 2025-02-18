import '../Css/UGCourseHome.css'
import React from 'react'
import Assets from "../Assets/Assets";
import '../Css/BBAcourse.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";

const MCAcourse = () => {
   
    const [mca,setmca]=useState([
      {
        degreename:"Computer Science & IT",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Data Analytics (Accredited by IoA, UK)",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Cyber Security",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"General",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Cloud Computing",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Full Stack Development",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Data Analytics",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Artificial Intelligence & Machine Learning",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"Data Science",
        years:"2 Years",
        fees:"79500"
      },
      {
        degreename:"AI & Data Science",
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
        <li className={active === "/PGCourses/" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/PGCourses/MBA")}><FaGraduationCap style={{marginRight:"5px"}}/>MBA</li>      
        <li className={active === "/PGCourses/MCA" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/PGCourses/MCA")}><FaGraduationCap style={{marginRight:"5px",color:"white",backgroundColor:"#1868ae"}}/>MCA</li>
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
        {mca?.map((data,index)=>(
                <div className="col-lg-3">
                <div className='card mt-5' key={index}>
                    <img  src={Assets?.career1} style={{width:"100px",height:"100px"}}/>
                    <h6 className='text-center mt-3'>MCA ({data.degreename})</h6>
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

export default MCAcourse;
