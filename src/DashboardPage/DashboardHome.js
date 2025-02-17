import React, { useState } from "react";
import Assets from "../Assets/Assets";
import { PhoneInput } from "react-international-phone";
import '../Css/DashBoardhome.css';
import { FaDownload } from "react-icons/fa";


function DashboardHome() {
    const [phone, setPhone] = useState("");

    // console.log(phone)
  
    const [values, setValues] = useState({
      userName: "",
      age: "",
      dob: "",
      email: "",
      mobNo: "",
      state: "",
      city: "",
      qualification: "",
    });
  
    const [errors, setErrors] = useState({
      userName: "",
      age: "",
      dob: "",
      email: "",
      mobNo: "",
      state: "",
      city: "",
      qualification: "",
    });
  
    const Validation = () => {
      let formErrors = {};
      let isValid = false;
  
      if (!values.userName) {
        formErrors.userName = "Name is required!";
        isValid = true;
      }
      if (!values.age) {
        formErrors.age = "Age is required!";
        isValid = true;
      }
      if (!values.dob) {
        formErrors.dob = "Date of birth is required!";
        isValid = true;
      }
      if (!values.gender) {
        formErrors.gender = "Gender is required!";
        isValid = true;
      }
  
      if (!values.email) {
        formErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        formErrors.email = "Invalid email format";
      }
  
      console.log(phone);
      if (!phone.slice(3)) {
        formErrors.mobNo = "Mobile Number is required!";
        isValid = true;
      }
  
      if (phone.slice(3) > 10) {
        formErrors.mobNo = "Please Enter a Valid Number";
      }
  
      if (!values.state) {
        formErrors.state = "State is required!";
        isValid = true;
      }
      if (!values.country) {
        formErrors.country = "Country is required!";
        isValid = true;
      }
      if (!values.qualification) {
        formErrors.qualification = "Qualification is required!";
        isValid = true;
      }
  
      setErrors(formErrors);
    };
  
    const handleChange = (e) => {
      // const validate = Validation();
      const { name, value } = e.target;
      // console.log(handleChange);
      setValues({
        ...values,
        [name]: value,
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      const validate = Validation();
      // console.log(validate);
    };
  
    return (
        <>
              <div className="home">
      <div className="row">
        {/* <div className="col-lg-12"> */}
      

        <div className="col-lg-7 mt-5">
            <div className="reg">
              <div className="registration-container mt-5">
                <div className="row">
                  <div className="col-lg-12 col-sm-12 col-12">
                    {/* <div className="card" style={{color:"white"}}>
                      <h5>Profile Details</h5>
                      <h6>Welcome to College All</h6>
                    </div> */}
                    <h4 className="text-center">Contact Details</h4>
                  </div>

                  <div className="col-lg-12 col-sm-12 col-12 mt-3 ">
                    <div className="input-form">
                      <label>Full Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="userName"
                        value={values.userName}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>

                  {errors.userName && (
                    <small style={{ color: "red" }}>{errors.userName}</small>
                  )}

                  <div className="col-lg-6 col-sm-6  mt-3">
                    <div className="input-form">
                      <label for="exampleFormControlInput1">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        value={values.email}
                        onChange={(e) => handleChange(e)}
                      />

                      {errors.email && (
                        <small style={{ color: "red" }}>{errors.email}</small>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6  mt-3">
                    <div className="input-form">
                      <label>Phone Number</label>
                      <PhoneInput
                        defaultCountry="in"
                        name="mobNo"
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                      />

                      {errors.mobNo && (
                        <small style={{ color: "red" }}>{errors.mobNo}</small>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6 mt-3">
                    <div className="input-form">
                      <label>State</label>
                      <input
                        className="form-control"
                        type="text"
                        name="state"
                        value={values.state}
                        onChange={(e) => handleChange(e)}
                      />

                      {errors.state && (
                        <small style={{ color: "red" }}>{errors.state}</small>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6 mt-3">
                    <div className="input-form">
                      <label>Country</label>
                      <input
                        className="form-control"
                        type="text"
                        name="country"
                        value={values.country}
                        onChange={(e) => handleChange(e)}
                      />

                      {errors.country && (
                        <small style={{ color: "red" }}>{errors.country}</small>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-12 col-12 mt-3">
                    <div className="form_sumbit">
                      <button
                        className="btn"
                        onClick={handleSubmit}
                        style={{backgroundColor:"#1868ae",color:"white"
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
            
        <div className="col-lg-4 mt-3">
          <div className="cvcard">
        <button className="download mb-2"><FaDownload /> Download </button>
          <div className="card">
            <h2 className="mt-3 mb-2">CV Premium Card 
            </h2>
            <div className="card">
              <h2  className="mt-2" style={{color:"#1868ae"}}>College All</h2>
              <img src={Assets?.Logo} class="card-img-top" alt="..." />
            <div className="card-body">
              {/* <h5
                className="card-title text-center"
                style={{ color: "black",fontSize:"25px" }}
              >
                College ALL
              </h5> */}
              <p className="">clgwebsite@gmail.com</p>
              <a href="#" className="btn">
                +91 9087878687
              </a>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    
        </>
    )
}
export default DashboardHome