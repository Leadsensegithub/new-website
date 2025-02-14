import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

function Header_explore({
  isModalOpen,
  styles,
  closeModal,
  stopPropagation,
  values,
  errors,
  handleChange,
  handleSubmit,
  phone,
  setPhone,
  CloseModal
}) {
  return (
    <div>
      {isModalOpen && (
        <div style={styles.modalOverlay} onClick={CloseModal}>
          <div
            style={styles.modalContent}
            // onClick={(e) => stopPropagation()}
            className="modal-content"
          >
            <div>
              <div className="col-lg-12">
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
                          className="form-control"
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
                          className="form-control"
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

                    <div className="col-lg-6 col-sm-6 mt-3">
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
                          className="form-select"
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
                        <button onClick={CloseModal} className="w-100" style={styles.closeButton}>
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
  );
}

export default Header_explore;
