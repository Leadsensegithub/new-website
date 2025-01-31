import React, { useState } from "react";
import "../../Css/Common.css";
import Assets from "../../Assets/Assets";

function Student_alumni() {
  const [stuAlumni, setStuAlumni] = useState([
    {
      img: Assets?.priya,
      companyname:"HCL"
    },
    {
      img: Assets?.priya,
      companyname:"HCL"
    },
    {
      img: Assets?.priya,
      companyname:"HCL"
    },
    {
      img: Assets?.priya,
      companyname:"HCL"
    },
    {
      img: Assets?.priya,
      companyname:"HCL"
    },
    {
      img: Assets?.priya,
      companyname:"HCL"
    },
    {
      img: Assets?.priya,
      companyname:"HCL"
    },
    {
      img: Assets?.priya,
      companyname:"HCL"
    },
    {
      img: Assets?.priya,
      companyname:"HCL"
    },
    {
      img: Assets?.priya,
      companyname:"HCL"
    },
    {
      img: Assets?.priya,
      companyname:"HCL"
    },
    {
      img: Assets?.priya,
      companyname:"HCL"
    },
    {
      img: Assets?.priya,
      companyname:"HCL"
    },
    {
      img: Assets?.priya,
      companyname:"HCL"
    },
    {
      img: Assets?.priya,
      companyname:"HCL"
    },
    {
      img: Assets?.priya,
      companyname:"HCL"
    },
    {
      img: Assets?.priya,
      companyname:"HCL"
    },
    {
      img: Assets?.priya,
      companyname:"HCL"
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
                  <div className="card">
                    <div className="student-alumni-details">
                      <img src={data.img} alt={data.name} />
                      <h6>{data.companyname}</h6>
                    </div>
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
