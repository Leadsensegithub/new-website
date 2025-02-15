import React, { useState } from "react";
import "../../Css/Common.css";
import Assets from "../../Assets/Assets";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Academic_counsellor() {
  const [Ac, setAc] = useState([
    {
      img: "https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png",
      name: "John",
      years: "5 Years Experience",
      des: "Dedicated academic counselor with expertise in career guidance and student development.",
    },
    {
      img: "https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png",
      name: "Mary",
      years: "4 Years Experience",
      des: "Experienced in student mentorship, helping learners choose the right educational and career paths.",
    },
    {
      img: "https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png",
      name: "Jency",
      years: "4 Years Experience",
      des: "Passionate about student success, specializing in academic planning and personal growth strategies.",
    },
    {
      img: "https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png",
      name: "Rajesh",
      years: "3 Years Experience",
      des: "Expert in college admissions counseling and educational goal setting for students of all levels.",
    },
  ]);


  const handlecall = () => {
    window.location.href = "tel:919500294188"
  }
  const handlewhatsapp = () => {
    window.location.href = "https://wa.me/919500294188"
    console.log("click")
  }
  const handlemail = () => {
    window.location.href = "mailto:admissions@zolearn.com"
  }

  return (

    <div className="academic-heading">
      <h3 className="mb-5 text-center">Academic Counsellor</h3>
      <div className="row">
        {Ac?.map((data, index) => {
          return (
            <div className="col-12 col-lg-3 col-sm-6 col-md-4" key={index}>
              <div className="card" style={{ height: "320px" }}>
                <div className="d-flex justify-content-center">
                  <div className="academic-details" style={{ textAlign: "start" }}>
                    <div className="image" style={{ backgroundColor: "#efebeb",textAlign:"center" }}>
                      <img src={data.img} alt={data.name} />
                    </div>
                    <div style={{padding:"0px 0px 0px 70px"}}>
                      <h5>{data.name}</h5>
                      <h6>{data.years}</h6>
                      <p>{data?.des}</p>
                    </div>
                  </div>
                  <div className="academic-contact-details">
                    <button onClick={handlecall}>
                      <IoCall style={{ color: "darkblue" }} />

                    </button>
                    <button onClick={() => handlewhatsapp()}>
                      <FaWhatsapp style={{ color: "green" }} />

                    </button>
                    <button onClick={handlemail}>
                      <IoMail style={{ color: "orange" }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Academic_counsellor;
