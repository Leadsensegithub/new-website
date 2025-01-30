import React, { useState } from "react";
import '../Css/Common.css'
import Uni_register from "./Uni_register";
import Home_header from "./Home_header";
import Popular_Courses from "./Popular_Courses";
import Academic_counsellor from "./Academic_counsellor";

function Home() {
  return (
    <div className="home_page">
      <div className="row">
        <div className="col-lg-12">
          <Home_header />
        </div>
        <div className="col-lg-12">
          <Popular_Courses />
        </div>
        <div className="col-lg-12">
          <Academic_counsellor />
        </div>  
        <div className="col-lg-12">
          <Uni_register />
        </div>
      </div>

    </div>
  );
}

export default Home;
