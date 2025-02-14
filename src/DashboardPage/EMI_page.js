import React, { useState } from "react";
import "../Css/EMIpage.css";
import { CgProfile } from "react-icons/cg";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { MdEmail } from "react-icons/md";
import { FaTransgender } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { FaRegIdCard } from "react-icons/fa6";
import { TbMapPinCode } from "react-icons/tb";
import Assets from "../Assets/Assets";





function EMI_page() {
  const [phone, setPhone] = useState("");

  return (
    <div className="emi">
      <h2>Personal Info</h2>
      <div className="emi-btns">
        <button>
          <h2>Salaried</h2>
          <p>Fixed Monthly income</p>
        </button>

        <button>
          <h2>Other</h2>
          <p>Business Owner/Non-Working</p>
        </button>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <h4 className="mt-3 mb-3" style={{ color: "#087FFF" }}>
            Student Details
          </h4>
          <div className="row">
            <div className="col-lg-5">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <CgProfile />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Firstname"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <CgProfile />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Lastname"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="input-group mb-3">
                <PhoneInput
                  defaultCountry="in"
                  name="mobNo"
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <MdEmail />
                </span>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                <FaTransgender />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Gender"
                  aria-label="Gender"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
                
            <div className="col-lg-5">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                <GiBigDiamondRing />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Marital Status"
                  aria-label="Marital Status"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                <FaRegIdCard />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="PAN Number"
                  aria-label="PAN Number"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                <TbMapPinCode />
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Pin code"
                  aria-label="Pin code"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="col-lg-10 col-sm-12 col-12 mt-3">
                      <div className="form_sumbit">
                        <button
                          className="btn btn-primary"
                        >
                          Continue
                        </button>
                      </div>
                    </div>

          </div>
        </div>


        <div className="col-lg-4">
          <img src={Assets?.loan} alt="loan" style={{width:"400px",height:"400px"}} className="loan"/>
        </div>
      </div>
    </div>
  );
}

export default EMI_page;
