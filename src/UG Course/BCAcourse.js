import '../Css/UGCourseHome.css'
import React from 'react'
import Assets from "../Assets/Assets";
import '../Css/BCAcourse.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";

const BCAcourse = () => {
   
    const[bca,setbca]=useState([
      {
        degreename:"General",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"UX Design",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Artificial Intelligence",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Blockchain Technology",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Data Science & Analytics",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Data Science",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Cloud Technology & Information Security",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Cyber Security",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Cloud Computing",
        years:"3 Years",
        fees:"79500"
      },
      {
        degreename:"Computer Science & IT",
        years:"3 Years",
        fees:"79500"
      },
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
      <ul className="ugsidebarList">
        <li className={active === "/UGCourses/" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/UGCourses/")}><FaGraduationCap style={{marginRight:"5px"}}/>B.Com</li>
        <li className={active === "/UGCourses/" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/UGCourses/BA")}><FaGraduationCap style={{marginRight:"5px"}}/>BA</li>      
        <li className={active === "/UGCourses/BCA" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/UGCourses/BCA")} style={{color:"white",backgroundColor:"#1868ae"}}><FaGraduationCap style={{marginRight:"5px"}}/>BCA</li>
        <li className={active === "/UGCourses/BBA" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/UGCourses/BBA")}><FaGraduationCap style={{marginRight:"5px"}}/>BBA</li>
      </ul>
      </div>


    <div className="col-lg-9">
        <div className="bcahome container">
        <div className="row">
        {bca?.map((data,index)=>(
            <div className="col-lg-3">
            <div className='card mt-5' key={index}>
                <img  src={Assets?.career1} style={{width:"100px",height:"100px"}}/>
                <h6 className='text-center mt-3'>BCA ({data.degreename})</h6>
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

export default BCAcourse;
