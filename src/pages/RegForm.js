import React, { useState } from "react";
import "../Css/RegForm.css";
import Assets from "../Assets/Assets";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

function RegForm() {
  const [image, setImage] = useState([
    {
      img1: Assets?.Jain_University_logo,
      url: "Jain University",
    },
    {
      img1: Assets?.Chandigarh_University_logo,
      url: "Chandigarh University",
    },
    {
      img1: Assets?.Noida_International_University_logo,
      url: "Noida International University",
    },
    {
      img1: Assets?.DY_Patil_University_logo,
      url: "D.Y. Patil University",
    },
    {
      img1: Assets?.KIIT_University_logo,
      url: "KIIT University",
    },
    {
      img1: Assets?.Dr_MGR_University_logo,
      url: "Dr. MGR University",
    },
    {
      img1: Assets?.Andhra_University_logo,
      url: "Andhra University",
    },
    {
      img1: Assets?.Kurukshetra_University_logo,
      url: "Kurukshetra University",
    },
    {
      img1: Assets?.OP_Jindal_Global_University_logo,
      url: "OP Jindal Global University",
    },
    {
      img1: Assets?.Vivekananda_Global_University_logo,
      url: "Vivekananda Global University",
    },
    {
      img1: Assets?.Bharathidasan_University_logo,
      url: "Bharathidasan University",
    },
    {
      img1: Assets?.Koneru_Lakshmaiah_Education_Foundation_KL_University_logo,
      url: "Koneru Lakshmaiah Education Foundation (KL University",
    },
    {
      img1: Assets?.Vignan_University_logo,
      url: "Vignan University",
    },
    {
      img1: Assets?.Jain_University_logo,
      url: "Jain University",
    },
  ]);

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
    <div>
      
        <nav className="navbar navbar-light" style={{background:"#087FFF",top:"0px",position:"sticky"}}>
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src={Assets?.Logoinnerblack}
                alt="Logo"
                width="200"
                height="50"
              />
            </a>
            {/* <a className="btn btn-primary" href="#">
              Sign Up
            </a> */}
          </div>
        </nav>

  

  <div className="container">
      <div className="reg">
        <div className="container">
          {/* <div className="row"> */}
          {/* <div className="col-lg-12"> */}
          <div className="registration-container mt-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-container">
                  <div className="row">
                    <div className="col-lg-12 col-sm-12 col-12">
                      <h4 className="text-center">Compare & Apply from 100+</h4>
                    </div>
                    <div className="col-lg-12 col-sm-12 col-12">
                      <h6 className="text-center">
                        Best University for
                        <span>PhD for Working Professionals Course</span>
                      </h6>
                    </div>

                    <div className="col-lg-12 col-sm-12 col-12 mt-3 ">
                      <div className="input-form">
                        <label>Full Name</label>
                        <input
                          class="form-control"
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

                    <div className="col-lg-6 col-sm-6 mt-3">
                      <div className="input-form">
                        <label>Age</label>
                        <input
                          class="form-control"
                          name="age"
                          type="text"
                          value={values.age}
                          onChange={(e) => handleChange(e)}
                        />

                        {errors.age && (
                          <small style={{ color: "red" }}>{errors.age}</small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6  mt-3">
                      <div className="input-form">
                        <label for="exampleFormControlInput1">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          class="form-control"
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
                        <label>Date Of Birth</label>
                        <input
                          data-provide="datepicker"
                          className="form-control"
                          style={{ width: "100%" }}
                          name="dob"
                          placeholder="DD/MM/YYYY"
                          value={values.dob}
                          onChange={(e) => handleChange(e)}
                        />
                        {errors.dob && (
                          <small style={{ color: "red" }}>{errors.dob}</small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 mt-3">
                      <div className="input-form">
                        <label>State</label>
                        <input
                          class="form-control"
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
                          class="form-control"
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={(e) => handleChange(e)}
                        />

                        {errors.country && (
                          <small style={{ color: "red" }}>
                            {errors.country}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-12 col-sm-6 mt-3">
                      <div className="input-form">
                        <label>Highest Qualification</label>
                        <select
                          class="form-select"
                          name="qualification"
                          value={values.qualification}
                          onChange={(e) => handleChange(e)}
                        >
                          <option value="1">Post Graduation</option>
                          <option value="2">Graduation 3+ Years Exp </option>
                          <option value="3">Graduation</option>
                          <option value="4">Completed 12</option>
                        </select>
                        {errors.country && (
                          <small style={{ color: "red" }}>
                            {errors.qualification}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-12 col-sm-12 col-12 mt-3">
                      <div className="form_sumbit">
                        <button
                          className="btn btn-primary"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="university-container">
                  <h4>
                    Fill in your details now to <br></br>
                    access your list...
                  </h4>
                  <div className="university-details">
                    {image.map((data, index) => {
                      return (
                        <div key={index} className="university-items">
                          <img src={data?.img1} alt={data?.url} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="globe-gif">
                    <img src={Assets?.globe1} alt="Globe image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // </div>
    // </div>
  );
}

export default RegForm;
