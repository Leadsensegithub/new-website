import React, { useState } from "react";
import Assets from "../../Assets/Assets";

function Uni_register() {
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
  ]);

  const [values, setValues] = useState({
    userName: "",
    gender: "",
    email: "",
    mobNo: "",
    dob: "",
    state: "",
    city: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    gender: "",
    email: "",
    mobNo: "",
    dob: "",
    state: "",
    city: "",
  });

  const Validation = () => {
    let formErrors = {};
    let isValid = false;

    if (!values.userName) {
      formErrors.userName = "Name is required!";
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

    if (!values.mobNo) {
      formErrors.mobNo = "Number is required!";
      isValid = true;
    }

    if (!values.state) {
      formErrors.state = "State is required!";
      isValid = true;
    }
    if (!values.country) {
      formErrors.country = "Country is required!";
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

  const [num, setNum] = useState({
    years: "7 years",
    experience: "Year Of Experiance",

    stu: "1000+",
    tru_stu: "Trusted Student",

    coun: "50+",
    academic_coun: "Academic Counselor",
  });

  return (
    <div>
      <main className="iniversities mt-5">
        <div className="text-center">
          <h1>Welcome to our Top Universities</h1>
          <p>
            {" "}
            when an unknow printer tok a gal ut also the leap into electronic
            typesetting lorem lorem universities top welocme to the vision.
          </p>
        </div>
        <div className="uni-image mt-5 mb-5">
          <div className="uni-image">
            <div className="item-main">
              {image?.map((data, index) => {
                return (
                  <div className="items" key={index}>
                    <img src={data?.img1}></img>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="uni-content">
          <div className="container-fluid">
            <div className="university_form">
              <div className="row  mt-5">
                <div className="col-lg-8">
                  <h1 className="text-capitalize">Register now</h1>
                  <h4>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    rhoncus ut,
                  </h4>

                  <div className="row">
                    <div className="col-lg-4 mt-3">
                      <h2>{num?.years}</h2>
                      <h3>{num?.experience}</h3>
                    </div>
                    <div className="col-lg-4 mt-3">
                      <h2>{num?.stu}</h2>
                      <h3>{num?.tru_stu}</h3>
                    </div>
                    <div className="col-lg-4 mt-3">
                      <h2>{num?.coun}</h2>
                      <h3>{num?.academic_coun}</h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="register_form">
                    <div className="row ">
                      <div className="col-lg-12 col-sm-12 col-12 mt-3">
                        <h3 className="text-center mt-3 mb-3 text-dark">
                          contact academic counsellor
                        </h3>
                      </div>

                      <div className="col-lg-12 col-sm-12 col-12 mt-3">
                        <span className="cost">
                          No Cost EMI From &#8377;5,999/-
                        </span>
                      </div>

                      <div className="col-lg-12 col-sm-12 col-12 input mt-3">
                        <div className="input-form">
                          <label>Full name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="userName"
                            value={values.userName}
                            onChange={(e) => handleChange(e)}
                          />
                          {errors.userName && (
                            <small style={{ color: "red",fontSize:"10px" }}>
                              {errors.userName}
                            </small>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6 col-6 mt-3">
                        <div className="input-form">
                          <label>Gender</label>
                          <input
                            type="text"
                            className="form-control"
                            name="gender"
                            value={values.gender}
                            onChange={(e) => handleChange(e)}
                          />
                          {errors.gender && (
                            <small style={{ color: "red",fontSize:"10px" }}>
                              {errors.gender}
                            </small>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6 col-6 mt-3">
                        <div className="input-form">
                          <label htmlFor="exampleFormControlInput1">
                            Email 
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            value={values.email}
                            onChange={(e) => handleChange(e)}
                          />

                          {errors.email && (
                            <small style={{ color: "red",fontSize:"10px" }}>
                              {errors.email}
                            </small>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6 col-6 mt-3">
                        <div className="input-form">
                          <label>Phone</label>
                          <input
                            type="number"
                            className="form-control"
                            value={values.mobNo}
                            onChange={(e) => handleChange(e)}
                          />
                          {errors.mobNo && (
                            <small style={{ color: "red",fontSize:"10px" }}>
                              {errors.mobNo}
                            </small>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6 col-6 mt-3">
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
                            <small style={{ color: "red",fontSize:"10px" }}>{errors.dob}</small>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6 col-6 mt-3">
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
                            <small style={{ color: "red",fontSize:"10px" }}>
                              {errors.state}
                            </small>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6 col-6 mt-3">
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
                          <small style={{ color: "red",fontSize:"10px" }}>
                            {errors.country}
                          </small>
                        )}
                      </div>
                      </div>

                      <div className="col-lg-12 col-sm-12 col-12 mt-1">
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Uni_register;
