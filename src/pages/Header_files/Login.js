import React, { useState } from "react";
import "../../Css/Login.css";
import Assets from "../../Assets/Assets";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()

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

  return (
    <div>
 <nav className="loginlogo  navbar navbar-light" style={{background:"#087FFF",top:"0px",position:"sticky"}}>
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

              <div className="col-lg-6">
                <div className="form-container">
                  <div className="row">
                    <div>
                      <section className="vh-100">
                        <div className="container-fluid h-custom">
                          <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-sm-12 col-12">
                              <form>
                                <h2
                                  className="text-center mb-2"
                                  style={{ color: "#087FFF" }}
                                >
                                  Login Form
                                </h2>

                                <div className="col-lg-12 col-sm-6 mt-3">
                                  <label
                                    className="form-label"
                                    for="form3Example3"
                                  >
                                    Email address
                                  </label>
                                  <input
                                    type="email"
                                    id="form3Example3"
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                  />
                                </div>

                                <div className="col-lg-12 col-sm-6 mt-3">
                                  <label
                                    className="form-label"
                                    for="form3Example4"
                                  >
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    id="form3Example4"
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                  />
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="form-check mb-0">
                                    <input
                                      className="form-check-input me-2"
                                      type="checkbox"
                                      value=""
                                      id="form2Example3"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="form2Example3"
                                    >
                                      Remember me
                                    </label>
                                  </div>
                                  <a href="#!" className="text-body">
                                    Forgot password?
                                  </a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                  <div className="text-center mt-3">
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                    >
                                      Login
                                    </button>
                                  </div>
                                  <p class="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account?{" "}
                                    <a href="#!" className="link-danger" onClick={()=>navigate("/sign-in")}>
                                      Sign up
                                    </a>
                                  </p>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Login;
