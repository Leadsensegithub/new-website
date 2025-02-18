import '../Css/UGCourseHome.css'
import React from 'react'
import Assets from "../Assets/Assets";
import '../Css/BAcourse.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";

const BAcourse = () => {
   
  const [ba,setba]=useState([
    {
     degreename:"English",
     Years:"3 Years",
     Fees:"45,800"
  },
  {
    degreename:"History",
    Years:"3 Years",
    Fees:"45,800"
 },
 {
  degreename:"Computer Applications",
  Years:"3 Years",
  Fees:"45,800"
},
{
  degreename:"Economics",
  Years:"3 Years",
  Fees:"45,800"
},
{
  degreename:"Political Science",
  Years:"3 Years",
  Fees:"45,800"
},
{
  degreename:"Public Policy & Development",
  Years:"3 Years",
  Fees:"45,800"
},
{
  degreename:"Psychology",
  Years:"3 Years",
  Fees:"45,800"
},
{
  degreename:"International Relations",
  Years:"3 Years",
  Fees:"45,800"
},
{
  degreename:"Journalism & Mass Communication",
  Years:"3 Years",
  Fees:"45,800"
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
            onClick={() => UGpage("/UGCourses/")}><FaGraduationCap style={{marginRight:"5px"}}/>B.Com</li>
        <li className={active === "/UGCourses/" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/UGCourses/BA")} style={{color:"white",backgroundColor:"#1868ae"}}><FaGraduationCap style={{marginRight:"5px"}}/>BA</li>      
        <li className={active === "/UGCourses/BCA" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/UGCourses/BCA")}><FaGraduationCap style={{marginRight:"5px"}}/>BCA</li>
        <li className={active === "/UGCourses/BBA" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => UGpage("/UGCourses/BBA")}><FaGraduationCap style={{marginRight:"5px"}}/>BBA</li>
      </ul>
      </div>


    <div className="col-lg-9">
        <div className="bahome container">
        <div className="row">
        {ba?.map((data,index)=>(
            <div className="col-lg-3">
            <div className='card mt-5' key={index}>
                <img  src={Assets?.career1} style={{width:"100px",height:"100px"}}/>
                <h6 className='text-center mt-3'>BA ({data.degreename})</h6>
                <h6 className="text-center mt-1">Duration:{data.Years}</h6>
            <h6 className="text-center mt-1" style={{color:"black"}}>Fees:{data.Fees}</h6>
                </div>
                </div>
        ))}

      </div></div>
     </div>
    </div>
    </div>
  );
};

export default BAcourse;
