import React, { useState } from "react";
import '../Css/UGCourseHome.css'
import Assets from "../Assets/Assets";
import { FaGraduationCap } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const UGCourseHome = () => {
   
    const [bcom,setbcom] = useState([
      {
        degreename:"General",
        years:"3 Years",
        fees:"1,39,000"
      },
      {
        degreename:"Accounting & Finance",
        years:"3 Years",
        fees:"1,39,000"
      },
      {
        degreename:"Corporate & Accounting",
        years:"3 Years",
        fees:"1,39,000"
      },
      {
        degreename:"International Finance & Accounting",
        years:"3 Years",
        fees:"1,39,000"
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
      <ul className="ugsidebarList">
        <li className={active === "/UGCourses/" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/UGCourses/")} style={{color:"white",backgroundColor:"#1868ae"}}><FaGraduationCap style={{marginRight:"5px"}}/>B.Com</li>
        <li className={active === "/UGCourses/" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/UGCourses/BA")}><FaGraduationCap style={{marginRight:"5px"}}/>BA</li>      
        <li className={active === "/UGCourses/BCA" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/UGCourses/BCA")}><FaGraduationCap style={{marginRight:"5px"}}/>BCA</li>
        <li className={active === "/UGCourses/BBA" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/UGCourses/BBA")}><FaGraduationCap style={{marginRight:"5px"}}/>BBA</li>
      </ul>
      </div>


    <div className="col-lg-9">
        <div className="UGhome container">
        <div className="row">
      {bcom?.map((data, index) => {
        return (
            <div className="col-lg-3  " key={index}>
          <div className="card mt-5">
            <img src={Assets?.career1}  style={{width:"100px",height:"100px"}}/>
            <h6 className="text-center mt-3">B.Com ({data.degreename})</h6>
            <h6 className="text-center mt-1">Duration:{data.years}</h6>
            <h6 className="text-center mt-1" style={{color:"black"}}>Fees:{data.fees}</h6>
            
          </div>
          </div>
          
        );
      })}
      </div></div>
     </div>
    </div>
    </div>
  );
};

export default UGCourseHome;
