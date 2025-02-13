import React, { useState } from "react";
import { IoIosWallet } from "react-icons/io";
import "../Css/Offerspage.css";
import { FaPlus } from "react-icons/fa";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Assets from "../Assets/Assets";
import { IoMdDownload } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";



function Offers_page() {
  const styles = {
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
    <div className="offerspage">
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="row">
              <div className="col-lg-7">
                <h2 className="mt-3 text-center">
                  CV Wallet <IoIosWallet />
                </h2>
                <h6 className="ps-5 mt-3">Get CV Subsidy Cashback Upto</h6>
                <h2 className="mt-3" style={{ color: " #087FFF" }}>
                  ₹5000
                </h2>
                <p className="ps-5">
                  Note:CV Subsidy is a cash reward given by College All to
                  Students.
                </p>
                <button className="applybtn ms-5 mt-3">Tap to Apply</button>
              </div>

              <div
                style={styles.linksContainer}
                className="reference col-lg-1 mt-3"
              >
                <button onClick={openModal} style={styles.linkButton}>
                  <FaPlus style={{ marginRight: "2px" }} />
                  Add Reference Lead
                </button>

                <img src={Assets?.wallet} alt="wallet" style={{width:"250px"}} className="mt-5" />
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
                            <h2 style={{color:"#087FFF"}}>Form</h2>

                            <div className="col-lg-12 col-sm-12 col-12 mt-3 ">
                      <div className="input-form">
                        <label>Full Name</label>
                        <input
                          class="form-control"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-sm-12 col-12 mt-3 ">
                      <div className="input-form">
                        <label>Phone Number</label>
                        <input
                          class="form-control"
                          type="number"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-sm-12 col-12 mt-3 ">
                      <div className="input-form">
                        <label>Email Id</label>
                        <input
                          class="form-control"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-sm-12 col-12 mt-3 ">
                      <div className="input-form">
                        <label>Age</label>
                        <input
                          class="form-control"
                          type="text"
                        />
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
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="qrcode">
              <h2 className="mt-3">Exclusive Referral Link</h2>
              <img src={Assets?.QR} alt="QR Code" />
              <button className="mt-4">
                <IoMdDownload />
                Download
              </button>
              <div className="contact">
              <button className="mt-5">
                <IoCall style={{color:"darkblue",fontSize:"25px"}}/>
                </button>
                <button className="mt-5">
                  <FaInstagram style={{color:"deeppink",fontSize:"25px"}} />
                </button>
                <button className="mt-5">
                  <FaWhatsapp  style={{color:"darkgreen",fontSize:"25px"}}/>
                </button>
                <button className="mt-5">
                  <FaLinkedin  style={{color:"darkblue",fontSize:"25px"}} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers_page;
