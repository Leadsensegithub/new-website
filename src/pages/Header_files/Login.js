import React, { useState } from "react";
import "../../Css/Login.css";
import Assets from "../../Assets/Assets";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Login() {
  const Navigate = useNavigate();

  const Dashboard = (e) => {
    Navigate(e);
  };

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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


  const handleLogin = () => {

    if (loginEmail === "collegeall@gmail.com" && loginPass === "123") {
      Dashboard("/dashboard");
    } else {
      setErrorMsg("Please Enter Valid Email And Password");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="reg">
          <div className="container">
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
                                      value={loginEmail}
                                      onChange={(e) => setLoginEmail(e.target.value)}
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
                                      value={loginPass}
                                      onChange={(e) => setLoginPass(e.target.value)}
                                    />
                                  </div>

                                  {errorMsg && <small className="text-danger mt-2">{errorMsg}</small>}

                                  <div className="d-flex justify-content-end align-items-center" >
                                    <a href="#!" className="text-body">
                                      Forgot password?
                                    </a>
                                  </div>

                                  <div className="text-center text-lg-start mt-4 pt-2">
                                    <div className="text-center mt-3">
                                      <button
                                        onClick={()=>handleLogin()}
                                        type="button"
                                        className="btn btn-primary"
                                      >
                                        Login
                                      </button>
                                    </div>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                      Don't have an account?{" "}
                                      <a
                                        href="#!"
                                        className="link-danger"
                                        onClick={() => Navigate("/sign-in")}
                                      >
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
