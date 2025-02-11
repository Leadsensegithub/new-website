import React, { useState } from "react";
import "../../Css/Common.css";
import Assets from "../../Assets/Assets";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Academic_counsellor() {
  const [Ac, setAc] = useState([
    {
      img: Assets?.profile,
      name: "John",
      years: "5 Years Experience",
    },
    {
      img: Assets?.profile,
      name: "Mary",
      years: "4 Years Experience",
    },
    {
      img: Assets?.profile,
      name: "Jency",
      years: "4 Years Experience",
    },
    {
      img: Assets?.profile,
      name: "Rajesh",
      years: "3 Years Experience",
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
      <h4>Academic Counsellor</h4>
      <div className="row">
        {Ac?.map((data, index) => {
          return (
            <div className="col-12 col-lg-3 col-sm-6 col-md-4" key={index}>
              <div className="card">
                <div className="d-flex justify-content-center">
                  <div className="academic-details">
                    <img src={data.img} alt={data.name} />
                    <h5>{data.name}</h5>
                    <h6>{data.years}</h6>
                  </div>
                  <div className="academic-contact-details">
                    <button onClick={handlecall}>
                      <IoCall style={{color:"darkblue"}} />

                    </button>
                    <button onClick={() => handlewhatsapp()}>
                      <FaWhatsapp style={{color:"green"}}/>

                    </button>
                    <button onClick={handlemail}>
                      <IoMail style={{color:"orange"}}/>
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
