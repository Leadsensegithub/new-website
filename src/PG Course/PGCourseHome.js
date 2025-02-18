import React, { useState } from "react";
import '../Css/UGCourseHome.css'
import Assets from "../Assets/Assets";
import { FaGraduationCap } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PGCourseHome = () => {
   
    const [ma,setma] = useState([
      {
        degreename:"English",
        years:"2 Years",
        fees:"76,000"
      },
      {
        degreename:"Sociology",
        years:"2 Years",
        fees:"76,000"
      },
      {
        degreename:"Political Science",
        years:"2 Years",
        fees:"76,000"
      },
      {
        degreename:"History",
        years:"2 Years",
        fees:"76,000"
      },
      {
        degreename:"Economics",
        years:"2 Years",
        fees:"76,000"
      },
      {
        degreename:"Public Policy",
        years:"2 Years",
        fees:"76,000"
      },
      {
        degreename:"Public Administration",
        years:"2 Years",
        fees:"76,000"
      },
      {
        degreename:"Journalism & Mass Communication",
        years:"2 Years",
        fees:"76,000"
      },{
        degreename:"Mass Communication",
        years:"2 Years",
        fees:"76,000"
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
        <li className={active === "/PGCourses/" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/PGCourses/")} style={{color:"white",backgroundColor:"#1868ae"}}><FaGraduationCap style={{marginRight:"5px"}}/>MA</li>
        <li className={active === "/PGCourses/MBA" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/PGCourses/MBA")}><FaGraduationCap style={{marginRight:"5px"}}/>MBA</li>      
        <li className={active === "/PGCourses/MCA" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/PGCourses/MCA")}><FaGraduationCap style={{marginRight:"5px"}}/>MCA</li>
        <li className={active === "/PGCourses/MCOM" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/PGCourses/MCOM")}><FaGraduationCap style={{marginRight:"5px"}}/>M.Com</li>
            <li className={active === "/PGCourses/MSC" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/PGCourses/MSC")}><FaGraduationCap style={{marginRight:"5px"}}/>MSC</li>
      </ul>
      </div>


    <div className="col-lg-9">
        <div className="UGhome container">
        <div className="row">
      {ma?.map((data, index) => {
        return (
            <div className="col-lg-3  " key={index}>
          <div className="card mt-5">
            <img src={Assets?.career1}  style={{width:"100px",height:"100px"}}/>
            <h6 className="text-center mt-3">MA({data.degreename})</h6>
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

export default PGCourseHome;
