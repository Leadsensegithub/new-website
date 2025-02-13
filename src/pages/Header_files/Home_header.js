import React, { useState } from "react";
import "../../Css/Common.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

function Home_header() {
  const [items, setItems] = useState({
    heading: "the premium system education",
    paratag: "future of education technology",
    btn1: "expolre universities",
    home_1: {
      years: "7 years",
      experience: "year of experiance",

      stu: "1000+",
      tru_stu: "trusted student",

      coun: "50+",
      academic_coun: "academic counselor",
    },
    home_2: {
      head: "popular online course",
      paratag:
        "lorem  paratage experince work the server the unverisity graduation of the year",
    },
  });

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleClickSmallScreen = () => {
    const small = navigate("./sign-in");
  };

  const handleClickLargeScreen = () => {
    openModal();
  };

  const styles = {
    linksContainer: {
      display: "flex",
      gap: "1rem",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "8px",
      width: "500px",
      // height: "200px",
      textAlign: "center",
    },
    closeButton: {
      backgroundColor: "red",
      color: "#fff",
      border: "none",
      padding: "0.5rem 1rem",
      cursor: "pointer",
      borderRadius: "4px",
      fontSize: "16px",
      minWidth: "0px",
      width: "100%",
    },
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
    <div className="home-page1 text-center mb-4  text-capitalize">
      <div className="home-heading">
        <div className="home-heading-title">
          <h1>{items.heading}</h1>
          <p className="fs-3">{items.paratag}</p>

          <div style={styles.linksContainer} className="mobilee">
            <button
              className="home-btn px-3"
              onClick={
                isSmallScreen ? handleClickSmallScreen : handleClickLargeScreen
              }
              style={styles.linkButton}
            >
              {items.btn1}
            </button>
          </div>
          {isModalOpen && (
            <div style={styles.modalOverlay} onClick={closeModal}>
              <div
                style={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
                className="modal-content"
              >
                <div>
                  <div className="col-lg-12">
                    <div className="form-container">
                      <div className="row">
                        <div className="col-lg-12 col-sm-12 col-12">
                          <h4 className="text-center">
                            Compare & Apply from 100+
                          </h4>
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
                            {errors.userName && (
                              <small style={{ color: "red" }}>
                                {errors.userName}
                              </small>
                            )}
                          </div>
                        </div>

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
                              <small style={{ color: "red" }}>
                                {errors.age}
                              </small>
                            )}
                          </div>
                        </div>

                        <div className="col-lg-6 col-sm-6 mt-3">
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
                              <small style={{ color: "red" }}>
                                {errors.email}
                              </small>
                            )}
                          </div>
                        </div>

                        <div className="col-lg-6 col-sm-6 mt-3">
                          <div className="input-form">
                            <label>Phone Number</label>
                            <PhoneInput
                              defaultCountry="in"
                              name="mobNo"
                              value={phone}
                              onChange={(phone) => setPhone(phone)}
                            />
                            {errors.mobNo && (
                              <small style={{ color: "red" }}>
                                {errors.mobNo}
                              </small>
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
                              <small style={{ color: "red" }}>
                                {errors.dob}
                              </small>
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
                              <small style={{ color: "red" }}>
                                {errors.state}
                              </small>
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
                              <option value="2">
                                Graduation 3+ Years Exp{" "}
                              </option>
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

                        <div className="col-lg-6 col-sm-12 col-12 mt-3">
                          <div className="form_sumbit">
                            <button
                              className="btn btn-primary"
                              onClick={handleSubmit}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-12 mt-3">
                          <div>
                            <button
                              onClick={closeModal}
                              style={styles.closeButton}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="home-page1 ">
        <div className="row home-borders">
          <div className="col-lg-4 mt-3 col-4">
            <h2>{items.home_1.years} </h2>
            <h3>{items.home_1.experience}</h3>
          </div>
          <div className="col-lg-4 mt-3 col-4">
            <h2>{items.home_1.stu}</h2>
            <h3>{items.home_1.tru_stu}</h3>
          </div>
          <div className="col-lg-4 mt-3 col-4">
            <h2>{items.home_1.coun}</h2>
            <h3>{items.home_1.academic_coun}</h3>
          </div>
        </div>
      </div>

      <div className="home-heading-bottom">
        <div>
          <h1>{items.home_2.head}</h1>
          <p>{items.home_2.paratag}</p>
        </div>
      </div>
    </div>
  );
}

export default Home_header;
