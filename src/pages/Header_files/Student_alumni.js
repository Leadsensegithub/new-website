import React, { useState } from "react";
import "../../Css/Common.css";
import Assets from "../../Assets/Assets";

function Student_alumni() {
  const [stuAlumni, setStuAlumni] = useState([
    {
      img: Assets?.kaviya,
      companyname:"TCS"
    },
    {
      img: Assets?.Gowtham,
      companyname:"Infosys"
    },
    {
      img: Assets?.Ananth,
      companyname:"Cognizant"
    },
    {
      img: Assets?.Deepak,
      companyname:"HCL"
    },
    {
      img: Assets?.Keerthi,
      companyname:"Wipro"
    },
    {
      img: Assets?.Sreya,
      companyname:"Capgemini"
    },
    {
      img: Assets?.Janani,
      companyname:"IBM"
    },
    {
      img: Assets?.SriRam,
      companyname:"PayPal"
    },
    {
      img: Assets?.Karthik,
      companyname:"HCL"
    },
    {
      img: Assets?.Suba,
      companyname:"Infosys"
    },
    {
      img: Assets?.Mathan,
      companyname:"HCL"
    },
    {
      img: Assets?.Anu,
      companyname:"Wipro"
    },
    {
      img: Assets?.Kumar,
      companyname:"PayPal"
    },
    {
      img: Assets?.Siva,
      companyname:"IBM"
    },
    {
      img: Assets?.Diya,
      companyname:"ZOHO"
    },
    {
      img: Assets?.Priya,
      companyname:"Oracle"
    },
    {
      img: Assets?.Selvi,
      companyname:"Capgemini"
    },
    {
      img: Assets?.Harish,
      companyname:"ZOHO"
    },
    {
      img: Assets?.Maha,
      companyname:"PayPal"
    },  
    {
      img: Assets?.Krishna,
      companyname:"IBM"
    },
    {
      img: Assets?.Pavi,
      companyname:"Infosys"
    }

  ]);
  return (
    <div className="alumni-heading">
      <h4>STUDENT ALUMNI</h4>
      <h2>10000+</h2>
      <h5>Our Students</h5>
      <div className="container">
        <div className="row">
          <div className="alumni-images">
            {stuAlumni?.map((data, index) => {
              return (
                <div className="student-alumni-images" key={index}>
                    <div className="student-alumni-details">
                      <img src={data.img} alt={data.name} />
                      <h6>{data.companyname}</h6>
                    </div>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student_alumni;
